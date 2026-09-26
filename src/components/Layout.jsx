import { Link, NavLink, Outlet } from 'react-router-dom';
import { C, lessonUrl } from '../lib/course.js';
import { progress, learner, theme, useStore } from '../lib/store.js';
import { useUI } from '../lib/ui.jsx';
import { BrandMark, Ring } from './Visuals.jsx';
import { IMoon, ISun } from './Icons.jsx';

export function ThemeToggle({ className = '' }) {
  useStore();
  return (
    <button className={`icon-btn theme-toggle ${className}`} type="button" aria-label="Đổi giao diện sáng/tối" onClick={() => theme.toggle()}>
      <IMoon /><ISun />
    </button>
  );
}

export function Header() {
  useStore();
  const { enroll } = useUI();
  const total = progress.total();
  const pct = progress.pct();
  const nxt = progress.next();
  const navCls = ({ isActive }) => (isActive ? 'active' : undefined);

  let cta;
  if (!nxt) cta = <Link className="btn btn-brand btn-sm header-cta" to="/chung-nhan">Xem chứng nhận</Link>;
  else if (total || learner.isEnrolled()) cta = <Link className="btn btn-brand btn-sm header-cta" to={lessonUrl(nxt.id)}>Tiếp tục học</Link>;
  else cta = <button className="btn btn-brand btn-sm header-cta" type="button" onClick={enroll}>Ghi danh miễn phí</button>;

  return (
    <>
      <a className="skip-link" href="#main">Bỏ qua, tới nội dung chính</a>
      <header className="site-header">
        <div className="wrap">
          <Link className="brand" to="/" aria-label="Tuyến AI, trang chủ"><BrandMark /><span>Tuyến AI</span></Link>
          <nav className="nav" aria-label="Điều hướng chính">
            <NavLink to="/" end className={navCls}>Khóa học</NavLink>
            <NavLink to="/hoc-cua-toi" className={navCls}>Học của tôi</NavLink>
            <NavLink to="/thuat-ngu" className={navCls}>Thuật ngữ</NavLink>
          </nav>
          <div className="header-tools">
            {total > 0 && (
              <Link className="header-progress" to="/hoc-cua-toi" title="Tiến độ khóa học"><Ring pct={pct} size={34} /><span>{pct}%</span></Link>
            )}
            <ThemeToggle />
            {cta}
          </div>
        </div>
      </header>
    </>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div>
          <Link className="brand" to="/"><BrandMark /><span>Tuyến AI</span></Link>
          <p style={{ marginTop: 12, maxWidth: '26rem' }}>Khóa học AI miễn phí bằng tiếng Việt, đi từ con số 0 đến tự xây ứng dụng AI. Nội dung cập nhật tháng 9/2026.</p>
          <div className="footer-lines" aria-hidden="true">{C.map(t => <i key={t.id} style={{ background: t.color }} />)}</div>
        </div>
        <div>
          <h3>Chương trình</h3>
          <ul>{C.map(t => <li key={t.id}><Link to={`/#${t.id}`}>Chương {t.no}: {t.title}</Link></li>)}</ul>
        </div>
        <div>
          <h3>Học viên</h3>
          <ul>
            <li><Link to="/hoc-cua-toi">Khóa học của tôi</Link></li>
            <li><Link to="/chung-nhan">Chứng nhận hoàn thành</Link></li>
            <li><Link to="/thuat-ngu">Từ điển thuật ngữ</Link></li>
          </ul>
        </div>
        <div>
          <h3>Nguồn tham khảo</h3>
          <ul>
            <li><a href="https://www.elementsofai.com/" target="_blank" rel="noopener">Elements of AI</a></li>
            <li><a href="https://developers.google.com/machine-learning/crash-course" target="_blank" rel="noopener">Google ML Crash Course</a></li>
            <li><a href="https://www.deeplearning.ai/courses/ai-for-everyone/" target="_blank" rel="noopener">AI for Everyone</a></li>
            <li><a href="https://www.3blue1brown.com/topics/neural-networks" target="_blank" rel="noopener">3Blue1Brown</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

// Khung trang thường: header + nội dung + footer
export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
