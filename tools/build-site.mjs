import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const here = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(here, '..');
const outFile = path.join(repoRoot, 'docs', 'data.js');

const META = {
  'vector.cpp': {
    cat: 'STL 容器',
    title: 'vector 动态数组',
    desc: '可变长数组，随机访问最快。',
  },
  'set.cpp': {
    cat: 'STL 容器',
    title: 'set 集合与去重',
    desc: '自动去重并保持有序的集合。',
  },
  'map+pair.cpp': {
    cat: 'STL 容器',
    title: 'map 与 pair',
    desc: '键值对映射，按 key 快速查找。',
  },
  'stack and queue.cpp': {
    cat: 'STL 容器',
    title: '栈与队列',
    desc: '后进先出、先进先出两种容器。',
  },
  'iterator.cpp': {
    cat: 'STL 容器',
    title: '迭代器',
    desc: '遍历容器元素的通用指针。',
  },
  'algorithm.cpp': {
    cat: '算法库',
    title: 'algorithm 常用函数',
    desc: '排序、二分、去重、全排列等常用函数。',
  },
  '冒泡排序.cpp': {
    cat: '排序算法',
    title: '冒泡排序',
    desc: '最简单的排序，用来入门。',
  },
  '插入排序.cpp': {
    cat: '排序算法',
    title: '插入排序',
    desc: '数据接近有序时很快。',
  },
  '选择排序.cpp': {
    cat: '排序算法',
    title: '选择排序',
    desc: '每轮选出最小的放到前面。',
  },
  '字符串的拆除与拼接.cpp': {
    cat: '字符串与大数',
    title: '字符串的拆分与拼接',
    desc: '按分隔符拆开字符串，再拼回去。',
  },
  '高精度算法.cpp': {
    cat: '字符串与大数',
    title: '高精度加法',
    desc: '超出 long long 范围的大整数加法。',
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

if (items.length === 0) throw new Error('仓库根目录没有 .cpp 文件');

const grouped = CAT_ORDER.map((cat) => ({
  cat,
  items: items.filter((i) => i.cat === cat).map((i) => i.file),
})).filter((g) => g.items.length > 0);

const MUSIC_DIR = path.join(repoRoot, 'docs', 'music');
const AUDIO_EXTS = ['.mp3', '.m4a', '.ogg', '.wav', '.flac', '.aac'];
let music = [];
try {
  music = fs
    .readdirSync(MUSIC_DIR)
    .filter((f) => AUDIO_EXTS.includes(path.extname(f).toLowerCase()))
    .sort((a, b) => a.localeCompare(b, 'zh'));
} catch (e) {
  music = [];
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
console.log(`  音乐 ${music.length} 首`);
