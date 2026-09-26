// Cấu trúc khóa học: 5 tuyến (tầng) × các ga (bài học).
// Nội dung chi tiết mỗi bài nằm trong src/data/lessons/level-N.js.
const CURRICULUM = [
  {
    id: 't1',
    no: 1,
    name: 'Nhập môn',
    title: 'Hiểu đúng về AI',
    color: 'var(--line-1)',
    desc: 'AI là gì, đến từ đâu, và khác gì với những bộ phim bạn đã xem. Không cần toán, không cần lập trình.',
    outcome: 'Giải thích được AI, Machine Learning, Deep Learning cho người khác bằng lời của mình.',
    lessons: [
      { id: 't1-b1', title: 'AI là gì và không là gì' },
      { id: 't1-b2', title: 'Lịch sử ngắn của AI: 1950 đến nay' },
      { id: 't1-b3', title: 'AI, Machine Learning và Deep Learning' },
      { id: 't1-b4', title: 'AI hẹp, AI tổng quát và những lầm tưởng' },
      { id: 't1-b5', title: 'AI quanh ta mỗi ngày' }
    ]
  },
  {
    id: 't2',
    no: 2,
    name: 'Sử dụng',
    title: 'Dùng AI thành thạo',
    color: 'var(--line-2)',
    desc: 'Làm việc với ChatGPT, Claude, Gemini như một người dùng chuyên nghiệp: viết prompt tốt, kiểm chứng kết quả, dùng an toàn.',
    outcome: 'Dùng chatbot AI để tăng tốc công việc hằng ngày mà vẫn kiểm soát được chất lượng.',
    lessons: [
      { id: 't2-b1', title: 'Chatbot AI hoạt động ra sao' },
      { id: 't2-b2', title: 'Viết prompt: các nguyên tắc nền tảng' },
      { id: 't2-b3', title: 'Kỹ thuật prompt nâng cao' },
      { id: 't2-b4', title: 'Ảo giác AI và cách kiểm chứng' },
      { id: 't2-b5', title: 'AI cho công việc và học tập' },
      { id: 't2-b6', title: 'Quyền riêng tư, bản quyền và đạo đức' }
    ]
  },
  {
    id: 't3',
    no: 3,
    name: 'Nền tảng',
    title: 'Máy học như thế nào',
    color: 'var(--line-3)',
    desc: 'Mở nắp máy: dữ liệu, mô hình, hàm mất mát, cách máy "học" từ sai số. Chỉ cần toán cấp 2.',
    outcome: 'Hiểu quy trình huấn luyện một mô hình và đọc được các chỉ số đánh giá cơ bản.',
    lessons: [
      { id: 't3-b1', title: 'Dữ liệu: nguyên liệu của AI' },
      { id: 't3-b2', title: 'Ba kiểu học: giám sát, không giám sát, tăng cường' },
      { id: 't3-b3', title: 'Hồi quy tuyến tính và gradient descent' },
      { id: 't3-b4', title: 'Phân loại và đánh giá mô hình' },
      { id: 't3-b5', title: 'Overfitting và khả năng tổng quát hóa' }
    ]
  },
  {
    id: 't4',
    no: 4,
    name: 'Chuyên sâu',
    title: 'Mạng nơ-ron và LLM',
    color: 'var(--line-4)',
    desc: 'Từ một nơ-ron nhân tạo đến Transformer, kiến trúc đứng sau ChatGPT, Claude và Gemini.',
    outcome: 'Giải thích được mô hình ngôn ngữ lớn được xây dựng và huấn luyện ra sao.',
    lessons: [
      { id: 't4-b1', title: 'Nơ-ron nhân tạo và mạng nơ-ron' },
      { id: 't4-b2', title: 'Huấn luyện mạng: lan truyền ngược' },
      { id: 't4-b3', title: 'Embedding: biến chữ thành số' },
      { id: 't4-b4', title: 'Transformer và cơ chế attention' },
      { id: 't4-b5', title: 'LLM được huấn luyện như thế nào' }
    ]
  },
  {
    id: 't5',
    no: 5,
    name: 'Pro',
    title: 'Xây dựng với AI',
    color: 'var(--line-5)',
    desc: 'Viết code gọi mô hình AI, cho AI đọc tài liệu riêng (RAG), xây agent biết dùng công cụ và đưa sản phẩm ra thực tế.',
    outcome: 'Tự xây một ứng dụng AI nhỏ hoàn chỉnh và biết con đường học tiếp.',
    lessons: [
      { id: 't5-b1', title: 'Python và môi trường làm AI' },
      { id: 't5-b2', title: 'Gọi API mô hình AI từ code' },
      { id: 't5-b3', title: 'RAG: cho AI đọc tài liệu của bạn' },
      { id: 't5-b4', title: 'AI Agent và tool use' },
      { id: 't5-b5', title: 'Đánh giá, triển khai và chi phí' },
      { id: 't5-b6', title: 'Dự án cuối khóa và con đường tiếp theo' }
    ]
  }
];

export default CURRICULUM;
