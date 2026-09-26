// Bản đồ lộ trình dạng tàu điện: mỗi chương là một tuyến chạy zig-zag, mỗi bài là một ga.
// Màn hình hẹp dùng danh sách dọc thay cho SVG.
import { Link } from 'react-router-dom';
import { C, flat, lessonUrl } from '../lib/course.js';
import { progress, useStore } from '../lib/store.js';

function wrapLabel(text, max) {
  const lines = [''];
  text.split(' ').forEach(w => {
    const cur = lines[lines.length - 1];
    if ((cur + ' ' + w).trim().length > max && cur) lines.push(w);
    else lines[lines.length - 1] = (cur + ' ' + w).trim();
  });
  return lines.slice(0, 3);
}

const W = 1120, rowH = 138, top = 70, padX = 150, edge = 56, R = 46;

export default function MetroMap() {
  useStore();
  const done = progress.all();
  const nxt = progress.next();
  const H = top + rowH * (C.length - 1) + 110;
  const lastY = top + rowH * (C.length - 1);
  const lastLtr = (C.length - 1) % 2 === 0;
  const termX = lastLtr ? W - padX + 70 : padX - 70;

  const rows = C.map((t, r) => {
    const y = top + r * rowH;
    const ltr = r % 2 === 0;
    const n = t.lessons.length;
    const xs = t.lessons.map((_, i) => padX + (n === 1 ? 0 : (W - 2 * padX) * i / (n - 1)));
    if (!ltr) xs.reverse();

    const startX = ltr ? edge + 40 : W - edge - 40;
    const endX = ltr ? W - edge : edge;
    let d;
    if (r < C.length - 1) {
      const sweep = ltr ? 1 : 0;
      d = `M ${r === 0 ? startX : (ltr ? edge + R : W - edge - R)} ${y} H ${ltr ? endX - R : endX + R}`
        + ` A ${R} ${R} 0 0 ${sweep} ${endX} ${y + R} V ${y + rowH - R}`
        + ` A ${R} ${R} 0 0 ${sweep} ${ltr ? endX - R : endX + R} ${y + rowH}`;
    } else {
      d = `M ${ltr ? edge + R : W - edge - R} ${y} H ${termX}`;
    }

    const tagText = `Chương ${t.no}: ${t.name}`;
    const tw = tagText.length * 7.2 + 22;
    const tx = ltr ? (r === 0 ? startX - 4 : edge + R + 4) : (W - edge - R - 4 - tw);
    const ordered = ltr ? t.lessons : [...t.lessons].reverse();

    return { t, y, d, tagText, tw, tx, ordered, xs };
  });

  return (
    <>
      <svg className="metro" viewBox={`0 0 ${W} ${H}`} role="img" aria-labelledby="metro-title">
        <title id="metro-title">Bản đồ lộ trình học: {C.length} chương, {flat.length} bài</title>
        {rows.map(({ t, d }) => <path key={t.id} className="track" d={d} stroke={t.color} />)}
        <g className="terminus" aria-hidden="true">
          <circle className="hub" cx={edge + 40} cy={top} r="14" />
          <circle className="hub" cx={termX} cy={lastY} r="16" />
          <circle cx={termX} cy={lastY} r="6" fill="var(--ink)" />
          <text x={termX} y={lastY - 28} textAnchor="middle">Chứng nhận</text>
        </g>
        {rows.map(({ t, y, tagText, tw, tx }) => (
          <g key={t.id} className="line-tag">
            <rect x={tx} y={y - 40} width={tw} height="22" fill={t.color} />
            <text x={tx + 11} y={y - 25}>{tagText}</text>
          </g>
        ))}
        {rows.map(({ t, y, ordered, xs }) => ordered.map((l, i) => {
          const x = xs[i];
          const num = t.lessons.indexOf(l) + 1;
          const isDone = !!done[l.id];
          const label = `Bài ${t.no}.${num}: ${l.title}`;
          return (
            <g key={l.id} className={`st${isDone ? ' done' : ''}`} style={{ color: t.color }}>
              <Link to={lessonUrl(l.id)} aria-label={label + (isDone ? ' (đã học)' : '')}>
                <title>{label}</title>
                <circle className="ring-st" cx={x} cy={y} r="11" stroke={t.color} />
                {isDone && <circle className="dot" cx={x} cy={y} r="5" />}
                <text textAnchor="middle" y={y + 32}>
                  {wrapLabel(l.title, 19).map((ln, k) => <tspan key={k} x={x} dy={k ? 15 : 0}>{ln}</tspan>)}
                </text>
              </Link>
              {nxt && nxt.id === l.id && <circle className="here" cx={x} cy={y} r="19" aria-hidden="true" />}
            </g>
          );
        }))}
      </svg>

      <ol className="metro-list" aria-label="Danh sách bài học theo chương">
        {C.map(t => (
          <li key={t.id} className="ml-line" style={{ '--c': t.color }}>
            <span className="ml-tag">Chương {t.no}: {t.name}</span>
            {t.lessons.map(l => (
              <Link key={l.id} to={lessonUrl(l.id)} className={[done[l.id] && 'done', nxt && nxt.id === l.id && 'here'].filter(Boolean).join(' ')}>{l.title}</Link>
            ))}
          </li>
        ))}
      </ol>
    </>
  );
}
