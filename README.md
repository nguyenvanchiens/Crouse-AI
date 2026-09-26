# Tuyến AI: khóa học AI từ con số 0 đến Pro

Website khóa học AI tiếng Việt, viết bằng React (Vite + React Router). Gồm 5 chương, 27 bài, mỗi bài có video minh hoạ, bài đọc, 3 câu kiểm tra, tài liệu đọc thêm và ghi chú. Nội dung cập nhật tháng 9/2026.

## Chạy

```bash
npm install
npm run dev               # http://localhost:5391
npm run build             # kiểm tra dữ liệu bài học rồi xuất bản tĩnh ra dist/
npm run preview           # xem thử bản build
npm run cf:preview        # chạy thử bằng Cloudflare runtime (có _headers, SPA fallback)
npm run deploy            # build và deploy lên Cloudflare
npm run validate:lessons  # kiểm tra dữ liệu bài học
```

## Deploy lên Cloudflare

Website là trang tĩnh. `npm run build` kiểm tra dữ liệu bài học (lỗi thì dừng, không deploy), sau đó Vite xuất ra `dist/`. File `public/_headers` được copy vào `dist/` để đặt header bảo mật và cache.

### Cách 1: Cloudflare Workers, tự build khi push (khuyến nghị)

1. Vào Cloudflare Dashboard, chọn **Workers & Pages** → **Create** → **Import a repository**, rồi chọn repo này.
2. Điền cấu hình build:
   - Build command: để trống (hoặc `npm run build`, đều được)
   - Deploy command: `npx wrangler deploy`
   - Root directory: để trống

   `wrangler deploy` tự chạy `npm run build` trước khi deploy (khai báo ở trường `build.command` trong `wrangler.jsonc`).
3. Bấm **Deploy**. Từ lần sau, mỗi lần push lên nhánh `main` sẽ tự build và deploy lại.

Cấu hình nằm trong [wrangler.jsonc](wrangler.jsonc): tên Worker là `crouse-ai`, phục vụ file tĩnh từ `dist/`, và `not_found_handling: "single-page-application"` để các đường dẫn như `/bai-hoc/t1-b1` trả về `index.html` khi tải lại trang.

### Cách 2: Cloudflare Pages

Chọn **Workers & Pages** → **Create** → **Pages** → **Connect to Git**, chọn repo, rồi điền:
- Framework preset: `React (Vite)` hoặc `None`
- Build command: `npm run build`
- Build output directory: `dist`

Pages tự trả về `index.html` cho đường dẫn không khớp file khi dự án không có `404.html`, nên React Router vẫn chạy đúng.

### Cách 3: Deploy từ máy

```bash
npx wrangler login   # đăng nhập Cloudflare một lần
npm run deploy
```

### Header bảo mật

[public/_headers](public/_headers) đặt CSP chỉ cho phép: Google Fonts, ảnh thumbnail từ `i.ytimg.com` và video nhúng từ `www.youtube-nocookie.com`. Nếu thêm nguồn ngoài mới (ảnh, script, iframe), nhớ bổ sung vào CSP.

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
