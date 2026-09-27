import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { C, flat, LESSONS, lessonInfo, lessonUrl, lessonNum, trackMinutes, fmtMin, ytThumb, COURSE_TITLE } from '../lib/course.js';
import { progress, learner, notes, plan, useStore } from '../lib/store.js';
import { planStatus, goalById } from '../lib/plan.js';
import { useUI } from '../lib/ui.jsx';
import { Cover, Html, Ring } from '../components/Visuals.jsx';
import { IPlay } from '../components/Icons.jsx';

// Tóm tắt kế hoạch học (tạo ở trang Cách học)
function PlanCard() {
  const p = plan.get();
  if (!p) {
    return (
      <div className="side-card plan-mini">
        <h2>Kế hoạch học</h2>
        <p>Chọn mục tiêu và nhịp học để có lịch theo tuần, mốc dự án và nhắc tiến độ.</p>
        <Link className="btn btn-dark btn-block" to="/cach-hoc" style={{ marginTop: 12 }}>Tạo kế hoạch học</Link>
      </div>
    );
  }
  const s = planStatus(p);
  return (
    <div className={`side-card plan-mini s-${s.state}`}>
      <h2>Kế hoạch: {goalById(p.goal).name}</h2>
      <div className="row">
        <Ring pct={Math.round(s.done / s.total * 100)} size={44} stroke={5} />
        <div><strong>Tuần {s.current}/{s.weeks.length}</strong><br /><span style={{ color: 'var(--ink-3)', fontSize: '.88rem' }}>{s.done}/{s.total} bài trong kế hoạch</span></div>
      </div>
      <p>{s.text}</p>
      <Link className="btn btn-ghost btn-block" to="/cach-hoc#ke-hoach" style={{ marginTop: 12 }}>Xem kế hoạch theo tuần</Link>
    </div>
  );
}

export default function Dashboard() {
  useStore();
  const { toast } = useUI();
  const me = learner.get();
  const [name, setName] = useState((me && me.name) || '');
  useEffect(() => { document.title = 'Học của tôi | Tuyến AI'; }, []);

  const total = progress.total();
  const pct = progress.pct();
  const quiz = progress.quiz();
  const qVals = Object.values(quiz);
  const qPct = qVals.length ? Math.round(qVals.reduce((s, q) => s + q.score, 0) / qVals.reduce((s, q) => s + q.total, 0) * 100) : null;
  const minsDone = flat.filter(l => progress.isDone(l.id)).reduce((s, l) => s + (LESSONS[l.id] ? LESSONS[l.id].duration : 0), 0);

  const last = progress.last() && lessonInfo(progress.last());
  const nxt = last && !progress.isDone(last.id) ? last : progress.next();
  const doneAll = !progress.next();
  const ns = notes.all();
  const noteLessons = flat.filter(l => ns[l.id]);
  const quizLessons = flat.filter(l => quiz[l.id]);

  function saveName(e) {
    e.preventDefault();
    learner.setName(name);
    toast('Đã lưu tên');
  }
  function reset() {
    if (!confirm('Xoá toàn bộ tiến độ, điểm kiểm tra và ghi chú trên trình duyệt này?')) return;
    progress.reset();
    toast('Đã xoá tiến độ học');
  }

  return (
    <main id="main">
      <section className="band dash-hero">
        <div className="wrap in">
          <div>
            <h1>{me && me.name ? `Chào ${me.name}` : 'Khóa học của tôi'}</h1>
            <p>{COURSE_TITLE}{me && me.since ? `, ghi danh ngày ${new Date(me.since).toLocaleDateString('vi-VN')}` : ''}</p>
          </div>
          <div className="dash-stats">
            <div><strong>{pct}%</strong><span>hoàn thành</span></div>
            <div><strong>{total}/{flat.length}</strong><span>bài đã học</span></div>
            <div><strong>{fmtMin(minsDone)}</strong><span>đã học</span></div>
            <div><strong>{qPct === null ? '–' : `${qPct}%`}</strong><span>điểm kiểm tra</span></div>
          </div>
        </div>
      </section>

      <div className="wrap dash-grid">
        <div>
          <section aria-label="Học tiếp">
            {!nxt ? (
              <div className="continue-card" style={{ '--c': 'var(--line-5)' }}>
                <div className="thumb"><Cover track={C[C.length - 1]} label="Hoàn thành khóa học" /></div>
                <div className="body">
                  <span className="k">Chúc mừng</span><h2>Bạn đã đi hết 27 ga</h2><p>Chứng nhận hoàn thành của bạn đã sẵn sàng.</p>
                  <div><Link className="btn btn-brand" to="/chung-nhan">Xem chứng nhận</Link></div>
                </div>
              </div>
            ) : (
              <Link className="continue-card" to={lessonUrl(nxt.id)} style={{ '--c': nxt.track.color }}>
                <div className="thumb">
                  {LESSONS[nxt.id] && LESSONS[nxt.id].video ? <img src={ytThumb(LESSONS[nxt.id].video.id)} alt="" /> : <Cover track={nxt.track} active={nxt.index} />}
                  <span className="play"><IPlay /></span>
                </div>
                <div className="body">
                  <span className="k">{total ? 'Học tiếp' : 'Bắt đầu'}: Chương {nxt.track.no}, bài {nxt.index + 1}</span>
                  <h2>{lessonNum(nxt)} {nxt.title}</h2>
                  {LESSONS[nxt.id] && <>
                    <Html as="p" html={LESSONS[nxt.id].summary} />
                    <p style={{ color: 'var(--ink-3)', fontSize: '.88rem' }}>{LESSONS[nxt.id].duration} phút đọc{LESSONS[nxt.id].video ? ', có video' : ''}</p>
                  </>}
                </div>
              </Link>
            )}
          </section>

          <section className="dash-sec" aria-labelledby="chap-h">
            <h2 id="chap-h">Tiến độ theo chương</h2>
            <div className="chapter-rows">
              {C.map(t => {
                const ids = t.lessons.map(l => l.id);
                const d = progress.count(ids);
                const first = t.lessons.find(l => !progress.isDone(l.id)) || t.lessons[0];
                return (
                  <div className="chapter-row" key={t.id} style={{ '--c': t.color }}>
                    <div className="thumb"><Cover track={t} /></div>
                    <div>
                      <span className="k">Chương {t.no}: {t.name}</span>
                      <h3>{t.title}</h3>
                      <div className="bar" role="img" aria-label={`Đã học ${d}/${ids.length} bài`}><i style={{ width: `${d / ids.length * 100}%` }} /></div>
                      <div className="meta">{d}/{ids.length} bài, {fmtMin(trackMinutes(t))}</div>
                    </div>
                    <Link className="btn btn-ghost btn-sm" to={lessonUrl(first.id)}>{d === 0 ? 'Bắt đầu' : d === ids.length ? 'Ôn lại' : 'Tiếp tục'}</Link>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="dash-sec" aria-labelledby="notes-h">
            <h2 id="notes-h">Ghi chú của bạn</h2>
            {noteLessons.length ? (
              <div className="chapter-rows">
                {noteLessons.map(l => (
                  <Link key={l.id} className="side-card" to={lessonUrl(l.id, 'ghi-chu')} style={{ textDecoration: 'none', margin: 0 }}>
                    <span style={{ color: l.track.color, fontWeight: 700, fontSize: '.85rem' }}>Bài {lessonNum(l)}</span>
                    <h3 style={{ fontSize: '1rem', margin: '2px 0 6px' }}>{l.title}</h3>
                    <p style={{ whiteSpace: 'pre-wrap', color: 'var(--ink-2)', fontSize: '.93rem' }}>{ns[l.id].slice(0, 280)}{ns[l.id].length > 280 ? '...' : ''}</p>
                  </Link>
                ))}
              </div>
            ) : <p className="empty">Bạn chưa có ghi chú nào. Mở tab Ghi chú trong bất kỳ bài học nào để ghi lại điều bạn rút ra.</p>}
          </section>
        </div>

        <aside>
          <PlanCard />
          <div className="side-card">
            <h2>Chứng nhận hoàn thành</h2>
            <div className={`cert-mini${doneAll ? '' : ' locked'}`}>
              <small>Chứng nhận hoàn thành khóa học</small>
              <strong>{(me && me.name) || 'Tên của bạn'}</strong>
              <small>{COURSE_TITLE}</small>
              <div className="lines">{C.map(t => <i key={t.id} style={{ background: t.color }} />)}</div>
              {!doneAll && <div className="lock"><span>Còn {flat.length - total} bài để mở khoá</span></div>}
            </div>
            {doneAll
              ? <Link className="btn btn-brand btn-block" to="/chung-nhan">Xem và in chứng nhận</Link>
              : <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}><Ring pct={pct} size={44} stroke={5} /><p>Hoàn thành cả {flat.length} bài để nhận chứng nhận có tên bạn.</p></div>}
          </div>

          <div className="side-card">
            <h2>Điểm kiểm tra</h2>
            {quizLessons.length ? (
              <ul className="score-list">
                {quizLessons.map(l => {
                  const q = quiz[l.id];
                  return <li key={l.id}><Link to={lessonUrl(l.id, 'kiem-tra')}>{lessonNum(l)} {l.title}</Link><b style={{ color: q.score === q.total ? 'var(--tip)' : 'var(--ink)' }}>{q.score}/{q.total}</b></li>;
                })}
              </ul>
            ) : <p>Chưa có bài kiểm tra nào. Mỗi bài có 3 câu hỏi ở tab Kiểm tra.</p>}
          </div>

          <div className="side-card">
            <h2>Tên trên chứng nhận</h2>
            <form className="name-form" onSubmit={saveName}>
              <label className="visually-hidden" htmlFor="name-in">Tên của bạn</label>
              <input id="name-in" value={name} onChange={e => setName(e.target.value)} maxLength={60} placeholder="Nhập tên của bạn" autoComplete="name" />
              <button className="btn btn-dark btn-sm" type="submit">Lưu</button>
            </form>
            <p style={{ marginTop: 14 }}><button className="link-btn" type="button" onClick={reset}>Xoá toàn bộ tiến độ trên trình duyệt này</button></p>
          </div>
        </aside>
      </div>
    </main>
  );
}
