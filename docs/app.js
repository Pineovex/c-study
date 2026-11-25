/* c-study 笔记站：纯静态，无外部依赖 */
(function () {
  "use strict";

  var D = window.DATA || { items: {}, groups: [], repo: "#" };

  /* ---------------- 语法高亮（C++ 轻量版） ---------------- */

  var KEYWORDS = new Set(
    ("alignas alignof and and_eq asm auto bitand bitor bool break case catch char char8_t char16_t " +
      "char32_t class compl concept const consteval constexpr constinit const_cast continue co_await " +
      "co_return co_yield decltype default delete do double dynamic_cast else enum explicit export " +
      "extern false float for friend goto if inline int long mutable namespace new noexcept not not_eq " +
      "nullptr operator or or_eq private protected public register reinterpret_cast requires return " +
      "short signed sizeof static static_assert static_cast struct switch template this thread_local " +
      "throw true try typedef typeid typename union unsigned using virtual void volatile wchar_t while " +
      "xor xor_eq").split(" ")
  );

  var TYPES = new Set(
    ("size_t string vector map unordered_map set unordered_set stack queue pair deque list array " +
      "int64_t uint64_t istringstream ostringstream stringstream greater less").split(" ")
  );

  var QUOTES = { '"': '"', "'": "'" };

  function esc(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function isWord(c) {
    return (c >= "a" && c <= "z") || (c >= "A" && c <= "Z") || (c >= "0" && c <= "9") || c === "_";
  }

  // 返回 [{t:'text'|'span', cls, s}]
  function highlightLine(line, state) {
    var toks = [];
    var i = 0;
    var n = line.length;
    var inPP = false;
    var onlySpaceSoFar = true;

    function push(cls, s) {
      toks.push({ cls: cls, s: s });
    }
    function plain(s) {
      var last = toks[toks.length - 1];
      if (last && last.cls === null) last.s += s;
      else toks.push({ cls: null, s: s });
    }

    while (i < n) {
      var c = line[i];
      var rest = line.slice(i);

      // 块注释延续
      if (state.block) {
        var endIdx = line.indexOf("*/", i);
        if (endIdx < 0) {
          push("cm", rest);
          i = n;
        } else {
          push("cm", line.slice(i, endIdx + 2));
          i = endIdx + 2;
          state.block = false;
          onlySpaceSoFar = false;
        }
        continue;
      }

      // 注释
      if (rest.startsWith("//")) {
        push("cm", rest);
        i = n;
        break;
      }
      if (rest.startsWith("/*")) {
        state.block = true;
        continue;
      }

      // 预处理指令：# 出现在行首（前面只有空白）
      if (c === "#" && onlySpaceSoFar) {
        var m = rest.match(/^#[ \t]*[A-Za-z_]*/);
        push("pp", m[0]);
        i += m[0].length;
        inPP = true;
        onlySpaceSoFar = false;
        continue;
      }

      // 头文件名 <...>
      if (c === "<" && inPP) {
        var gt = line.indexOf(">", i);
        if (gt > 0) {
          push("st", line.slice(i, gt + 1));
          i = gt + 1;
          continue;
        }
      }

      // 字符串 / 字符
      if (QUOTES[c]) {
        var q = QUOTES[c];
        var j = i + 1;
        var closed = false;
        while (j < n) {
          if (line[j] === "\\") {
            j += 2;
            continue;
          }
          if (line[j] === q) {
            j++;
            closed = true;
            break;
          }
          j++;
        }
        push("st", line.slice(i, closed ? j : n));
        i = closed ? j : n;
        onlySpaceSoFar = false;
        continue;
      }

      // 数字
      if (c >= "0" && c <= "9") {
        var k = i;
        while (k < n && /[0-9a-fA-FxX.]/.test(line[k])) k++;
        push("nm", line.slice(i, k));
        i = k;
        onlySpaceSoFar = false;
        continue;
      }

      // 标识符
      if (/[A-Za-z_]/.test(c)) {
        var w = i;
        while (w < n && isWord(line[w])) w++;
        var word = line.slice(i, w);
        var next = line.slice(w).match(/^[ \t]*/)[0];
        var after = line[w + next.length];

        if (TYPES.has(word)) push("ty", word);
        else if (KEYWORDS.has(word)) push("kw", word);
        else if (after === "(") push("fn", word);
        else plain(word);

        i = w;
        onlySpaceSoFar = false;
        continue;
      }

      plain(c);
      if (c !== " " && c !== "\t") onlySpaceSoFar = false;
      i++;
    }

    var html = "";
    for (var t = 0; t < toks.length; t++) {
      var tk = toks[t];
      html += tk.cls ? '<span class="' + tk.cls + '">' + esc(tk.s) + "</span>" : esc(tk.s);
    }
    return html;
  }

  function renderCode(code) {
    var lines = code.split("\n");
    var state = { block: false };
    var out = [];
    for (var i = 0; i < lines.length; i++) {
      var h = highlightLine(lines[i], state);
      if (h === "") h = " ";
      out.push(
        '<div class="code-line"><span class="ln">' + (i + 1) + '</span><span class="lc">' + h + "</span></div>"
      );
    }
    return out.join("");
  }

  /* ---------------- 数据整理 ---------------- */

  var ORDER = [];
  var BY_CAT = [];
  D.groups.forEach(function (g) {
    var list = [];
    g.items.forEach(function (f) {
      var it = D.items[f];
      if (!it) return;
      list.push(it);
      ORDER.push(it);
    });
    BY_CAT.push({ cat: g.cat, items: list });
  });

  /* ---------------- DOM ---------------- */

  var navEl = document.getElementById("nav");
  var docEl = document.getElementById("doc");
  var searchEl = document.getElementById("search");
  var sidebarEl = document.getElementById("sidebar");
  var scrimEl = document.getElementById("scrim");
  var menuBtn = document.getElementById("menuBtn");
  var toastEl = document.getElementById("toast");
  var genEl = document.getElementById("genInfo");

  if (genEl) genEl.textContent = "共 " + ORDER.length + " 篇 · 更新于 " + (D.generatedAt || "");

  /* ---------------- 渲染：侧栏 ---------------- */

  function renderNav(filter) {
    var kw = (filter || "").trim().toLowerCase();
    var html = "";
    var shown = 0;

    BY_CAT.forEach(function (g) {
      var items = g.items.filter(function (it) {
        if (!kw) return true;
        return (
          it.title.toLowerCase().indexOf(kw) >= 0 ||
          it.file.toLowerCase().indexOf(kw) >= 0 ||
          (it.desc || "").toLowerCase().indexOf(kw) >= 0 ||
          g.cat.toLowerCase().indexOf(kw) >= 0
        );
      });
      if (!items.length) return;
      shown += items.length;
      html += '<div class="nav-group"><div class="nav-group-title">' + esc(g.cat) + "</div>";
      items.forEach(function (it) {
        html +=
          '<a href="#/n/' +
          encodeURIComponent(it.file) +
          '" data-file="' +
          esc(it.file) +
          '"><span class="nav-title">' +
          esc(it.title) +
          '</span><span class="nav-file">' +
          esc(it.file) +
          "</span></a>";
      });
      html += "</div>";
    });

    if (!shown) html = '<div class="empty-hint">没有匹配的笔记</div>';

    navEl.innerHTML = html;
    highlightActive();
  }

  function highlightActive() {
    var cur = currentFile();
    var links = navEl.querySelectorAll("a");
    for (var i = 0; i < links.length; i++) {
      var on = links[i].getAttribute("data-file") === cur;
      links[i].classList.toggle("active", on);
    }
  }

  /* ---------------- 渲染：正文 ---------------- */

  function currentFile() {
    var m = location.hash.match(/^#\/n\/(.+)$/);
    if (!m) return null;
    try {
      return decodeURIComponent(m[1]);
    } catch (e) {
      return null;
    }
  }

  function renderHome() {
    var html = "";
    html +=
      '<div class="hero">' +
      "<h1>C++ 竞赛笔记</h1>" +
      "<p>写给自己看的，只记 STL 和常用算法怎么用。代码都能直接编译，注释就写在对应那行旁边。</p>" +
      "<p>光看不写没用，去洛谷、力扣做题。</p>" +
      '<p class="dim">目前 ' +
      ORDER.length +
      " 篇，" +
      BY_CAT.length +
      " 个分类。</p>" +
      "</div>";

    BY_CAT.forEach(function (g) {
      html += '<div class="section-title">' + esc(g.cat) + "</div>";
      html += '<div class="card-grid">';
      g.items.forEach(function (it) {
        html +=
          '<a class="card" href="#/n/' +
          encodeURIComponent(it.file) +
          '"><span class="card-cat">' +
          esc(g.cat) +
          '</span><span class="card-title">' +
          esc(it.title) +
          '</span><span class="card-file">' +
          esc(it.file) +
          " · " +
          it.lines +
          " 行</span></a>";
      });
      html += "</div>";
    });

    docEl.innerHTML = html;
    document.title = "C++ 竞赛笔记 · c-study";
  }

  function renderNote(it) {
    var idx = ORDER.indexOf(it);
    var prev = idx > 0 ? ORDER[idx - 1] : null;
    var next = idx >= 0 && idx < ORDER.length - 1 ? ORDER[idx + 1] : null;

    var html = "";
    html += '<div class="doc-head">';
    html +=
      '<div class="crumbs"><a href="#/">首页</a><span class="sep">/</span><span>' +
      esc(it.cat) +
      "</span></div>";
    html += "<h1>" + esc(it.title) + "</h1>";
    if (it.desc) html += '<p class="doc-desc">' + esc(it.desc) + "</p>";
    html +=
      '<div class="meta-row"><span class="chip accent">' +
      esc(it.cat) +
      '</span><span class="chip">' +
      it.lines +
      " 行</span>" +
      '<a class="chip" href="' +
      esc(D.repo) +
      '/blob/main/' +
      encodeURIComponent(it.file) +
      '" target="_blank" rel="noopener" style="text-decoration:none">在 GitHub 打开 ↗</a>' +
      "</div></div>";

    html +=
      '<div class="codecard"><div class="codecard-bar">' +
      '<span class="dots"><i></i><i></i><i></i></span>' +
      '<span class="codecard-name">' +
      esc(it.file) +
      "</span>" +
      '<button class="copy-btn" type="button" id="copyBtn">复制</button>' +
      '</div><pre id="codeHost"><code>' +
      renderCode(it.code) +
      "</code></pre></div>";

    html += '<div class="pager">';
    if (prev) {
      html +=
        '<a class="prev" href="#/n/' +
        encodeURIComponent(prev.file) +
        '"><span class="dir">← 上一篇</span><span class="name">' +
        esc(prev.title) +
        "</span></a>";
    }
    if (next) {
      html +=
        '<a class="next" href="#/n/' +
        encodeURIComponent(next.file) +
        '"><span class="dir">下一篇 →</span><span class="name">' +
        esc(next.title) +
        "</span></a>";
    }
    html += "</div>";

    docEl.innerHTML = html;
    document.title = it.title + " · C++ 竞赛笔记";

    var btn = document.getElementById("copyBtn");
    if (btn) {
      btn.addEventListener("click", function () {
        copyText(it.code);
      });
    }
  }

  function renderNotFound() {
    docEl.innerHTML =
      '<div class="hero"><h1>找不到这篇笔记</h1><p>链接可能过期了，回到首页看看目录。</p>' +
      '<p><a href="#/">← 返回首页</a></p></div>';
    document.title = "找不到 · C++ 竞赛笔记";
  }

  function copyText(text) {
    function done(ok) {
      toast(ok ? "已复制到剪贴板" : "复制失败，请手动选中");
    }
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(function () {
        done(true);
      }, function () {
        fallback();
      });
    } else {
      fallback();
    }

    function fallback() {
      try {
        var ta = document.createElement("textarea");
        ta.value = text;
        ta.setAttribute("readonly", "");
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        var ok = document.execCommand("copy");
        document.body.removeChild(ta);
        done(ok);
      } catch (e) {
        done(false);
      }
    }
  }

  var toastTimer = null;
  function toast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toastEl.classList.remove("show");
    }, 1800);
  }

  /* ---------------- 路由 ---------------- */

  function route() {
    var file = currentFile();
    if (!file) {
      renderHome();
    } else {
      var it = D.items[file];
      if (it) renderNote(it);
      else renderNotFound();
    }
    highlightActive();
    window.scrollTo({ top: 0, behavior: "auto" });
    closeSidebar();
  }

  /* ---------------- 移动端侧栏 ---------------- */

  function openSidebar() {
    sidebarEl.classList.add("open");
    scrimEl.hidden = false;
    menuBtn.setAttribute("aria-expanded", "true");
  }
  function closeSidebar() {
    sidebarEl.classList.remove("open");
    scrimEl.hidden = true;
    menuBtn.setAttribute("aria-expanded", "false");
  }
  menuBtn.addEventListener("click", function () {
    if (sidebarEl.classList.contains("open")) closeSidebar();
    else openSidebar();
  });
  scrimEl.addEventListener("click", closeSidebar);

  navEl.addEventListener("click", function (e) {
    var a = e.target.closest ? e.target.closest("a") : null;
    if (a) closeSidebar();
  });

  /* ---------------- 搜索 ---------------- */

  searchEl.addEventListener("input", function () {
    renderNav(searchEl.value);
  });

  // 支持按 / 聚焦搜索
  document.addEventListener("keydown", function (e) {
    if (e.key === "/" && document.activeElement !== searchEl) {
      e.preventDefault();
      searchEl.focus();
    }
    if (e.key === "Escape" && document.activeElement === searchEl) {
      searchEl.value = "";
      renderNav("");
      searchEl.blur();
    }
  });

  /* ---------------- 启动 ---------------- */

  window.addEventListener("hashchange", route);

  renderNav("");
  route();
})();