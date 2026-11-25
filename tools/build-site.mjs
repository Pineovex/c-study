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
    desc: '增删查都在这。注意 unique 只去掉相邻的重复，忘了先 sort 会以为它坏了。',
  },
  'set.cpp': {
    cat: 'STL 容器',
    title: 'set 集合与去重',
    desc: '又想自动排序又想能查，就用 set；只要快、不在乎顺序，用 unordered_set。末尾顺手记了 vector 怎么去重。',
  },
  'map+pair.cpp': {
    cat: 'STL 容器',
    title: 'map 与 pair',
    desc: 'key 自动排好序，查一次 O(log n)。pair 顺手写在一起，比较是字典序。',
  },
  'stack and queue.cpp': {
    cat: 'STL 容器',
    title: '栈与队列',
    desc: '一个后进先出，一个先进先出。接口就那几个，别记混。',
  },
  'iterator.cpp': {
    cat: 'STL 容器',
    title: '迭代器',
    desc: 'begin() 是第一个元素，end() 是最后一个的后面，不是最后一个。这里容易写错。',
  },
  'algorithm.cpp': {
    cat: '算法库',
    title: 'algorithm 常用函数',
    desc: 'sort 配 greater 就是降序。二分用 lower_bound，自己手写边界很容易错。',
  },
  '冒泡排序.cpp': {
    cat: '排序算法',
    title: '冒泡排序',
    desc: '最好懂也最慢，O(n²)。先把这个写熟再谈别的。',
  },
  '插入排序.cpp': {
    cat: '排序算法',
    title: '插入排序',
    desc: '像摸牌，抓到一张就往前面插。数据本来接近有序时很快。',
  },
  '选择排序.cpp': {
    cat: '排序算法',
    title: '选择排序',
    desc: '每轮挑出最小的换到前面。交换次数少，但复杂度还是 O(n²)。',
  },
  '字符串的拆除与拼接.cpp': {
    cat: '字符串与大数',
    title: '字符串的拆分与拼接',
    desc: 'istringstream 当 cin 用，把一行按空格拆开；ostringstream 反过来拼回一个字符串。',
  },
  '高精度算法.cpp': {
    cat: '字符串与大数',
    title: '高精度加法',
    desc: 'long long 装不下就只能用数组存。倒着存、逐位加、进位单独处理。',
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

// 扫描 docs/music/ 下的音频文件（用户自己上传；放到那个目录里就会被收录）
const MUSIC_DIR = path.join(repoRoot, 'docs', 'music');
const AUDIO_EXTS = ['.mp3', '.m4a', '.ogg', '.wav', '.flac', '.aac'];
let music = [];
try {
  music = fs
    .readdirSync(MUSIC_DIR)
    .filter((f) => AUDIO_EXTS.includes(path.extname(f).toLowerCase()))
    .sort((a, b) => a.localeCompare(b, 'zh'));
} catch (e) {
  // 目录不存在或读取失败 → 没有 music
}

const payload = {
  repo: 'https://github.com/Pineovex/c-study',
  generatedAt: new Date().toISOString().slice(0, 10),
  groups: grouped,
  items: Object.fromEntries(items.map((i) => [i.file, i])),
  music: music.map((file) => ({ file, title: file.replace(/\.[^.]+$/, '').replace(/[_]+/g, ' ') })),
};

fs.mkdirSync(path.dirname(outFile), { recursive: true });
fs.writeFileSync(outFile, 'window.DATA = ' + JSON.stringify(payload, null, 2) + ';\n', 'utf8');

console.log(`已生成 ${path.relative(repoRoot, outFile)}：${items.length} 个文件，${grouped.length} 个分类`);
for (const i of items) console.log(`  [${i.cat}] ${i.file}  (${i.lines} 行)`);
console.log(music.length ? `  音乐 ${music.length} 首：${music.join('、')}` : '  音乐目录为空（docs/music/）');

function options_check(list) {
  if (list.length === 0) throw new Error('仓库根目录没找到任何 .cpp 文件');
}
