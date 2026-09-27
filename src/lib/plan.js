// Tạo kế hoạch học theo tuần từ mục tiêu + nhịp học, và so tiến độ thực tế với kế hoạch.
import { C, flat, LESSONS } from './course.js';
import { GOALS, PACES } from '../data/study-plan.js';
import { progress } from './store.js';

const DAY = 86400000;

export const goalById = id => GOALS.find(g => g.id === id) || GOALS[GOALS.length - 1];
export const paceById = id => PACES.find(p => p.id === id) || PACES[1];

export function planLessons(goal) {
  return flat.filter(l => goal.chapters.includes(l.track.id));
}

const videoMin = id => (LESSONS[id] && LESSONS[id].video && LESSONS[id].video.minutes) || 0;
const readMin = id => (LESSONS[id] && LESSONS[id].duration) || 12;

// Mỗi tuần: danh sách bài, các chương kết thúc trong tuần (để gắn dự án), số phút đọc/xem
export function buildWeeks(goalId, paceId) {
  const goal = goalById(goalId);
  const pace = paceById(paceId);
  const lessons = planLessons(goal);
  const weeks = [];
  for (let i = 0; i < lessons.length; i += pace.perWeek) {
    const chunk = lessons.slice(i, i + pace.perWeek);
    const endsChapter = C.filter(t => goal.chapters.includes(t.id) && chunk.some(l => l.id === t.lessons[t.lessons.length - 1].id));
    weeks.push({
      no: weeks.length + 1,
      lessons: chunk,
      milestones: endsChapter.map(t => t.id),
      read: chunk.reduce((s, l) => s + readMin(l.id), 0),
      video: chunk.reduce((s, l) => s + videoMin(l.id), 0)
    });
  }
  // Tuần cuối: hoàn thiện dự án (mục tiêu xây sản phẩm) hoặc ôn tập và tự đánh giá
  weeks.push({
    no: weeks.length + 1,
    lessons: [],
    milestones: [],
    final: goal.id === 'xay' ? 'project' : 'review',
    read: 0,
    video: 0
  });
  return { goal, pace, weeks, lessons };
}

const startOfDay = ms => { const d = new Date(ms); d.setHours(0, 0, 0, 0); return d.getTime(); };

export function weekRange(start, no) {
  const from = startOfDay(start) + (no - 1) * 7 * DAY;
  return [new Date(from), new Date(from + 6 * DAY)];
}

export const fmtDate = d => d.toLocaleDateString('vi-VN', { day: 'numeric', month: 'numeric' });

// So tiến độ thực tế với kế hoạch tại thời điểm hiện tại
export function planStatus(p, now = Date.now()) {
  const { weeks, lessons } = buildWeeks(p.goal, p.pace);
  const elapsed = Math.floor((startOfDay(now) - startOfDay(p.start)) / DAY);
  const current = Math.min(Math.max(1, Math.floor(elapsed / 7) + 1), weeks.length);
  const upTo = n => weeks.slice(0, n).reduce((s, w) => s + w.lessons.length, 0);
  const shouldHave = upTo(current - 1);        // phải xong trước tuần này
  const thisWeekTarget = upTo(current);        // mục tiêu hết tuần này
  const done = progress.count(lessons.map(l => l.id));
  const total = lessons.length;

  let state, text;
  if (done >= total) { state = 'done'; text = 'Bạn đã học xong toàn bộ bài trong kế hoạch.'; }
  else if (done >= thisWeekTarget) { state = 'ahead'; text = `Vượt tiến độ: đã xong cả phần của tuần ${current}.`; }
  else if (done >= shouldHave) { state = 'ok'; text = `Đúng tiến độ. Tuần này còn ${thisWeekTarget - done} bài.`; }
  else { state = 'behind'; text = `Chậm ${shouldHave - done} bài so với kế hoạch. Học bù dần, hoặc chọn nhịp nhẹ hơn.`; }

  const nextLesson = lessons.find(l => !progress.isDone(l.id)) || null;
  const [, end] = weekRange(p.start, weeks.length);
  return { weeks, lessons, current, done, total, state, text, nextLesson, endDate: end, elapsedDays: elapsed };
}
