// Trạng thái người học lưu trong localStorage.
// useStore() đăng ký component để render lại mỗi khi dữ liệu thay đổi (kể cả từ tab khác).
import { useSyncExternalStore } from 'react';
import { flat } from './course.js';

const listeners = new Set();
let version = 0;
function emit() { version++; listeners.forEach(l => l()); }

function get(key, fallback) {
  try { const v = localStorage.getItem(key); return v ? JSON.parse(v) ?? fallback : fallback; }
  catch { return fallback; }
}
function set(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* bỏ qua: chế độ riêng tư */ }
  emit();
}

if (typeof window !== 'undefined') {
  window.addEventListener('storage', e => { if (e.key && e.key.startsWith('tuyenai.')) emit(); });
}

export function useStore() {
  return useSyncExternalStore(
    cb => { listeners.add(cb); return () => listeners.delete(cb); },
    () => version
  );
}

export const learner = {
  get: () => get('tuyenai.learner', null),
  isEnrolled: () => !!get('tuyenai.learner', null),
  enroll(name) {
    const cur = this.get();
    set('tuyenai.learner', { name: (name || '').trim() || (cur && cur.name) || '', since: (cur && cur.since) || Date.now() });
  },
  setName(name) {
    const cur = this.get() || {};
    set('tuyenai.learner', { name: name.trim(), since: cur.since || Date.now() });
  }
};

export const progress = {
  all: () => get('tuyenai.done', {}),
  isDone: id => !!get('tuyenai.done', {})[id],
  set(id, done) {
    const p = this.all();
    if (done) p[id] = Date.now(); else delete p[id];
    try { localStorage.setItem('tuyenai.last', JSON.stringify(id)); } catch { /* bỏ qua */ }
    if (!learner.isEnrolled()) learner.enroll('');
    set('tuyenai.done', p);
  },
  count(ids) { const p = this.all(); return ids.filter(id => p[id]).length; },
  total() { return this.count(flat.map(l => l.id)); },
  pct() { return Math.round(this.total() / flat.length * 100); },
  next() { const p = this.all(); return flat.find(l => !p[l.id]) || null; },
  last: () => get('tuyenai.last', null),
  touch(id) { try { localStorage.setItem('tuyenai.last', JSON.stringify(id)); } catch { /* bỏ qua */ } },
  completedAt() {
    const p = this.all();
    if (this.total() < flat.length) return null;
    return Math.max(...flat.map(l => p[l.id]));
  },
  quiz: () => get('tuyenai.quiz', {}),
  setQuiz(id, score, total) { const q = this.quiz(); q[id] = { score, total }; set('tuyenai.quiz', q); },
  reset() {
    ['tuyenai.done', 'tuyenai.quiz', 'tuyenai.last', 'tuyenai.notes', 'tuyenai.plan', 'tuyenai.skills'].forEach(k => { try { localStorage.removeItem(k); } catch { /* bỏ qua */ } });
    emit();
  }
};

export const notes = {
  all: () => get('tuyenai.notes', {}),
  get: id => get('tuyenai.notes', {})[id] || '',
  set(id, text) {
    const n = this.all();
    if (text && text.trim()) n[id] = text; else delete n[id];
    set('tuyenai.notes', n);
  }
};

// ---------- Kế hoạch học ----------
// { goal, pace, start } ; start là ngày bắt đầu kế hoạch (ms)
export const plan = {
  get: () => get('tuyenai.plan', null),
  save(goal, pace, start) { set('tuyenai.plan', { goal, pace, start }); },
  clear() { try { localStorage.removeItem('tuyenai.plan'); } catch { /* bỏ qua */ } emit(); }
};

// Năng lực tự đánh giá: khoá "chương:chỉ số"
export const skills = {
  all: () => get('tuyenai.skills', {}),
  toggle(key, on) { const s = this.all(); if (on) s[key] = Date.now(); else delete s[key]; set('tuyenai.skills', s); }
};

// ---------- Theme ----------
export const theme = {
  current() {
    return document.documentElement.getAttribute('data-theme') ||
      (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  },
  toggle() {
    const next = this.current() === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    set('tuyenai.theme', next);
  }
};
