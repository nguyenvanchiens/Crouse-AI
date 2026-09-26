# Định dạng nội dung bài học

Mỗi file `src/data/lessons/level-N.js` là một ES module có dạng:

```js
const lessons = {
  't1-b1': {
    duration: 12,                 // phút đọc ước tính (số nguyên)
    summary: 'Một câu mô tả bài học (≤ 160 ký tự).',
    goals: ['Mục tiêu 1', 'Mục tiêu 2', 'Mục tiêu 3'],   // "Sau bài này bạn sẽ..."
    blocks: [ /* xem các loại block bên dưới */ ],
    keyPoints: ['Ý chính 1', 'Ý chính 2', 'Ý chính 3'],
    quiz: [
      { q: 'Câu hỏi?', options: ['A', 'B', 'C', 'D'], answer: 1, explain: 'Vì sao đáp án đúng.' }
    ],
    resources: [ { title: 'Tên tài liệu', url: 'https://...', note: 'Tiếng Anh, miễn phí' } ],
    // Tuỳ chọn: video YouTube minh hoạ cho bài (đã xác minh tồn tại bằng oEmbed)
    video: { id: 'aircAruvnKk', title: 'But what is a neural network?', channel: '3Blue1Brown', lang: 'en', minutes: 18 },
    updated: '2026-09'            // tháng cập nhật nội dung gần nhất
  },
  ...
};

export default lessons;
```

## Các loại block

Trường `text` cho phép HTML inline: `<strong>`, `<em>`, `<code>`, `<a href>`. Không dùng HTML khối.

| type | Trường | Ghi chú |
|---|---|---|
| `h` | `text` | Tiêu đề mục (h2). Mỗi bài 3–5 mục. |
| `p` | `text` | Đoạn văn. |
| `list` | `items: []`, `ordered?: true` | Danh sách. |
| `callout` | `tone: 'tip' \| 'warn' \| 'note'`, `title`, `text` | Hộp nhấn mạnh. tip = mẹo, warn = cảnh báo/lầm tưởng, note = ghi chú mở rộng. |
| `example` | `title`, `text` | Ví dụ đời thường / tình huống cụ thể. |
| `analogy` | `text` | Một phép so sánh dễ hiểu ("Hãy tưởng tượng..."). |
| `code` | `lang`, `code`, `caption?` | Đoạn code. `code` dùng template literal. |
| `table` | `head: []`, `rows: [[]]` | Bảng so sánh. |
| `prompt` | `bad?`, `good`, `why` | So sánh prompt kém / prompt tốt (dùng nhiều ở Tầng 2). |
| `steps` | `items: [{title, text}]` | Quy trình có thứ tự thật sự. |

## Quy tắc viết
- Tiếng Việt tự nhiên, xưng "bạn", câu ngắn, giải thích thuật ngữ tiếng Anh lần đầu xuất hiện: "học máy (machine learning)".
- Mỗi bài: 700–1200 từ nội dung, 3–5 mục `h`, ít nhất 1 `analogy` hoặc `example`, 3 câu quiz (4 lựa chọn), 3–5 keyPoints, 1–3 resources thật (link còn sống, nguồn uy tín: Elements of AI, Google ML Crash Course, DeepLearning.AI, 3Blue1Brown, tài liệu chính thức).
- Chính xác về sự kiện. Không bịa số liệu. Nếu không chắc một con số, diễn đạt định tính.
- `answer` là chỉ số (0-based). Rải vị trí đáp án đúng, đừng luôn là 1.
