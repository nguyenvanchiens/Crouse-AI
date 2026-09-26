import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { C, flat, COURSE_TITLE, lessonUrl, lessonNum, totalMinutes, fmtMin } from '../lib/course.js';
import { progress, learner, useStore } from '../lib/store.js';
import { BrandMark } from '../components/Visuals.jsx';

// Mã chứng nhận: băm FNV-1a từ tên và thời điểm hoàn thành
function certCode(name, at) {
  let h = 2166136261;
  for (const ch of name + at) { h ^= ch.charCodeAt(0); h = Math.imul(h, 16777619); }
  return 'TAI-' + (h >>> 0).toString(36).toUpperCase().padStart(7, '0');
}

export default function Certificate() {
  useStore();
  useEffect(() => { document.title = 'Chứng nhận hoàn thành | Tuyến AI'; }, []);
  const at = progress.completedAt();

  if (!at) {
    const nxt = progress.next();
    return (
      <main id="main" className="wrap cert-page">
        <div className="cert-locked">
          <h1>Chứng nhận chưa được mở khoá</h1>
          <p>Bạn còn {flat.length - progress.total()} bài nữa. Đánh dấu hoàn thành tất cả {flat.length} bài để nhận chứng nhận có tên mình.</p>
          <Link className="btn btn-brand" to={lessonUrl(nxt.id)}>Học tiếp bài {lessonNum(nxt)}</Link>
        </div>
      </main>
    );
  }

  const me = learner.get() || {};
  const name = me.name || 'Học viên Tuyến AI';
  const date = new Date(at).toLocaleDateString('vi-VN', { day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <main id="main" className="wrap cert-page">
      <div className="cert-tools">
        <p>{!me.name && <>Chưa có tên trên chứng nhận. <Link to="/hoc-cua-toi">Thêm tên ở trang Học của tôi</Link>.</>}</p>
        <button className="btn btn-dark" type="button" onClick={() => window.print()}>In hoặc lưu PDF</button>
      </div>
      <article className="certificate" aria-label="Chứng nhận hoàn thành">
        <span className="frame" aria-hidden="true" />
        <div className="top"><span className="brand"><BrandMark /><span>Tuyến AI</span></span><small>Mã chứng nhận: {certCode(name, at)}</small></div>
        <div className="mid">
          <small>Chứng nhận hoàn thành khóa học trao cho</small>
          <div className="name">{name}</div>
          <div className="course">{COURSE_TITLE}: hiểu, dùng thành thạo và tự xây ứng dụng AI</div>
          <p className="desc">Đã hoàn thành {flat.length} bài học trong {C.length} chương ({fmtMin(totalMinutes())} nội dung): {C.map(t => t.title).join(', ')}.</p>
        </div>
        <div className="bottom"><div>Ngày hoàn thành<strong>{date}</strong></div><div style={{ textAlign: 'right' }}>Cấp bởi<strong>Tuyến AI</strong></div></div>
        <div className="rails" aria-hidden="true">{C.map(t => <i key={t.id} style={{ background: t.color }} />)}</div>
      </article>
    </main>
  );
}
