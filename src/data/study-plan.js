// Nội dung trang "Cách học": mục tiêu, nhịp học, phương pháp, dự án và năng lực cần đạt.

// Mỗi mục tiêu là một tập chương học theo thứ tự. Chương ngoài mục tiêu vẫn mở, chỉ không nằm trong kế hoạch.
export const GOALS = [
  {
    id: 'dung',
    name: 'Dùng AI thành thạo',
    chapters: ['t1', 't2'],
    for: 'Người đi làm, sinh viên, quản lý muốn dùng ChatGPT, Claude, Gemini hiệu quả và an toàn.',
    result: 'Viết prompt có chủ đích, kiểm chứng được kết quả, dùng AI cho công việc mà không lo lộ dữ liệu.',
    needs: 'Không cần kiến thức trước.'
  },
  {
    id: 'hieu',
    name: 'Hiểu AI tận gốc',
    chapters: ['t1', 't2', 't3', 't4'],
    for: 'Người muốn hiểu vì sao AI giỏi việc này mà dở việc kia, chuẩn bị học sâu hoặc làm việc cùng đội AI.',
    result: 'Giải thích được máy học, mạng nơ-ron, Transformer và cách LLM được huấn luyện; đọc được chỉ số đánh giá mô hình.',
    needs: 'Toán cấp 2: cộng, nhân, đọc đồ thị.'
  },
  {
    id: 'xay',
    name: 'Xây sản phẩm AI',
    chapters: ['t1', 't2', 't3', 't4', 't5'],
    for: 'Lập trình viên hoặc người sẵn sàng học Python để tự làm ứng dụng AI.',
    result: 'Tự xây một ứng dụng AI hoàn chỉnh có RAG, agent dùng công cụ, bộ đánh giá và kiểm soát chi phí.',
    needs: 'Python cơ bản trước khi vào chương 5 (xem phần chuẩn bị bên dưới).'
  }
];

export const PACES = [
  { id: 'nhe', name: 'Nhẹ nhàng', perWeek: 3, note: 'Khoảng 20 phút mỗi ngày, học 3 ngày một tuần. Hợp người bận.' },
  { id: 'deu', name: 'Đều đặn', perWeek: 5, note: 'Mỗi ngày làm việc một bài. Nhịp khuyến nghị cho đa số.' },
  { id: 'nhanh', name: 'Tăng tốc', perWeek: 8, note: 'Học mỗi ngày, có hôm 2 bài. Hợp khi bạn đang có thời gian rảnh.' }
];

// Quy trình cho từng bài học: đây là thứ tự thật, nên đánh số
export const LESSON_STEPS = [
  { title: 'Đọc mục tiêu bài', text: 'Đọc 3 mục "Sau bài này, bạn sẽ". Tự hỏi: mình đã biết gì về chủ đề này? Việc này giúp não biết cần chú ý vào đâu.' },
  { title: 'Xem video minh hoạ', text: 'Xem trước để có hình dung tổng thể. Bật phụ đề tiếng Việt nếu cần. Video dài thì xem đoạn đầu, phần còn lại để sau.' },
  { title: 'Đọc bài và thử ngay', text: 'Đọc phần bài học. Gặp prompt mẫu thì mở ChatGPT, Claude hoặc Gemini gõ thử. Gặp code thì chạy trên Google Colab.' },
  { title: 'Làm bài kiểm tra', text: 'Làm 3 câu hỏi ngay sau khi đọc. Sai câu nào thì đọc kỹ giải thích và quay lại đoạn liên quan trong bài.' },
  { title: 'Ghi chú bằng lời của bạn', text: 'Viết 2 đến 3 câu ở tab Ghi chú: điều quan trọng nhất, và một ví dụ của riêng bạn. Không chép lại bài.' },
  { title: 'Áp dụng trong 24 giờ', text: 'Dùng điều vừa học vào một việc thật: một email, một báo cáo, một câu hỏi trong công việc. Đây là bước biến kiến thức thành kỹ năng.' }
];

// Dự án cuối mỗi chương: mốc để biết mình đã "làm được", không chỉ "đã đọc"
export const PROJECTS = {
  t1: {
    title: 'Giải thích AI cho một người không biết gì',
    task: 'Chọn một người thân hoặc đồng nghiệp. Trong 5 phút, giải thích AI, Machine Learning và Deep Learning khác nhau thế nào, kèm 3 ví dụ AI họ dùng hằng ngày mà không biết.',
    done: ['Người nghe nhắc lại được ý chính', 'Bạn nói được AI hiện nay chưa làm được gì', 'Không dùng thuật ngữ nào mà không giải thích']
  },
  t2: {
    title: 'Bộ 10 prompt cho công việc của bạn',
    task: 'Viết 10 prompt cho những việc bạn làm thường xuyên (email, tóm tắt, phân tích, lên kế hoạch...). Mỗi prompt có bối cảnh, vai trò, định dạng đầu ra. Chạy thử, sửa đến khi dùng được ngay.',
    done: ['Ít nhất 3 prompt dùng ví dụ mẫu (few-shot)', 'Có 1 quy trình nhiều bước (chuỗi prompt)', 'Mỗi prompt có ghi chú: kết quả cần kiểm chứng điểm nào', 'Không prompt nào chứa dữ liệu nhạy cảm']
  },
  t3: {
    title: 'Huấn luyện mô hình đầu tiên trên Google Colab',
    task: 'Mở Colab, dùng một bộ dữ liệu nhỏ (giá nhà, điểm thi, hoặc dữ liệu Kaggle). Chia train/test, huấn luyện hồi quy tuyến tính hoặc phân loại bằng scikit-learn, in các chỉ số đánh giá.',
    done: ['Giải thích được từng cột là feature hay label', 'Báo cáo được chỉ số trên tập test, không phải tập train', 'Chỉ ra được một dấu hiệu overfitting hoặc underfitting']
  },
  t4: {
    title: 'Tự tay khám phá embedding và attention',
    task: 'Dùng TensorFlow Embedding Projector hoặc một mô hình embedding miễn phí để tìm các từ gần nghĩa. Vẽ sơ đồ tay (hoặc trên giấy) cách một câu đi qua Transformer: token, embedding, attention, dự đoán token tiếp theo.',
    done: ['Tìm được 1 ví dụ embedding hợp lý và 1 ví dụ kỳ lạ, giải thích vì sao', 'Sơ đồ có đủ 4 bước và bạn thuyết trình được trong 3 phút', 'Kể được 3 giai đoạn huấn luyện một LLM']
  },
  t5: {
    title: 'Dự án cuối khóa: trợ lý hỏi đáp tài liệu',
    task: 'Làm theo bài 5.6: xây trợ lý trả lời câu hỏi từ tài liệu nội quy (hoặc tài liệu của bạn) bằng RAG, có trích dẫn nguồn, có bộ 20 câu hỏi đánh giá, và một công cụ (tool) để agent gọi.',
    done: ['Trả lời đúng ít nhất 16/20 câu trong bộ đánh giá', 'Mỗi câu trả lời kèm nguồn trích dẫn', 'Từ chối trả lời khi tài liệu không có thông tin', 'API key không nằm trong code, có README hướng dẫn chạy']
  }
};

// Danh sách tự đánh giá: "làm chủ AI" nghĩa là làm được những việc này, không chỉ biết tên chúng
export const SKILLS = [
  {
    group: 'Hiểu đúng',
    chapter: 't1',
    items: [
      'Giải thích được AI, Machine Learning, Deep Learning, AI tạo sinh khác nhau thế nào',
      'Nhận ra tin tức phóng đại về AI và nói được vì sao',
      'Kể được AI hiện nay giỏi việc gì và còn yếu ở đâu'
    ]
  },
  {
    group: 'Dùng thành thạo',
    chapter: 't2',
    items: [
      'Viết prompt có bối cảnh, vai trò, định dạng và ví dụ mẫu',
      'Chia một việc lớn thành chuỗi prompt nhỏ',
      'Kiểm chứng câu trả lời của AI trước khi dùng',
      'Biết dữ liệu nào không được đưa vào chatbot',
      'Dùng AI hằng tuần cho ít nhất 3 việc thật trong công việc hoặc học tập'
    ]
  },
  {
    group: 'Hiểu cơ chế',
    chapter: 't3',
    items: [
      'Giải thích quá trình huấn luyện: dữ liệu, mô hình, hàm mất mát, gradient descent',
      'Đọc được accuracy, precision, recall và biết khi nào accuracy đánh lừa',
      'Nhận ra overfitting và biết cách giảm'
    ]
  },
  {
    group: 'Hiểu mô hình ngôn ngữ lớn',
    chapter: 't4',
    items: [
      'Giải thích token, embedding và attention bằng ví dụ',
      'Kể được các giai đoạn huấn luyện LLM: pretraining, fine-tuning, RLHF, mô hình suy luận',
      'Giải thích vì sao LLM có thể ảo giác'
    ]
  },
  {
    group: 'Xây dựng',
    chapter: 't5',
    items: [
      'Gọi API mô hình AI bằng Python, giữ API key an toàn, xử lý lỗi',
      'Xây hệ thống RAG trả lời có trích dẫn nguồn',
      'Viết agent gọi được công cụ và giới hạn quyền của nó',
      'Có bộ đánh giá để đo chất lượng trước và sau mỗi thay đổi',
      'Hoàn thành và chia sẻ dự án cuối khóa'
    ]
  }
];

export const PREP = [
  { title: 'Tài khoản chatbot miễn phí', text: 'Tạo tài khoản ChatGPT, Claude hoặc Gemini trước chương 2. Dùng ít nhất hai cái để so sánh câu trả lời.' },
  { title: 'Tài khoản Google', text: 'Để dùng Google Colab chạy code Python miễn phí trên trình duyệt ở chương 3 đến 5, không cần cài gì.' },
  { title: 'Python cơ bản trước chương 5', text: 'Nếu chưa biết lập trình, dành 1 đến 2 tuần học Python: biến, hàm, vòng lặp, list, dict, cài thư viện. Có thể học song song khi đang ở chương 3 và 4.', links: [
    { title: 'Kaggle Learn: Python', url: 'https://www.kaggle.com/learn/python' },
    { title: 'Python for Everybody', url: 'https://www.py4e.com/' }
  ] },
  { title: 'Một sổ tay học tập', text: 'Tab Ghi chú trong mỗi bài là đủ. Quan trọng là viết bằng lời của bạn và xem lại mỗi cuối tuần.' }
];

export const TIPS = [
  { title: 'Học ít mà đều', text: '20 phút mỗi ngày hiệu quả hơn 3 tiếng một lần mỗi tuần. Chọn một khung giờ cố định, ví dụ ngay sau bữa tối.' },
  { title: 'Ôn lại vào cuối tuần', text: 'Mở trang Học của tôi, đọc lại ghi chú và làm lại quiz các bài sai. Nhắc lại sau vài ngày giúp nhớ lâu hơn nhiều so với đọc lại ngay.' },
  { title: 'Dạy lại cho người khác', text: 'Cách nhanh nhất để biết mình hiểu chưa: giải thích cho một người khác. Chỗ nào bạn ấp úng là chỗ cần học lại.' },
  { title: 'Đừng đợi hiểu 100% mới đi tiếp', text: 'Hiểu khoảng 80% là đủ để sang bài sau. Nhiều khái niệm sẽ rõ hơn khi bạn gặp lại chúng ở chương sau.' },
  { title: 'Dùng AI làm gia sư', text: 'Khi không hiểu, hỏi chatbot: "Giải thích [khái niệm] cho người mới, dùng một ví dụ đời thường, rồi hỏi lại tôi 2 câu để kiểm tra". Đừng nhờ nó làm bài thay bạn.' },
  { title: 'Khi bị kẹt quá 20 phút', text: 'Dừng lại, ghi câu hỏi vào tab Ghi chú, xem lại video, rồi tra Từ điển thuật ngữ. Vẫn kẹt thì đi tiếp và quay lại sau 1 đến 2 ngày.' }
];

export const AFTER = [
  { title: 'Chọn một hướng đi sâu', text: 'Làm sản phẩm: tiếp tục với các khóa ngắn của DeepLearning.AI và tài liệu chính thức của Anthropic, OpenAI, Google. Hiểu mô hình: series Neural Networks: Zero to Hero của Andrej Karpathy.' },
  { title: 'Làm dự án thật thứ hai', text: 'Tự đặt một bài toán ở công việc hoặc cuộc sống của bạn, làm từ đầu đến cuối. Dự án thứ hai là lúc kiến thức thực sự thành của bạn.' },
  { title: 'Theo dõi AI có chọn lọc', text: 'AI thay đổi hằng tháng. Đọc blog chính thức của các phòng lab và thử tính năng mới, thay vì đọc tin giật tít.' },
  { title: 'Chia sẻ những gì đã học', text: 'Viết bài, làm video ngắn hoặc hướng dẫn đồng nghiệp. Đó cũng là portfolio khi bạn xin việc liên quan đến AI.' }
];
