// Hiển thị các block nội dung bài học (định dạng: src/data/SCHEMA.md)
import { useState } from 'react';
import { Html } from './Visuals.jsx';
import { IDoc, IInfo, ITip, IWarn } from './Icons.jsx';

const KW = /^(def|return|import|from|as|for|in|if|elif|else|while|class|with|try|except|finally|raise|lambda|and|or|not|is|None|True|False|print|async|await|yield|pass|break|continue|const|let|var|function|export|new)$/;

// Tô màu cú pháp đơn giản, trả về mảng phần tử React (không dùng innerHTML)
function highlight(code) {
  const re = /("""[\s\S]*?"""|'''[\s\S]*?'''|"(?:\\.|[^"\\\n])*"|'(?:\\.|[^'\\\n])*')|(#[^\n]*|\/\/[^\n]*)|\b(\d+(?:\.\d+)?)\b|\b([A-Za-z_]\w*)(?=\s*\()|\b([A-Za-z_]\w*)\b/g;
  const out = [];
  let last = 0, m, k = 0;
  while ((m = re.exec(code))) {
    if (m.index > last) out.push(code.slice(last, m.index));
    const [tok, str, com, n, fn, word] = m;
    if (str) out.push(<span key={k++} className="tok-s">{tok}</span>);
    else if (com) out.push(<span key={k++} className="tok-c">{tok}</span>);
    else if (n) out.push(<span key={k++} className="tok-n">{tok}</span>);
    else if (fn) out.push(<span key={k++} className={KW.test(fn) ? 'tok-k' : 'tok-f'}>{tok}</span>);
    else if (word && KW.test(word)) out.push(<span key={k++} className="tok-k">{tok}</span>);
    else out.push(tok);
    last = re.lastIndex;
  }
  if (last < code.length) out.push(code.slice(last));
  return out;
}

function CodeBlock({ b }) {
  const [label, setLabel] = useState('Sao chép');
  const code = String(b.code || '').replace(/^\n+|\s+$/g, '');
  async function copy() {
    try { await navigator.clipboard.writeText(code); setLabel('Đã sao chép'); }
    catch { setLabel('Không sao chép được'); }
    setTimeout(() => setLabel('Sao chép'), 1800);
  }
  return (
    <figure style={{ margin: '1.4em 0 0' }}>
      <div className="code-block">
        <div className="code-bar"><span>{b.lang || 'code'}</span><button type="button" onClick={copy}>{label}</button></div>
        <pre><code>{highlight(code)}</code></pre>
      </div>
      {b.caption && <Html as="figcaption" className="code-caption" html={b.caption} />}
    </figure>
  );
}

const TONE = {
  tip: { Icon: ITip, title: 'Mẹo' },
  warn: { Icon: IWarn, title: 'Cẩn thận' },
  note: { Icon: IInfo, title: 'Ghi chú' }
};

function Block({ b, num, hIndex }) {
  switch (b.type) {
    case 'h':
      return <h2 id={`muc-${hIndex}`}><span className="hn" aria-hidden="true">{num}.{hIndex}</span><Html html={b.text} /></h2>;
    case 'p':
      return <Html as="p" html={b.text} />;
    case 'list': {
      const Tag = b.ordered ? 'ol' : 'ul';
      return <Tag>{(b.items || []).map((it, i) => <Html as="li" key={i} html={it} />)}</Tag>;
    }
    case 'callout': {
      const tone = TONE[b.tone] ? b.tone : 'note';
      const { Icon, title } = TONE[tone];
      return <div className={`box callout ${tone}`}><div className="box-title"><Icon />{b.title || title}</div><Html as="div" html={b.text} /></div>;
    }
    case 'example':
      return <div className="box example"><div className="box-title"><IDoc />{b.title || 'Ví dụ'}</div><Html as="div" html={b.text} /></div>;
    case 'analogy':
      return <Html as="div" className="box analogy" html={b.text} />;
    case 'code':
      return <CodeBlock b={b} />;
    case 'table':
      return (
        <div className="table-wrap"><table>
          <thead><tr>{(b.head || []).map((h, i) => <Html as="th" scope="col" key={i} html={h} />)}</tr></thead>
          <tbody>{(b.rows || []).map((r, i) => <tr key={i}>{r.map((c, j) => <Html as="td" key={j} html={c} />)}</tr>)}</tbody>
        </table></div>
      );
    case 'prompt':
      return (
        <div className="prompt-cmp">
          {b.bad && <div className="pc bad"><div className="pc-label">Prompt chưa tốt</div><div className="pc-text">{b.bad}</div></div>}
          <div className="pc good"><div className="pc-label">Prompt tốt hơn</div><div className="pc-text">{b.good}</div></div>
          {b.why && <p className="why"><strong>Vì sao tốt hơn:</strong> <Html html={b.why} /></p>}
        </div>
      );
    case 'steps':
      return <ol className="steps">{(b.items || []).map((s, i) => <li key={i}><Html as="strong" html={s.title} /><Html html={s.text} /></li>)}</ol>;
    default:
      return b.text ? <Html as="p" html={b.text} /> : null;
  }
}

export default function LessonBlocks({ blocks, num }) {
  let h = 0;
  return (
    <div className="prose">
      {blocks.map((b, i) => <Block key={i} b={b} num={num} hIndex={b.type === 'h' ? ++h : h} />)}
    </div>
  );
}
