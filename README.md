# Tuyến AI: khóa học AI từ con số 0 đến Pro

Website khóa học AI tiếng Việt, viết bằng React (Vite + React Router). Gồm 5 chương, 27 bài, mỗi bài có video minh hoạ, bài đọc, 3 câu kiểm tra, tài liệu đọc thêm và ghi chú. Nội dung cập nhật tháng 9/2026.

## Chạy

```bash
npm install
npm run dev               # http://localhost:5391
npm run build             # xuất bản tĩnh ra dist/
npm run preview           # xem thử bản build
npm run validate:lessons  # kiểm tra dữ liệu bài học
```

Khi deploy lên host tĩnh, cấu hình mọi đường dẫn lạ trả về `index.html` (SPA fallback) vì router dùng đường dẫn thật như `/bai-hoc/t1-b1`.

## Cấu trúc

```
src/
  data/
    curriculum.js        5 chương và danh sách bài
    lessons/level-N.js   nội dung từng bài (định dạng: data/SCHEMA.md)
    glossary.js          từ điển thuật ngữ
  lib/
    course.js            dữ liệu gộp và hàm tra cứu
    store.js             tiến độ, người học, ghi chú, theme (localStorage + useStore)
    ui.jsx               toast và hộp thoại ghi danh
  components/            Header/Footer, MetroMap, LessonBlocks, Quiz, Icons, Visuals
  pages/                 Home, Learn, Dashboard, Certificate, Glossary, NotFound
```

## Đường dẫn

| Trang | URL |
| --- | --- |
| Giới thiệu khóa học | `/` |
| Trình học | `/bai-hoc/:id?tab=kiem-tra\|tai-lieu\|ghi-chu` |
| Học của tôi | `/hoc-cua-toi` |
| Chứng nhận | `/chung-nhan` |
| Thuật ngữ | `/thuat-ngu` |

## Thêm hoặc sửa bài học

Sửa file trong `src/data/lessons/`, theo định dạng ở `src/data/SCHEMA.md`, rồi chạy `npm run validate:lessons`. Thêm bài mới thì khai báo id trong `src/data/curriculum.js`.
