// Kiểm tra dữ liệu bài học: đủ bài, đúng loại block, đáp án quiz hợp lệ, video không trùng.
// Chạy: npm run validate:lessons
import CURRICULUM from '../src/data/curriculum.js';
import l1 from '../src/data/lessons/level-1.js';
import l2 from '../src/data/lessons/level-2.js';
import l3 from '../src/data/lessons/level-3.js';
import l4 from '../src/data/lessons/level-4.js';
import l5 from '../src/data/lessons/level-5.js';

const L = { ...l1, ...l2, ...l3, ...l4, ...l5 };
const TYPES = ['h', 'p', 'list', 'callout', 'example', 'analogy', 'code', 'table', 'prompt', 'steps'];
const errors = [];
const videos = new Map();
let lessons = 0, quiz = 0, minutes = 0;

for (const t of CURRICULUM) {
  for (const l of t.lessons) {
    const d = L[l.id];
    if (!d) { errors.push(`${l.id}: thiếu nội dung`); continue; }
    lessons++; minutes += d.duration || 0; quiz += (d.quiz || []).length;
    if (!d.summary) errors.push(`${l.id}: thiếu summary`);
    (d.blocks || []).forEach((b, i) => { if (!TYPES.includes(b.type)) errors.push(`${l.id}: block ${i} có type lạ "${b.type}"`); });
    (d.quiz || []).forEach((q, i) => {
      if (!(Number.isInteger(q.answer) && q.answer >= 0 && q.answer < q.options.length)) errors.push(`${l.id}: câu ${i + 1} có đáp án không hợp lệ`);
    });
    if (d.video) {
      if (videos.has(d.video.id)) errors.push(`${l.id}: video trùng với ${videos.get(d.video.id)}`);
      videos.set(d.video.id, l.id);
    }
  }
}

console.log(`${lessons} bài, ${quiz} câu hỏi, ${videos.size} video, ${minutes} phút đọc`);
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log('Dữ liệu hợp lệ.');
