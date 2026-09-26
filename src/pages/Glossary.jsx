import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import GLOSSARY from '../data/glossary.js';
import { C } from '../lib/course.js';

// Bỏ dấu để gõ "hoc may" vẫn tìm ra "Học máy"
const norm = s => s.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D').toLowerCase();

export default function Glossary() {
  const [q, setQ] = useState('');
  const [track, setTrack] = useState(0);
  useEffect(() => { document.title = 'Từ điển thuật ngữ AI | Tuyến AI'; }, []);

  const items = useMemo(() => {
    const term = norm(q.trim());
    return GLOSSARY
      .filter(g => !track || g.t === track)
      .filter(g => !term || norm(`${g.vi} ${g.en} ${g.d}`).includes(term))
      .sort((a, b) => a.vi.localeCompare(b.vi, 'vi'));
  }, [q, track]);

  return (
    <main id="main">
      <header className="band page-head"><div className="wrap">
        <h1>Từ điển thuật ngữ</h1>
        <p>Gặp một từ lạ trong bài học? Tra ở đây. Mỗi thuật ngữ ghi kèm chương nơi nó được giải thích kỹ.</p>
      </div></header>
      <div className="wrap">
        <div className="gl-tools">
          <label className="visually-hidden" htmlFor="gl-q">Tìm thuật ngữ</label>
          <input className="gl-search" id="gl-q" type="search" value={q} onChange={e => setQ(e.target.value)} autoComplete="off"
            placeholder="Tìm theo tiếng Việt hoặc tiếng Anh, ví dụ: token, overfitting" />
          <div className="gl-filters" role="group" aria-label="Lọc theo chương">
            <button className="chip" type="button" aria-pressed={track === 0} onClick={() => setTrack(0)}>Tất cả</button>
            {C.map(t => (
              <button key={t.id} className="chip" type="button" aria-pressed={track === t.no} style={{ '--c': t.color }} onClick={() => setTrack(t.no)}>
                <i aria-hidden="true" />{t.name}
              </button>
            ))}
          </div>
        </div>
        <p className="visually-hidden" aria-live="polite">{items.length} thuật ngữ</p>
        {items.length ? (
          <dl className="gl-list">
            {items.map(g => {
              const t = C[g.t - 1];
              return (
                <div className="gl-item" key={g.vi} style={{ '--c': t.color }}>
                  <dt>{g.vi}{g.en !== g.vi && <span className="en">{g.en}</span>}<Link className="tag" to={`/#${t.id}`}>Chương {t.no}</Link></dt>
                  <dd>{g.d}</dd>
                </div>
              );
            })}
          </dl>
        ) : <p className="gl-empty">Không có thuật ngữ nào khớp với “{q}”. Thử từ khoá ngắn hơn hoặc bỏ bộ lọc chương.</p>}
      </div>
    </main>
  );
}
