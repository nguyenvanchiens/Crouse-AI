// Ngữ cảnh giao diện dùng chung: thông báo nhanh (toast) và hộp thoại ghi danh
import { createContext, useCallback, useContext, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { C, flat, lessonUrl } from './course.js';
import { learner, progress } from './store.js';
import { Cover } from '../components/Visuals.jsx';
import { IClose } from '../components/Icons.jsx';

const UICtx = createContext(null);
export const useUI = () => useContext(UICtx);

export function UIProvider({ children }) {
  const [msg, setMsg] = useState('');
  const [show, setShow] = useState(false);
  const timer = useRef();
  const dialog = useRef(null);
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const toast = useCallback(text => {
    setMsg(text);
    setShow(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setShow(false), 2400);
  }, []);

  const goNext = useCallback(() => {
    const nxt = progress.next();
    navigate(nxt ? lessonUrl(nxt.id) : '/hoc-cua-toi');
  }, [navigate]);

  // Chưa ghi danh: mở hộp thoại hỏi tên. Đã ghi danh: vào thẳng bài chưa học.
  const enroll = useCallback(() => {
    if (learner.isEnrolled()) { goNext(); return; }
    setName('');
    if (dialog.current && dialog.current.showModal) dialog.current.showModal();
    else { learner.enroll(''); navigate(lessonUrl(flat[0].id)); }
  }, [goNext, navigate]);

  function submit(e) {
    e.preventDefault();
    learner.enroll(name);
    dialog.current.close();
    goNext();
  }

  return (
    <UICtx.Provider value={{ toast, enroll }}>
      {children}
      <div className={`toast${show ? ' show' : ''}`} role="status" aria-live="polite">{msg}</div>
      <dialog className="modal" ref={dialog} aria-labelledby="enroll-title">
        <form className="modal-card" onSubmit={submit}>
          <button className="icon-btn modal-close" type="button" aria-label="Đóng" onClick={() => dialog.current.close()}><IClose /></button>
          <div className="modal-cover"><Cover track={C[0]} label="Bắt đầu hành trình" active={0} /></div>
          <h2 id="enroll-title">Ghi danh khóa học</h2>
          <p>Khóa học miễn phí, không cần tài khoản. Tên của bạn chỉ dùng để in lên chứng nhận hoàn thành và được lưu trên trình duyệt này.</p>
          <label htmlFor="enroll-name">Tên hiển thị trên chứng nhận</label>
          <input id="enroll-name" value={name} onChange={e => setName(e.target.value)} autoComplete="name" placeholder="Ví dụ: Nguyễn Minh Anh" maxLength={60} />
          <div className="modal-actions"><button className="btn btn-brand" type="submit">Ghi danh và vào học</button></div>
        </form>
      </dialog>
    </UICtx.Provider>
  );
}
