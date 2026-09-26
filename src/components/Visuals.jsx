// Logo, vòng tiến độ và ảnh bìa chương (mô-típ đường ray tàu điện)

export function BrandMark() {
  return (
    <svg className="brand-mark" viewBox="0 0 32 32" aria-hidden="true">
      <circle cx="16" cy="16" r="13" fill="none" stroke="currentColor" strokeWidth="4" />
      <rect x="1" y="13" width="30" height="6" rx="3" fill="var(--line-5)" />
      <circle cx="16" cy="16" r="4.2" fill="var(--bg)" stroke="currentColor" strokeWidth="2.6" />
    </svg>
  );
}

export function Ring({ pct, size = 40, stroke = 4 }) {
  const r = (size - stroke) / 2, c = 2 * Math.PI * r, h = size / 2;
  return (
    <svg className="ring" width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
      <circle cx={h} cy={h} r={r} fill="none" stroke="currentColor" strokeOpacity=".18" strokeWidth={stroke} />
      <circle cx={h} cy={h} r={r} fill="none" stroke="var(--ring, var(--line-5))" strokeWidth={stroke} strokeLinecap="round"
        strokeDasharray={c} strokeDashoffset={c * (1 - pct / 100)} transform={`rotate(-90 ${h} ${h})`} />
    </svg>
  );
}

export function Cover({ track, active = -1, label = '' }) {
  const n = track.lessons.length;
  const pts = Array.from({ length: n }, (_, i) => 40 + i * (240 / Math.max(1, n - 1)));
  const gid = `cv-g${track.no}`;
  return (
    <svg className="cover" viewBox="0 0 320 180" role="img" preserveAspectRatio="xMidYMid slice"
      aria-label={label || `Chương ${track.no}: ${track.title}`}>
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#000" stopOpacity="0" /><stop offset="1" stopColor="#000" stopOpacity=".32" />
        </linearGradient>
      </defs>
      <rect width="320" height="180" fill={track.color} />
      <rect width="320" height="180" fill={`url(#${gid})`} />
      <text x="300" y="150" textAnchor="end" fontFamily="Be Vietnam Pro, sans-serif" fontWeight="800" fontSize="150" fill="#fff" fillOpacity=".14">{track.no}</text>
      <path d="M 0 118 H 320" stroke="#fff" strokeOpacity=".9" strokeWidth="7" />
      {pts.map((x, i) => (
        <circle key={i} cx={x} cy="118" r={i === active ? 10 : 7} fill={i === active ? '#fff' : track.color} stroke="#fff" strokeWidth="4" />
      ))}
      <text x="22" y="44" fontFamily="Be Vietnam Pro, sans-serif" fontWeight="700" fontSize="15" fill="#fff" fillOpacity=".85">Chương {track.no}: {track.name}</text>
      {label && <text x="22" y="72" fontFamily="Be Vietnam Pro, sans-serif" fontWeight="800" fontSize="19" fill="#fff">{label}</text>}
    </svg>
  );
}

// HTML inline đã được biên soạn sẵn trong dữ liệu bài học (strong, em, code, a)
export function Html({ as: Tag = 'span', html, ...rest }) {
  return <Tag {...rest} dangerouslySetInnerHTML={{ __html: html }} />;
}
