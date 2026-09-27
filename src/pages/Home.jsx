import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { C, flat, LESSONS, COURSE_TITLE, lessonUrl, lessonNum, trackMinutes, totalMinutes, totalQuiz, totalVideos, fmtMin, ytThumb, ytEmbed } from '../lib/course.js';
import { progress, learner, useStore } from '../lib/store.js';
import { useUI } from '../lib/ui.jsx';
import { Cover } from '../components/Visuals.jsx';
import MetroMap from '../components/MetroMap.jsx';
import { IAward, ICheck, IChev, IClock, IClose, ICode, IDoc, IGlobe, INote, IPhone, IPlay, IQuiz, IRefresh } from '../components/Icons.jsx';

const LEARN = [
  'Giải thích AI, Machine Learning, Deep Learning và AI tạo sinh bằng lời của mình',
  'Viết prompt có chủ đích cho ChatGPT, Claude, Gemini và tinh chỉnh đến khi đạt kết quả',
  'Nhận ra khi AI “bịa” thông tin và có quy trình kiểm chứng',
  'Dùng AI an toàn: bảo vệ dữ liệu, hiểu bản quyền và các quy định mới',
  'Hiểu máy học từ dữ liệu ra sao và đọc được các chỉ số đánh giá mô hình',
  'Nắm cách mạng nơ-ron, embedding và Transformer hoạt động',
  'Biết mô hình ngôn ngữ lớn và mô hình suy luận được huấn luyện thế nào',
  'Gọi API mô hình AI bằng Python và xử lý lỗi đúng cách',
  'Xây hệ thống hỏi đáp trên tài liệu riêng bằng RAG',
  'Tạo AI Agent biết dùng công cụ và hoàn thành dự án cuối khóa'
];

const SOURCES = [
  { logo: 'EA', color: 'var(--line-1)', title: 'Elements of AI', by: 'Đại học Helsinki và MinnaLearn', url: 'https://www.elementsofai.com/', text: 'Khóa nhập môn AI cho người không chuyên với hơn 2 triệu học viên. Nền tảng cho chương 1 và 3.' },
  { logo: 'G', color: 'var(--line-2)', title: 'Machine Learning Crash Course', by: 'Google for Developers', url: 'https://developers.google.com/machine-learning/crash-course', text: 'Từ hồi quy tuyến tính đến embedding và mô hình ngôn ngữ lớn. Nền tảng cho chương 3 và 4.' },
  { logo: 'DL', color: 'var(--line-4)', title: 'AI for Everyone', by: 'Andrew Ng, DeepLearning.AI', url: 'https://www.deeplearning.ai/courses/ai-for-everyone/', text: 'AI làm được gì và không làm được gì, cách đưa AI vào công việc. Nền tảng cho chương 1 và 2.' },
  { logo: 'API', color: 'var(--line-5)', title: 'Tài liệu chính thức của các nhà phát triển mô hình', by: 'Anthropic, OpenAI, Google', url: 'https://docs.claude.com/', text: 'Hướng dẫn prompt, API, tool use, RAG và agent cập nhật mới nhất. Nền tảng cho chương 2 và 5.' }
];

const FAQ = [
  ['Khóa học có mất phí không?', 'Không. Toàn bộ bài học, video, bài kiểm tra, từ điển thuật ngữ và chứng nhận đều miễn phí, không cần tạo tài khoản.'],
  ['Tôi không giỏi toán, có học được không?', 'Được. Chương 1 và 2 không có công thức nào. Chương 3 và 4 dùng hình ảnh và ví dụ thay cho chứng minh; bạn chỉ cần biết cộng, nhân và đọc đồ thị đơn giản.'],
  ['Video bằng tiếng gì?', 'Phần đọc của mọi bài đều bằng tiếng Việt. Video minh hoạ được chọn từ những kênh giảng dạy tốt nhất, phần lớn bằng tiếng Anh; bạn có thể bật phụ đề tự động tiếng Việt trên YouTube.'],
  ['Tiến độ học được lưu ở đâu?', 'Ngay trên trình duyệt bạn đang dùng. Nếu đổi máy hoặc xoá dữ liệu trình duyệt, tiến độ sẽ bắt đầu lại, nhưng mọi bài học vẫn mở cho bạn.'],
  ['Chứng nhận hoàn thành nhận thế nào?', 'Đánh dấu hoàn thành cả 27 bài, trang “Học của tôi” sẽ mở khoá chứng nhận có tên bạn. Bạn có thể in hoặc lưu thành PDF.']
];

function Curriculum() {
  const { hash } = useLocation();
  const [open, setOpen] = useState(() => new Set([C[0].id]));
  const toggle = id => setOpen(s => { const n = new Set(s); n.has(id) ? n.delete(id) : n.add(id); return n; });
  const allOpen = open.size === C.length;

  // Liên kết tới /#t3 sẽ mở sẵn chương 3
  useEffect(() => {
    const id = hash.slice(1);
    if (C.some(t => t.id === id)) setOpen(s => new Set(s).add(id));
  }, [hash]);

  return (
    <section className="l-section" id="noi-dung" aria-labelledby="cur-h" style={{ scrollMarginTop: 84 }}>
      <h2 id="cur-h">Nội dung khóa học</h2>
      <div className="cur-head">
        <span>{C.length} chương, {flat.length} bài, {totalVideos} video, {totalQuiz} câu hỏi, tổng {fmtMin(totalMinutes())}</span>
        <button className="link-btn" type="button" style={{ color: 'var(--brand)', fontWeight: 700, textDecoration: 'none' }}
          onClick={() => setOpen(allOpen ? new Set() : new Set(C.map(t => t.id)))}>
          {allOpen ? 'Thu gọn tất cả' : 'Mở rộng tất cả'}
        </button>
      </div>
      <div className="accordion">
        {C.map((t, ti) => {
          const isOpen = open.has(t.id);
          return (
            <section key={t.id} className="acc-sec" id={t.id} data-open={isOpen} style={{ '--c': t.color }}>
              <h3 style={{ margin: 0 }}>
                <button className="acc-btn" type="button" aria-expanded={isOpen} aria-controls={`${t.id}-p`} onClick={() => toggle(t.id)}>
                  <IChev className="chev" />
                  <span className="acc-title"><i aria-hidden="true" />Chương {t.no}: {t.title}</span>
                  <span className="acc-meta">{progress.count(t.lessons.map(l => l.id))}/{t.lessons.length} bài, {fmtMin(trackMinutes(t))}</span>
                </button>
              </h3>
              <div className="acc-panel" id={`${t.id}-p`}>
                <p className="acc-desc">{t.desc}</p>
                <ul className="acc-list">
                  {t.lessons.map((l, i) => {
                    const d = LESSONS[l.id];
                    const done = progress.isDone(l.id);
                    const Ic = done ? ICheck : d && d.video ? IPlay : IDoc;
                    return (
                      <li key={l.id} className={done ? 'done' : undefined}>
                        <Link to={lessonUrl(l.id)}>
                          <Ic className="st-ic" />
                          <span className="l-title">{t.no}.{i + 1} {l.title}</span>
                          {ti === 0 && i < 2 ? <span className="prev-tag">Xem trước</span> : <span />}
                          <span className="l-dur">{d ? `${d.duration} phút` : ''}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
}

function VideoModal({ video, dialogRef }) {
  const [playing, setPlaying] = useState(false);
  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    const onClose = () => setPlaying(false);
    const onOpen = () => setPlaying(true);
    d.addEventListener('close', onClose);
    d.addEventListener('open-video', onOpen);
    return () => { d.removeEventListener('close', onClose); d.removeEventListener('open-video', onOpen); };
  }, [dialogRef]);
  if (!video) return null;
  return (
    <dialog className="modal video-modal" ref={dialogRef} aria-labelledby="vm-title" onClick={e => { if (e.target === e.currentTarget) e.currentTarget.close(); }}>
      <div className="modal-card">
        <div className="vm-head">
          <strong id="vm-title">Xem trước: {video.title} ({video.channel})</strong>
          <button className="icon-btn" type="button" aria-label="Đóng video" onClick={() => dialogRef.current.close()}><IClose /></button>
        </div>
        <div className="video-frame">
          {playing && <iframe src={ytEmbed(video.id)} title={video.title} allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen />}
        </div>
      </div>
    </dialog>
  );
}

export default function Home() {
  useStore();
  const { enroll } = useUI();
  const hero = useRef(null);
  const card = useRef(null);
  const vmRef = useRef(null);
  const [descOpen, setDescOpen] = useState(false);

  useEffect(() => { document.title = `${COURSE_TITLE} | Tuyến AI`; }, []);

  // Thẻ ghi danh nổi lên ngang tiêu đề trên màn hình rộng
  useLayoutEffect(() => {
    const place = () => {
      if (!hero.current || !card.current) return;
      card.current.style.marginTop = innerWidth > 1020 ? -(hero.current.offsetHeight - 36) + 'px' : '';
    };
    place();
    addEventListener('resize', place);
    document.fonts && document.fonts.ready.then(place);
    return () => removeEventListener('resize', place);
  }, []);

  const introLesson = flat.find(l => LESSONS[l.id] && LESSONS[l.id].video);
  const introVideo = introLesson ? LESSONS[introLesson.id].video : null;
  const openPreview = () => {
    if (!vmRef.current) return;
    vmRef.current.showModal();
    vmRef.current.dispatchEvent(new Event('open-video'));
  };

  const total = progress.total();
  const started = total > 0 || learner.isEnrolled();
  const next = progress.next();
  const nxt = progress.next();
  const ctaText = !started ? 'Ghi danh miễn phí' : next ? `Tiếp tục: bài ${lessonNum(next)}` : 'Xem chứng nhận';
  const ctaProps = !started ? { onClick: enroll, type: 'button' } : null;
  const ctaTo = next ? lessonUrl(next.id) : '/chung-nhan';

  const Cta = ({ className }) => ctaProps
    ? <button className={className} {...ctaProps}>{ctaText}</button>
    : <Link className={className} to={ctaTo}>{ctaText}</Link>;

  return (
    <main id="main">
      <section className="band landing-hero" ref={hero}>
        <div className="wrap">
          <div className="hero-main">
            <nav className="crumbs" aria-label="Danh mục">
              <span>Công nghệ</span><span aria-hidden="true">›</span><span>Trí tuệ nhân tạo</span><span aria-hidden="true">›</span><span>Người mới bắt đầu</span>
            </nav>
            <h1>AI từ con số 0 đến Pro: hiểu, dùng thành thạo và tự xây ứng dụng AI</h1>
            <p className="sub">Khóa học tiếng Việt đi từ câu hỏi “AI là gì” đến viết code RAG và AI Agent. Không cần biết lập trình hay toán cao cấp để bắt đầu.</p>
            <div className="hero-badges">
              <span className="tag">Miễn phí</span>
              <span><IClock />{fmtMin(totalMinutes())} nội dung</span>
              <span><IGlobe />Tiếng Việt</span>
              <span><IRefresh />Cập nhật 09/2026</span>
              <span>Cấp độ: Người mới đến Nâng cao</span>
            </div>
            <p className="hero-by">Biên soạn từ <a href="#nguon">Elements of AI, Google ML Crash Course, DeepLearning.AI</a> và tài liệu chính thức của các phòng lab AI.</p>
            <div className="hero-mobile-cta">
              <Cta className="btn btn-brand btn-lg" />
              {introVideo && <button className="btn btn-light btn-lg" type="button" onClick={openPreview}>Xem giới thiệu</button>}
            </div>
          </div>
        </div>
      </section>

      <div className="wrap landing-grid">
        <div className="landing-main">
          <section className="learn-box" aria-labelledby="learn-h">
            <h2 id="learn-h">Bạn sẽ học được gì</h2>
            <ul className="learn-list">{LEARN.map(t => <li key={t}><ICheck /><span>{t}</span></li>)}</ul>
          </section>

          <section className="l-section" aria-labelledby="ch-h">
            <h2 id="ch-h">Chương trình gồm 5 chương</h2>
            <p className="lead">Mỗi chương là một khóa nhỏ hoàn chỉnh. Học theo thứ tự nếu bạn mới bắt đầu, hoặc vào thẳng chương bạn cần. Chưa biết nên học đến đâu, mỗi tuần bao nhiêu? <Link to="/cach-hoc" style={{ color: 'var(--brand)', fontWeight: 700 }}>Tạo kế hoạch học của bạn</Link>.</p>
            <div className="chapters">
              {C.map(t => {
                const ids = t.lessons.map(l => l.id);
                const done = progress.count(ids);
                return (
                  <Link key={t.id} className="chapter-card" to={`/#${t.id}`} style={{ '--c': t.color }}>
                    <div className="thumb"><Cover track={t} /></div>
                    <div className="body">
                      <span className="k">Chương {t.no}: {t.name}</span>
                      <h3>{t.title}</h3>
                      <span className="meta">{t.lessons.length} bài, {fmtMin(trackMinutes(t))}</span>
                      {done > 0 && <span className="bar" role="img" aria-label={`Đã học ${done}/${ids.length}`}><i style={{ width: `${done / ids.length * 100}%` }} /></span>}
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>

          <section className="l-section" aria-labelledby="map-h">
            <h2 id="map-h">Bản đồ lộ trình</h2>
            <div className="map-shell">
              <div className="map-head">
                <p className="map-here">
                  {!nxt ? 'Bạn đã đi hết 27 ga. Chúc mừng!'
                    : total ? <>Vòng sáng là ga bạn đang đứng: <Link to={lessonUrl(nxt.id)}>bài {lessonNum(nxt)} {nxt.title}</Link></>
                      : 'Mỗi ga là một bài học. Bấm vào ga bất kỳ để xem bài.'}
                </p>
                <ul className="map-legend">{C.map(t => <li key={t.id}><i style={{ background: t.color }} />{t.name}</li>)}</ul>
              </div>
              <MetroMap />
            </div>
          </section>

          <Curriculum />

          <section className="l-section" aria-labelledby="req-h">
            <h2 id="req-h">Yêu cầu</h2>
            <ul className="plain-list">
              <li>Không cần kiến thức trước về AI hay lập trình cho chương 1 đến 4.</li>
              <li>Một máy tính hoặc điện thoại có trình duyệt. Tài khoản miễn phí của ChatGPT, Claude hoặc Gemini để thực hành chương 2.</li>
              <li>Chương 5 cần Python cơ bản: biến, hàm, vòng lặp, cài thư viện. Bài 5.1 ôn lại những gì bạn cần.</li>
            </ul>
          </section>

          <section className={`l-section desc${descOpen ? ' open' : ''}`} aria-labelledby="desc-h">
            <h2 id="desc-h">Mô tả</h2>
            <div className="more">
              <p>AI đang thay đổi cách chúng ta làm việc, học tập và kinh doanh. Nhưng phần lớn tài liệu tốt nhất lại bằng tiếng Anh, rời rạc, hoặc nhảy thẳng vào công thức. Khóa học này gom chúng lại thành một lộ trình tiếng Việt, đi từng bước, có ví dụ gần gũi.</p>
              <p><strong>Chương 1 và 2</strong> dành cho tất cả mọi người: bạn hiểu AI thực sự là gì, vì sao nó bùng nổ, và dùng các trợ lý AI như ChatGPT, Claude, Gemini một cách có chủ đích. Bạn học cách viết prompt, cách phát hiện khi AI “bịa”, và cách bảo vệ dữ liệu của mình.</p>
              <p><strong>Chương 3 và 4</strong> mở nắp chiếc máy. Bạn thấy máy học từ dữ liệu ra sao, vì sao mô hình có thể sai, mạng nơ-ron và Transformer hoạt động thế nào, và các mô hình ngôn ngữ lớn được huấn luyện qua những giai đoạn nào. Toán chỉ ở mức cấp 2, luôn đi kèm hình ảnh.</p>
              <p><strong>Chương 5</strong> là phần thực hành cho người muốn làm sản phẩm: gọi API mô hình AI bằng Python, xây hệ thống hỏi đáp trên tài liệu riêng (RAG), tạo agent biết dùng công cụ, đánh giá chất lượng và kiểm soát chi phí. Khóa học kết thúc bằng một dự án cuối khóa bạn tự làm.</p>
              <p>Mỗi bài có video minh hoạ được chọn lọc từ những kênh giảng dạy tốt nhất thế giới, phần đọc bằng tiếng Việt, 3 câu hỏi kiểm tra có giải thích, tài liệu đọc thêm đã được kiểm tra, và chỗ ghi chú riêng. Hoàn thành cả 27 bài, bạn nhận chứng nhận có tên mình.</p>
            </div>
            <button className="toggle" type="button" aria-expanded={descOpen} onClick={() => setDescOpen(o => !o)}>{descOpen ? 'Thu gọn' : 'Xem thêm'}</button>
          </section>

          <section className="l-section" aria-labelledby="who-h">
            <h2 id="who-h">Khóa học này dành cho ai</h2>
            <ul className="plain-list">
              <li>Người đi làm muốn dùng AI hiệu quả và an toàn trong công việc hằng ngày.</li>
              <li>Sinh viên, học sinh muốn hiểu nền tảng AI trước khi học chuyên sâu.</li>
              <li>Quản lý, chủ doanh nghiệp cần hiểu AI làm được gì và không làm được gì để ra quyết định.</li>
              <li>Lập trình viên muốn chuyển sang xây dựng sản phẩm AI.</li>
            </ul>
          </section>

          <section className="l-section" id="nguon" aria-labelledby="src-h">
            <h2 id="src-h">Nguồn biên soạn</h2>
            <div className="sources">
              {SOURCES.map(s => (
                <a key={s.title} className="source" href={s.url} target="_blank" rel="noopener">
                  <span className="logo" style={{ background: s.color }}>{s.logo}</span>
                  <span><h3>{s.title}</h3><div className="by">{s.by}</div><p>{s.text}</p></span>
                </a>
              ))}
            </div>
          </section>

          <section className="l-section" aria-labelledby="faq-h">
            <h2 id="faq-h">Câu hỏi thường gặp</h2>
            <div className="faq">{FAQ.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div>
          </section>
        </div>

        <aside className="enroll-card" aria-label="Ghi danh" ref={card}>
          <button className="preview" type="button" aria-label="Xem video giới thiệu" onClick={openPreview}>
            {introVideo ? <img src={ytThumb(introVideo.id)} alt="" loading="lazy" /> : <Cover track={C[0]} label="Xem trước khóa học" active={0} />}
            <span className="play"><IPlay /></span>
            <span className="cap">Xem trước khóa học</span>
          </button>
          <div className="enroll-body">
            <div className="price"><strong>Miễn phí</strong><span>trọn đời, không quảng cáo</span></div>
            {started && (
              <div className="enroll-progress">
                <div className="row">Tiến độ của bạn <span>{total}/{flat.length} bài</span></div>
                <div className="bar"><i style={{ width: `${progress.pct()}%` }} /></div>
              </div>
            )}
            <Cta className="btn btn-brand btn-lg btn-block" />
            <a className="btn btn-ghost btn-block" href="#noi-dung">Xem nội dung khóa học</a>
            <div className="includes">
              <h3>Khóa học bao gồm</h3>
              <ul>
                <li><IPlay /><span>{totalVideos} video minh hoạ chọn lọc</span></li>
                <li><IDoc /><span>{flat.length} bài đọc tiếng Việt</span></li>
                <li><IQuiz /><span>{totalQuiz} câu hỏi kiểm tra có giải thích</span></li>
                <li><ICode /><span>Code Python mẫu và dự án cuối khóa</span></li>
                <li><INote /><span>Ghi chú riêng cho từng bài</span></li>
                <li><IPhone /><span>Học trên điện thoại và máy tính</span></li>
                <li><IAward /><span>Chứng nhận hoàn thành</span></li>
              </ul>
            </div>
          </div>
        </aside>
      </div>

      <VideoModal video={introVideo} dialogRef={vmRef} />
    </main>
  );
}
