// Dữ liệu khóa học đã gộp sẵn và các hàm tra cứu dùng chung.
import CURRICULUM from '../data/curriculum.js';
import l1 from '../data/lessons/level-1.js';
import l2 from '../data/lessons/level-2.js';
import l3 from '../data/lessons/level-3.js';
import l4 from '../data/lessons/level-4.js';
import l5 from '../data/lessons/level-5.js';

export const C = CURRICULUM;
export const LESSONS = { ...l1, ...l2, ...l3, ...l4, ...l5 };

export const COURSE_TITLE = 'AI từ con số 0 đến Pro';

// Danh sách phẳng: mỗi bài kèm chương và vị trí trong chương
export const flat = [];
C.forEach(t => t.lessons.forEach((l, i) => flat.push({ ...l, track: t, index: i })));

export const lessonInfo = id => flat.find(l => l.id === id) || null;
export const lessonUrl = (id, tab) => `/bai-hoc/${encodeURIComponent(id)}${tab ? `?tab=${tab}` : ''}`;
export const lessonNum = l => `${l.track.no}.${l.index + 1}`;
export const duration = id => (LESSONS[id] && LESSONS[id].duration) || 12;
export const trackMinutes = t => t.lessons.reduce((s, l) => s + duration(l.id), 0);
export const totalMinutes = () => C.reduce((s, t) => s + trackMinutes(t), 0);
export const totalQuiz = Object.values(LESSONS).reduce((s, d) => s + (d.quiz ? d.quiz.length : 0), 0);
export const totalVideos = flat.filter(l => LESSONS[l.id] && LESSONS[l.id].video).length;

export function fmtMin(m) {
  const h = Math.floor(m / 60), r = m % 60;
  return h ? `${h} giờ${r ? ` ${r} phút` : ''}` : `${m} phút`;
}

export const ytThumb = id => `https://i.ytimg.com/vi/${encodeURIComponent(id)}/hqdefault.jpg`;
export const ytEmbed = id => `https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}?autoplay=1&rel=0&cc_load_policy=1`;
export const ytWatch = id => `https://www.youtube.com/watch?v=${encodeURIComponent(id)}`;
