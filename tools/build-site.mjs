// 由仓库根目录的 *.cpp 生成 docs/data.js（网站内容源）
// 用法：node tools/build-site.mjs
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const here = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(here, '..');
const outFile = path.join(repoRoot, 'docs', 'data.js');

// 分类、显示名、简介（按文件名匹配；没写到的文件会落到「其他」）
const META = {
  'vector.cpp': {
    cat: 'STL 容器',
    title: 'vector 动态数组',
    desc: 'push_back / pop_back / insert / erase，以及 unique 相邻去重的正确用法（先去重先排序）。',
  },
  'set.cpp': {
    cat: 'STL 容器',
    title: 'set 集合与去重',
    desc: 'set 自动升序、unordered_set 用哈希不排序、vector 喂给 set 去重、find / count / erase / lower_bound 的复杂度。',
  },
  'map+pair.cpp': {
    cat: 'STL 容器',
    title: 'map 与 pair',
    desc: '键值对映射、红黑树 O(log n) 与哈希表 unordered_map 的差别，pair 的 first / second 和按字典序比较。',
  },
  'stack and queue.cpp': {
    cat: 'STL 容器',
    title: '栈与队列',
    desc: 'stack 先进后出（top / push / pop），queue 先进先出（front / back / push / pop）。',
  },
  'iterator.cpp': {
    cat: 'STL 容器',
    title: '迭代器',
    desc: '像指针一样遍历容器：begin() 指向首元素、end() 指向最后一个元素的再下一个位置，取值要解引用。',
  },
  'algorithm.cpp': {
    cat: '算法库',
    title: 'algorithm 常用函数',
    desc: 'sort 升序与 greater 降序、max / min / swap / reverse、next_permutation 全排列、lower_bound 与 upper_bound 二分。',
  },
  '冒泡排序.cpp': {
    cat: '排序算法',
    title: '冒泡排序',
    desc: '相邻两两比较、大的往后冒，O(n²)，最直观但最慢的一版手写排序。',
  },
  '插入排序.cpp': {
    cat: '排序算法',
    title: '插入排序',
    desc: '把当前元素往前面已排好的序列里插，O(n²)，对近乎有序的数组很快。',
  },
  '选择排序.cpp': {
    cat: '排序算法',
    title: '选择排序',
    desc: '每一轮选出剩下部分的最小值换到前面，交换次数少，O(n²)。',
  },
  '字符串的拆除与拼接.cpp': {
    cat: '字符串与大数',
    title: '字符串的拆分与拼接',
    desc: 'istringstream 按空格拆出 int / string / double，ostringstream 再拼回一个字符串。',
  },
  '高精度算法.cpp': {
    cat: '字符串与大数',
    title: '高精度加法',
    desc: '用数组倒序存每一位、逐位相加再处理进位，解决 long long 也装不下的整数运算。',
  },
};

const CAT_ORDER = ['STL 容器', '算法库', '排序算法', '字符串与大数', '其他'];

function decode(buf) {
  try {
    return new TextDecoder('utf-8', { fatal: true }).decode(buf);
  } catch {
    return new TextDecoder('gbk').decode(buf);
  }
}

const files = fs
  .readdirSync(repoRoot)
  .filter((f) => f.toLowerCase().endsWith('.cpp'))
  .sort((a, b) => a.localeCompare(b, 'zh'));

const items = files.map((file) => {
  const buf = fs.readFileSync(path.join(repoRoot, file));
  const raw = decode(buf);
  const code = raw.replace(/\r\n?/g, '\n').replace(/\t/g, '    ').replace(/\s+$/, '');
  const meta = META[file] || {};
  return {
    file,
    cat: meta.cat || '其他',
    title: meta.title || file.replace(/\.cpp$/i, ''),
    desc: meta.desc || '',
    lines: code.split('\n').length,
    code,
  };
});

options_check(items);

const grouped = CAT_ORDER.map((cat) => ({
  cat,
  items: items.filter((i) => i.cat === cat).map((i) => i.file),
})).filter((g) => g.items.length > 0);

const payload = {
  repo: 'https://github.com/Pineovex/c-study',
  generatedAt: new Date().toISOString().slice(0, 10),
  groups: grouped,
  items: Object.fromEntries(items.map((i) => [i.file, i])),
};

fs.mkdirSync(path.dirname(outFile), { recursive: true });
fs.writeFileSync(outFile, 'window.DATA = ' + JSON.stringify(payload, null, 2) + ';\n', 'utf8');

console.log(`已生成 ${path.relative(repoRoot, outFile)}：${items.length} 个文件，${grouped.length} 个分类`);
for (const i of items) console.log(`  [${i.cat}] ${i.file}  (${i.lines} 行)`);

function options_check(list) {
  if (list.length === 0) throw new Error('仓库根目录没找到任何 .cpp 文件');
}