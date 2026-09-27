import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { C, lessonUrl, lessonNum, fmtMin } from '../lib/course.js';
import { progress, plan, skills, useStore } from '../lib/store.js';
import { useUI } from '../lib/ui.jsx';
import { buildWeeks, planStatus, weekRange, fmtDate, goalById, paceById, planLessons } from '../lib/plan.js';
import { GOALS, PACES, LESSON_STEPS, PROJECTS, SKILLS, PREP, TIPS, AFTER } from '../data/study-plan.js';
import { Ring } from '../components/Visuals.jsx';
import { ICheck, IClock, IPlay, IAward, IRight } from '../components/Icons.jsx';

const TOC = [
  ['ke-hoach', 'Kế hoạch của bạn'],
  ['moi-bai', 'Cách học mỗi bài'],
  ['chuan-bi', 'Chuẩn bị'],
  ['du-an', 'Dự án thực hành'],
  ['nang-luc', 'Năng lực cần đạt'],
  ['meo', 'Mẹo học'],
  ['sau-khoa-hoc', 'Sau khóa học']
];

const trackOf = id => C.find(t => t.id === id);

function Choice({ name, value, checked, onChange, title, children, color }) {
  return (
    <label className={`choice${checked ? ' on' : ''}`} style={color ? { '--c': color } : undefined}>
      <input type="radio" name={name} value={value} checked={checked} onChange={onChange} />
      <span className="choice-body"><strong>{title}</strong>{children}</span>
    </label>
  );
}

function WeekCard({ w, start, isCurrent, goal, compact }) {
  const range = start ? weekRange(start, w.no) : null;
  const doneCount = w.lessons.filter(l => progress.isDone(l.id)).length;
  const complete = w.lessons.length > 0 && doneCount === w.lessons.length;
  // Tuần đã xong (không phải tuần này) thu gọn thành một dòng
  if (complete && !isCurrent && compact) {
    return (
      <li className="week complete compact">
        <div className="week-head">
          <span className="week-no">Tuần {w.no}</span>
          {range && <span className="week-date">{fmtDate(range[0])} đến {fmtDate(range[1])}</span>}
          <span className="week-time week-done"><ICheck />Đã xong {doneCount} bài</span>
        </div>
      </li>
    );
  }
  return (
    <li className={`week${isCurrent ? ' current' : ''}${complete ? ' complete' : ''}`}>
      <div className="week-head">
        <span className="week-no">Tuần {w.no}</span>
        {range && <span className="week-date">{fmtDate(range[0])} đến {fmtDate(range[1])}</span>}
        {isCurrent && <span className="pill here-pill">Tuần này</span>}
        {w.lessons.length > 0 && (
          <span className="week-time"><IClock />đọc {fmtMin(w.read)}{w.video ? `, video ${fmtMin(w.video)}` : ''}</span>
        )}
      </div>
      {w.lessons.some(l => l.id === 't5-b1') && (
        <p className="week-prep">Trước bài 5.1 cần biết Python cơ bản. Chưa biết thì học song song từ tuần trước, xem <a href="#chuan-bi">phần chuẩn bị</a>.</p>
      )}
      {w.lessons.length > 0 && (
        <ul className="week-lessons">
          {w.lessons.map(l => {
            const d = progress.isDone(l.id);
            return (
              <li key={l.id} className={d ? 'done' : undefined} style={{ '--c': l.track.color }}>
                <span className="wl-dot" aria-hidden="true">{d && <ICheck />}</span>
                <Link to={lessonUrl(l.id)}>{lessonNum(l)} {l.title}</Link>
                {d && <span className="visually-hidden">(đã học)</span>}
              </li>
            );
          })}
        </ul>
      )}
      {w.milestones.map(id => (
        <a key={id} className="week-milestone" href={`#du-an-${id}`} style={{ '--c': trackOf(id).color }}>
          <IAward /><span><strong>Mốc cuối chương {trackOf(id).no}:</strong> {PROJECTS[id].title}</span>
        </a>
      ))}
      {w.final === 'project' && (
        <div className="week-final">
          <strong>Hoàn thiện dự án cuối khóa và tự đánh giá</strong>
          <p>Chạy bộ đánh giá, sửa các câu trả lời sai, viết README, rồi đánh dấu các năng lực bạn đã đạt ở mục <a href="#nang-luc">Năng lực cần đạt</a>.</p>
        </div>
      )}
      {w.final === 'review' && (
        <div className="week-final">
          <strong>Ôn tập và tự đánh giá</strong>
          <p>Làm lại quiz các bài bị sai, đọc lại ghi chú, rồi đánh dấu các năng lực đã đạt ở mục <a href="#nang-luc">Năng lực cần đạt</a>. Muốn đi tiếp? Đổi mục tiêu sang {goal.id === 'dung' ? '“Hiểu AI tận gốc”' : '“Xây sản phẩm AI”'}.</p>
        </div>
      )}
    </li>
  );
}

function PlanSection() {
  useStore();
  const { toast } = useUI();
  const saved = plan.get();
  const [goal, setGoal] = useState(saved ? saved.goal : 'xay');
  const [pace, setPace] = useState(saved ? saved.pace : 'deu');
  const changed = saved && (saved.goal !== goal || saved.pace !== pace);

  const { weeks, lessons } = buildWeeks(goal, pace);
  const status = saved && !changed ? planStatus(saved) : null;
  const g = goalById(goal);
  // Mặc định chỉ hiện tới tuần kế tiếp (hoặc 2 tuần đầu khi chưa có kế hoạch)
  const [showAll, setShowAll] = useState(false);
  const lastShown = status ? Math.min(weeks.length, status.current + 1) : 2;

  function start() { plan.save(goal, pace, Date.now()); toast('Đã tạo kế hoạch, tính từ hôm nay'); }
  function update() { plan.save(goal, pace, saved.start); toast('Đã cập nhật kế hoạch'); }

  return (
    <section className="guide-sec" id="ke-hoach" aria-labelledby="kh-h">
      <h2 id="kh-h">Kế hoạch học của bạn</h2>
      <p className="lead">Chọn mục tiêu và nhịp học. Kế hoạch sẽ chia bài theo tuần, đặt mốc dự án cuối mỗi chương và theo dõi xem bạn đang nhanh hay chậm.</p>

      <fieldset className="choice-group">
        <legend><span className="step-no" aria-hidden="true">1</span>Bạn muốn đạt đến đâu?</legend>
        <div className="choices choices-3">
          {GOALS.map(x => {
            const n = planLessons(x).length;
            return (
              <Choice key={x.id} name="goal" value={x.id} checked={goal === x.id} onChange={() => setGoal(x.id)} title={x.name}>
                <span className="choice-meta">Chương {x.chapters.map(id => trackOf(id).no).join(', ')}, {n} bài</span>
                <span className="choice-lines" aria-hidden="true">{C.map(t => <i key={t.id} style={{ background: x.chapters.includes(t.id) ? t.color : 'var(--surface-2)' }} />)}</span>
                <span>{x.for}</span>
                <span className="choice-result"><strong>Học xong bạn sẽ:</strong> {x.result}</span>
                <span className="choice-needs">Cần có: {x.needs}</span>
              </Choice>
            );
          })}
        </div>
      </fieldset>

      <fieldset className="choice-group">
        <legend><span className="step-no" aria-hidden="true">2</span>Bạn học được bao nhiêu mỗi tuần?</legend>
        <div className="choices choices-3">
          {PACES.map(x => {
            const w = Math.ceil(lessons.length / x.perWeek) + 1;
            return (
              <Choice key={x.id} name="pace" value={x.id} checked={pace === x.id} onChange={() => setPace(x.id)} title={`${x.name}: ${x.perWeek} bài/tuần`}>
                <span className="choice-meta">Khoảng {w} tuần cho mục tiêu này</span>
                <span>{x.note}</span>
              </Choice>
            );
          })}
        </div>
      </fieldset>

      <div className="plan-bar">
        <div>
          <span className="step-no" aria-hidden="true">3</span>
          <strong>{g.name}</strong>, {paceById(pace).perWeek} bài/tuần: {lessons.length} bài trong {weeks.length} tuần
          {saved && !changed && <span className="plan-since">, bắt đầu từ {new Date(saved.start).toLocaleDateString('vi-VN')}</span>}
        </div>
        <div className="plan-actions">
          {!saved && <button className="btn btn-brand" type="button" onClick={start}>Bắt đầu kế hoạch</button>}
          {changed && <button className="btn btn-brand" type="button" onClick={update}>Lưu thay đổi</button>}
          {saved && <button className="btn btn-ghost btn-sm" type="button" onClick={start}>Bắt đầu lại từ hôm nay</button>}
        </div>
      </div>

      {status && (
        <div className={`plan-status s-${status.state}`} role="status">
          <Ring pct={Math.round(status.done / status.total * 100)} size={52} stroke={6} />
          <div>
            <strong>Tuần {status.current}/{status.weeks.length}: {status.done}/{status.total} bài</strong>
            <p>{status.text} Dự kiến xong ngày {status.endDate.toLocaleDateString('vi-VN')}.</p>
          </div>
          {status.nextLesson && (
            <Link className="btn btn-dark" to={lessonUrl(status.nextLesson.id)}>Học bài {lessonNum(status.nextLesson)}<IRight /></Link>
          )}
        </div>
      )}

      <ol className="weeks">
        {weeks.filter(w => showAll || w.no <= lastShown).map(w => (
          <WeekCard key={w.no} w={w} goal={g} compact={!showAll} start={saved && !changed ? saved.start : null} isCurrent={!!status && status.current === w.no} />
        ))}
      </ol>
      {weeks.length > lastShown && (
        <button className="btn btn-ghost btn-block weeks-more" type="button" aria-expanded={showAll} onClick={() => setShowAll(v => !v)}>
          {showAll ? 'Thu gọn kế hoạch' : `Hiện đủ ${weeks.length} tuần (còn ${weeks.length - lastShown} tuần)`}
        </button>
      )}
    </section>
  );
}


function SkillsSection() {
  useStore();
  const got = skills.all();
  const total = SKILLS.reduce((s, g) => s + g.items.length, 0);
  const have = Object.keys(got).length;
  return (
    <section className="guide-sec" id="nang-luc" aria-labelledby="nl-h">
      <h2 id="nl-h">Bạn đã làm chủ AI khi làm được những việc này</h2>
      <p className="lead">Đọc xong chưa phải là biết. Sau mỗi chương, tự hỏi mình có làm được từng việc dưới đây mà không cần xem lại bài không. Làm được thì đánh dấu.</p>
      <div className="skills-sum">
        <Ring pct={Math.round(have / total * 100)} size={44} stroke={5} />
        <p><strong>{have}/{total} năng lực</strong> bạn tự đánh giá là đã đạt</p>
      </div>
      <div className="skills">
        {SKILLS.map(g => {
          const t = trackOf(g.chapter);
          return (
            <div key={g.chapter} className="skill-group" style={{ '--c': t.color }}>
              <h3><span>Chương {t.no}</span>{g.group}</h3>
              <ul>
                {g.items.map((it, i) => {
                  const key = `${g.chapter}:${i}`;
                  return (
                    <li key={key}>
                      <label>
                        <input type="checkbox" checked={!!got[key]} onChange={e => skills.toggle(key, e.target.checked)} />
                        <span>{it}</span>
                      </label>
                    </li>
                  );
                })}
              </ul>
              <Link className="skill-link" to={`/#${t.id}`}>Xem các bài chương {t.no}</Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default function StudyGuide() {
  useStore();
  useEffect(() => { document.title = 'Cách học khóa học | Tuyến AI'; }, []);
  const started = progress.total() > 0;

  return (
    <main id="main">
      <header className="band page-head"><div className="wrap">
        <h1>Cách học khóa học này</h1>
        <p>Học theo thứ tự nào, mỗi tuần bao nhiêu, mỗi bài học ra sao, và làm sao biết mình đã thực sự làm chủ AI.</p>
        <nav className="guide-toc" aria-label="Mục lục trang">
          {TOC.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}
        </nav>
      </div></header>

      <div className="wrap guide">
        <PlanSection />

        <section className="guide-sec" id="moi-bai" aria-labelledby="mb-h">
          <h2 id="mb-h">Cách học mỗi bài: 6 bước, khoảng 20 đến 30 phút</h2>
          <p className="lead">Làm đủ 6 bước, nhất là bước 4 và bước 6. Đó là chỗ phân biệt giữa người “đã đọc về AI” và người “dùng được AI”.</p>
          <ol className="guide-steps">
            {LESSON_STEPS.map(s => <li key={s.title}><strong>{s.title}</strong><span>{s.text}</span></li>)}
          </ol>
        </section>

        <section className="guide-sec" id="chuan-bi" aria-labelledby="cb-h">
          <h2 id="cb-h">Chuẩn bị trước khi học</h2>
          <div className="guide-grid">
            {PREP.map(p => (
              <div key={p.title} className="guide-card">
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                {p.links && <p className="guide-links">{p.links.map(l => <a key={l.url} href={l.url} target="_blank" rel="noopener">{l.title}</a>)}</p>}
              </div>
            ))}
          </div>
        </section>

        <section className="guide-sec" id="du-an" aria-labelledby="da-h">
          <h2 id="da-h">Dự án thực hành sau mỗi chương</h2>
          <p className="lead">Mỗi chương kết thúc bằng một việc bạn tự làm. Đừng bỏ qua: học xong mà chưa làm dự án thì kiến thức sẽ rơi rụng rất nhanh.</p>
          <div className="projects">
            {C.map(t => {
              const p = PROJECTS[t.id];
              const done = progress.count(t.lessons.map(l => l.id));
              return (
                <article key={t.id} id={`du-an-${t.id}`} className="project" style={{ '--c': t.color }}>
                  <div className="project-k">Sau chương {t.no}: {t.title}</div>
                  <h3>{p.title}</h3>
                  <p>{p.task}</p>
                  <p className="project-done-h">Hoàn thành khi:</p>
                  <ul>{p.done.map(d => <li key={d}><ICheck /><span>{d}</span></li>)}</ul>
                  <div className="project-foot">
                    <span>{done}/{t.lessons.length} bài của chương đã học</span>
                    <Link to={lessonUrl((t.lessons.find(l => !progress.isDone(l.id)) || t.lessons[0]).id)}>{done === t.lessons.length ? 'Ôn lại chương' : done ? 'Học tiếp chương' : 'Bắt đầu chương'}</Link>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <SkillsSection />

        <section className="guide-sec" id="meo" aria-labelledby="meo-h">
          <h2 id="meo-h">Mẹo học hiệu quả</h2>
          <div className="guide-grid">
            {TIPS.map(p => <div key={p.title} className="guide-card"><h3>{p.title}</h3><p>{p.text}</p></div>)}
          </div>
        </section>

        <section className="guide-sec" id="sau-khoa-hoc" aria-labelledby="skh-h">
          <h2 id="skh-h">Sau khóa học</h2>
          <div className="guide-grid">
            {AFTER.map(p => <div key={p.title} className="guide-card"><h3>{p.title}</h3><p>{p.text}</p></div>)}
          </div>
          <div className="guide-cta">
            <p>{started ? 'Tiếp tục hành trình của bạn.' : 'Sẵn sàng rồi? Bài đầu tiên chỉ mất khoảng 12 phút.'}</p>
            <Link className="btn btn-brand" to={lessonUrl((progress.next() || { id: 't1-b1' }).id)}>{started ? 'Học tiếp' : 'Bắt đầu bài 1.1'}</Link>
            <Link className="btn btn-ghost" to="/#noi-dung"><IPlay />Xem nội dung khóa học</Link>
          </div>
        </section>
      </div>
    </main>
  );
}
