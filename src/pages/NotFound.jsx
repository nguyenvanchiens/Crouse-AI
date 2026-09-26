import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  useEffect(() => { document.title = 'Không tìm thấy trang | Tuyến AI'; }, []);
  return (
    <main id="main" className="wrap cert-page">
      <div className="cert-locked">
        <h1>Không tìm thấy trang này</h1>
        <p>Đường dẫn có thể đã bị gõ sai hoặc bài học đã được đổi tên. Hãy chọn bài trong nội dung khóa học.</p>
        <Link className="btn btn-brand" to="/#noi-dung">Mở nội dung khóa học</Link>
      </div>
    </main>
  );
}
