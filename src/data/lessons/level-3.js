const lessons = {
  /* ============================================================
     TẦNG 3 - BÀI 1: DỮ LIỆU
     ============================================================ */
  't3-b1': {
    duration: 16,
    summary: 'Dữ liệu là nguyên liệu của mọi mô hình AI: hiểu feature, label, dữ liệu số và phân loại, one-hot, cách chia train/validation/test.',
    goals: [
      'Phân biệt được đặc trưng (feature) và nhãn (label) trong một bảng dữ liệu',
      'Biết cách biến dữ liệu chữ thành số bằng mã hóa one-hot',
      'Hiểu vì sao phải chia dữ liệu thành tập huấn luyện, kiểm định và kiểm tra',
      'Nhận ra các lỗi dữ liệu phổ biến và nguyên tắc "rác vào, rác ra"'
    ],
    blocks: [
      { type: 'p', text: 'Ở các tầng trước, bạn đã dùng AI như một công cụ. Từ tầng này, chúng ta mở nắp máy để xem bên trong. Và điều đầu tiên bạn thấy không phải là thuật toán phức tạp, mà là <strong>dữ liệu (data)</strong>. Một mô hình học máy (machine learning) chỉ giỏi bằng dữ liệu mà nó được học.' },
      { type: 'analogy', text: 'Hãy tưởng tượng bạn học nấu phở. Công thức (thuật toán) rất quan trọng, nhưng nếu xương hầm bị hỏng, bánh phở bị chua thì đầu bếp giỏi mấy cũng không cứu được nồi phở. Dữ liệu chính là nguyên liệu. Nguyên liệu tốt thì món ăn mới ngon.' },

      { type: 'h', text: 'Feature và label: câu hỏi và đáp án' },
      { type: 'p', text: 'Phần lớn dữ liệu cho học máy có thể hình dung như một bảng tính Excel. Mỗi <strong>dòng</strong> là một <strong>ví dụ (example)</strong>, ví dụ một căn nhà. Mỗi <strong>cột</strong> là một thông tin về ví dụ đó.' },
      { type: 'list', items: [
        '<strong>Đặc trưng (feature)</strong>: những thông tin đầu vào mà mô hình được nhìn thấy, ví dụ diện tích, số phòng ngủ, quận.',
        '<strong>Nhãn (label)</strong>: đáp án mà ta muốn mô hình đoán ra, ví dụ giá bán căn nhà.',
        'Một ví dụ có cả feature và label gọi là <strong>ví dụ có nhãn (labeled example)</strong>. Mô hình học từ những ví dụ này.',
        'Khi dùng thật, mô hình chỉ nhận feature và phải tự đoán label. Việc đoán này gọi là <strong>suy luận (inference)</strong> hoặc dự đoán (prediction).'
      ] },
      { type: 'table', head: ['Diện tích (m²)', 'Số phòng ngủ', 'Quận', 'Giá (tỷ đồng) - LABEL'], rows: [
        ['45', '1', 'Cầu Giấy', '2,4'],
        ['70', '2', 'Hà Đông', '3,1'],
        ['95', '3', 'Đống Đa', '5,8']
      ] },
      { type: 'callout', tone: 'note', title: 'Số liệu minh họa', text: 'Các con số trong bảng trên là <strong>giả định</strong> để minh họa, không phải giá thị trường thật.' },
      { type: 'p', text: 'Ba cột đầu là feature, cột cuối là label. Nhiệm vụ của mô hình: nhìn ba cột đầu, đoán cột cuối.' },

      { type: 'h', text: 'Dữ liệu số và dữ liệu phân loại' },
      { type: 'p', text: 'Máy tính chỉ làm việc với con số. Vì vậy ta cần phân biệt hai kiểu dữ liệu chính:' },
      { type: 'list', items: [
        '<strong>Dữ liệu số (numerical data)</strong>: các giá trị có thể so sánh lớn nhỏ và cộng trừ có nghĩa, như diện tích, tuổi, nhiệt độ.',
        '<strong>Dữ liệu phân loại (categorical data)</strong>: các giá trị thuộc một nhóm cố định, như quận, màu sắc, loại xe. "Cầu Giấy" không lớn hơn hay nhỏ hơn "Hà Đông".'
      ] },
      { type: 'callout', tone: 'warn', title: 'Bẫy thường gặp', text: 'Nếu bạn mã hóa Cầu Giấy = 1, Hà Đông = 2, Đống Đa = 3, mô hình sẽ hiểu nhầm rằng Đống Đa "gấp ba" Cầu Giấy, hoặc Hà Đông nằm "giữa" hai quận kia. Điều đó vô nghĩa. Mã bưu chính hay số điện thoại cũng vậy: trông như số nhưng thực chất là dữ liệu phân loại.' },
      { type: 'p', text: 'Cách giải quyết phổ biến là <strong>mã hóa one-hot (one-hot encoding)</strong>: tạo một cột riêng cho mỗi giá trị, chỉ cột đúng mang số 1, các cột khác mang số 0.' },
      { type: 'table', head: ['Quận', 'là_CầuGiấy', 'là_HàĐông', 'là_ĐốngĐa'], rows: [
        ['Cầu Giấy', '1', '0', '0'],
        ['Hà Đông', '0', '1', '0'],
        ['Đống Đa', '0', '0', '1']
      ] },
      { type: 'p', text: 'Như vậy mỗi quận được biểu diễn công bằng, không quận nào "lớn hơn" quận nào. Với dữ liệu số, người ta thường còn <strong>chuẩn hóa (normalization)</strong>, tức là đưa các cột về cùng thang đo (ví dụ khoảng 0 đến 1), để cột có số lớn như diện tích không lấn át cột có số nhỏ như số phòng.' },

      { type: 'h', text: 'Chia dữ liệu: train, validation, test' },
      { type: 'p', text: 'Làm sao biết mô hình học thật hay chỉ học thuộc lòng? Ta phải kiểm tra nó bằng những ví dụ nó <em>chưa từng thấy</em>. Vì thế dữ liệu thường được chia làm ba phần:' },
      { type: 'steps', items: [
        { title: 'Tập huấn luyện (training set)', text: 'Phần lớn nhất, thường khoảng 70-80%. Mô hình học trực tiếp từ đây.' },
        { title: 'Tập kiểm định (validation set)', text: 'Khoảng 10-15%. Dùng để thử các lựa chọn khác nhau (cấu hình, mô hình) và chọn ra phương án tốt nhất.' },
        { title: 'Tập kiểm tra (test set)', text: 'Khoảng 10-15%, được cất kỹ đến cuối cùng. Chỉ dùng một lần để đo điểm thật của mô hình.' }
      ] },
      { type: 'example', title: 'Giống như ôn thi', text: 'Tập huấn luyện là sách giáo khoa và bài tập về nhà. Tập kiểm định là các đề thi thử bạn làm để biết nên ôn thêm phần nào. Tập kiểm tra là đề thi thật, được niêm phong. Nếu bạn lỡ xem trước đề thi thật, điểm số sẽ không còn phản ánh đúng năng lực nữa.' },
      { type: 'callout', tone: 'tip', title: 'Tỉ lệ chỉ là tham khảo', text: 'Không có tỉ lệ chia bắt buộc. Điều quan trọng là: các ví dụ trong tập test không được lọt vào tập train, và ba tập nên được chọn ngẫu nhiên để giống nhau về đặc điểm.' },

      { type: 'h', text: 'Chất lượng dữ liệu: rác vào, rác ra' },
      { type: 'p', text: 'Trong giới học máy có câu nổi tiếng: <strong>"Garbage in, garbage out"</strong> (rác vào, rác ra). Một thuật toán tốt học từ dữ liệu tồi vẫn cho kết quả tồi. Những lỗi dữ liệu hay gặp:' },
      { type: 'list', items: [
        '<strong>Giá trị thiếu</strong>: ô trống, ví dụ không ghi diện tích.',
        '<strong>Giá trị sai hoặc bất thường</strong>: căn hộ 5 m² giá 50 tỷ do gõ nhầm.',
        '<strong>Nhãn sai</strong>: email bình thường bị gắn nhầm là spam.',
        '<strong>Trùng lặp</strong>: cùng một căn nhà xuất hiện nhiều lần.',
        '<strong>Thiên lệch (bias)</strong>: dữ liệu chỉ lấy từ một nhóm, ví dụ chỉ có nhà ở nội thành, nên mô hình đoán kém với nhà ngoại thành.'
      ] },
      { type: 'callout', tone: 'note', title: 'Sự thật ít người nói', text: 'Trong các dự án thực tế, người làm học máy thường dành phần lớn thời gian cho việc thu thập, làm sạch và hiểu dữ liệu, chứ không phải viết thuật toán.' },
      { type: 'callout', tone: 'warn', title: 'Trùng lặp giữa train và test', text: 'Google ML Crash Course khuyên: hãy xóa những ví dụ trong tập validation hoặc test bị <strong>trùng</strong> với ví dụ trong tập train. Nếu không, mô hình được "thi" lại đúng câu đã học và điểm số sẽ đẹp giả tạo.' },

      { type: 'h', text: 'Góc nhìn hiện đại: dữ liệu tổng hợp' },
      { type: 'p', text: 'Các mô hình ngôn ngữ lớn ngày nay học từ lượng văn bản khổng lồ, và dữ liệu chất lượng cao do con người viết ngày càng khó kiếm thêm. Vì vậy, người ta dùng ngày càng nhiều <strong>dữ liệu tổng hợp (synthetic data)</strong>: dữ liệu do chính một mô hình AI tạo ra, ví dụ bài giảng, bài tập và lời giải được sinh tự động.' },
      { type: 'example', title: 'Nhỏ mà có võ nhờ dữ liệu tốt', text: 'Năm 2023, nhóm nghiên cứu của Microsoft công bố mô hình lập trình <strong>phi-1</strong> (bài báo "Textbooks Are All You Need"). Mô hình chỉ có khoảng 1,3 tỷ tham số, nhỏ hơn nhiều so với các đối thủ, nhưng đạt kết quả rất tốt nhờ được học từ dữ liệu web đã lọc kỹ theo tiêu chí "chất lượng như sách giáo khoa" cộng thêm sách và bài tập do GPT-3.5 viết ra. Bài học: <em>chất lượng dữ liệu</em> có thể bù đắp một phần cho kích thước mô hình.' },
      { type: 'callout', tone: 'warn', title: 'Dữ liệu tổng hợp không phải thuốc tiên', text: 'Một nghiên cứu đăng trên tạp chí Nature năm 2024 (Shumailov và cộng sự) cho thấy nếu huấn luyện mô hình <strong>lặp đi lặp lại</strong> trên dữ liệu do mô hình tạo ra mà không chọn lọc, mô hình dần "quên" những trường hợp hiếm và đầu ra trở nên nghèo nàn. Hiện tượng này gọi là <strong>sụp đổ mô hình (model collapse)</strong>. Vì vậy dữ liệu tổng hợp cần được kiểm tra, lọc và trộn với dữ liệu thật: nguyên tắc "rác vào, rác ra" vẫn đúng nguyên vẹn.' }
    ],
    keyPoints: [
      'Feature là thông tin đầu vào, label là đáp án cần dự đoán.',
      'Dữ liệu phân loại (quận, màu sắc) không nên mã hóa thành 1, 2, 3; hãy dùng one-hot.',
      'Chia dữ liệu thành train / validation / test; tập test chỉ dùng ở bước cuối.',
      'Rác vào, rác ra: chất lượng dữ liệu quyết định chất lượng mô hình.',
      'Dữ liệu tổng hợp do AI tạo ra rất hữu ích nếu được lọc kỹ; dùng tràn lan không chọn lọc có thể gây sụp đổ mô hình.'
    ],
    quiz: [
      { q: 'Trong bài toán dự đoán giá nhà, cột nào là label?', options: ['Diện tích', 'Số phòng ngủ', 'Giá bán', 'Quận'], answer: 2, explain: 'Label là thứ ta muốn mô hình dự đoán, ở đây là giá bán. Các cột còn lại là feature.' },
      { q: 'Vì sao không nên mã hóa quận thành Cầu Giấy = 1, Hà Đông = 2, Đống Đa = 3?', options: ['Vì máy tính không đọc được số 3', 'Vì mô hình sẽ hiểu nhầm có quan hệ lớn nhỏ giữa các quận', 'Vì như vậy tốn bộ nhớ hơn one-hot', 'Vì tên quận phải giữ nguyên dạng chữ'], answer: 1, explain: 'Gán số thứ tự tạo ra quan hệ lớn nhỏ giả. One-hot biểu diễn mỗi quận bằng một cột riêng, không quận nào lớn hơn quận nào.' },
      { q: 'Tập test (kiểm tra) nên được dùng như thế nào?', options: ['Cất riêng và chỉ dùng ở bước cuối để đo năng lực thật', 'Trộn chung vào tập huấn luyện cho mô hình học nhiều hơn', 'Dùng liên tục để chỉnh cấu hình mô hình', 'Không cần thiết nếu tập huấn luyện đủ lớn'], answer: 0, explain: 'Tập test giống đề thi niêm phong. Dùng nó để chỉnh mô hình thì điểm số sẽ bị "ăn gian" và không còn khách quan.' }
    ],
    resources: [
      { title: 'Google ML Crash Course - Working with categorical data', url: 'https://developers.google.com/machine-learning/crash-course/categorical-data', note: 'Tiếng Anh, miễn phí, có phần one-hot encoding' },
      { title: 'Google ML Crash Course - Datasets: Dividing the original dataset', url: 'https://developers.google.com/machine-learning/crash-course/overfitting/dividing-datasets', note: 'Tiếng Anh, miễn phí, chia train/validation/test và loại bỏ trùng lặp' },
      { title: 'Kaggle Learn - Data Cleaning', url: 'https://www.kaggle.com/learn/data-cleaning', note: 'Tiếng Anh, miễn phí, thực hành làm sạch dữ liệu ngay trên trình duyệt' },
      { title: 'Machine Learning cơ bản - Bài 11: Giới thiệu về Feature Engineering', url: 'https://machinelearningcoban.com/general/2017/02/06/featureengineering/', note: 'Tiếng Việt, miễn phí (Vũ Hữu Tiệp)' }
    ],
    video: { id: 'Gv9_4yMHFhI', title: 'A Gentle Introduction to Machine Learning', channel: 'StatQuest with Josh Starmer', lang: 'en', minutes: 13 },
    updated: '2026-09'
  },

  /* ============================================================
     TẦNG 3 - BÀI 2: BA KIỂU HỌC
     ============================================================ */
  't3-b2': {
    duration: 13,
    summary: 'Máy học theo ba cách chính: có thầy chỉ đáp án (giám sát), tự tìm nhóm (không giám sát) và học qua thưởng phạt (tăng cường).',
    goals: [
      'Phân biệt học có giám sát, học không giám sát và học tăng cường',
      'Hiểu thuật toán láng giềng gần nhất (nearest neighbor) hoạt động thế nào',
      'Biết chọn kiểu học phù hợp cho một bài toán đời thường'
    ],
    blocks: [
      { type: 'p', text: 'Không phải mô hình nào cũng học theo cùng một cách. Tùy vào dữ liệu bạn có và mục tiêu bạn muốn, học máy thường được chia thành ba kiểu lớn. Hiểu ba kiểu này giúp bạn nhìn bất kỳ ứng dụng AI nào cũng đoán được "bên dưới nó đang học kiểu gì".' },

      { type: 'h', text: 'Học có giám sát: học với đáp án' },
      { type: 'p', text: '<strong>Học có giám sát (supervised learning)</strong> là khi mỗi ví dụ trong dữ liệu đều có sẵn nhãn, tức đáp án đúng. Mô hình nhìn rất nhiều cặp "câu hỏi - đáp án" và tự rút ra quy luật để trả lời câu hỏi mới.' },
      { type: 'analogy', text: 'Hãy tưởng tượng một em bé học nhận biết con vật. Bố mẹ chỉ vào tranh và nói: "Đây là con mèo", "Đây là con chó". Sau hàng trăm lần như vậy, em bé tự nhận ra con mèo trong một bức tranh chưa từng thấy. Bố mẹ chính là "người giám sát" cung cấp đáp án.' },
      { type: 'p', text: 'Học có giám sát có hai dạng bài toán chính:' },
      { type: 'list', items: [
        '<strong>Hồi quy (regression)</strong>: đoán một con số, ví dụ giá nhà, nhiệt độ ngày mai, doanh thu tháng tới.',
        '<strong>Phân loại (classification)</strong>: đoán một nhóm, ví dụ email có phải spam không, ảnh là mèo hay chó, khối u lành hay ác.'
      ] },
      { type: 'p', text: 'Hai bài tiếp theo (bài 3 và bài 4) sẽ đi sâu vào từng dạng này.' },

      { type: 'h', text: 'Láng giềng gần nhất: thuật toán đơn giản nhất' },
      { type: 'p', text: 'Khóa học Elements of AI giới thiệu một thuật toán học có giám sát cực kỳ trực quan: <strong>láng giềng gần nhất (nearest neighbor)</strong>. Ý tưởng chỉ có một câu: <em>muốn đoán nhãn của một điểm mới, hãy tìm ví dụ giống nó nhất trong dữ liệu cũ và lấy nhãn của ví dụ đó.</em>' },
      { type: 'example', title: 'Đoán loại quả', text: 'Bạn có dữ liệu về các quả đã biết tên, mỗi quả ghi cân nặng và độ ngọt. Một quả mới nặng 150 g, độ ngọt trung bình. Bạn tìm trong dữ liệu quả nào có cân nặng và độ ngọt gần nhất, ví dụ đó là một quả cam. Vậy bạn đoán quả mới là cam. Nếu vẽ các quả lên giấy kẻ ô, trục ngang là cân nặng, trục dọc là độ ngọt, thì "gần nhất" đơn giản là khoảng cách ngắn nhất trên hình.' },
      { type: 'p', text: 'Một biến thể phổ biến là <strong>k láng giềng gần nhất (k-nearest neighbors, k-NN)</strong>: thay vì hỏi một láng giềng, ta hỏi k láng giềng gần nhất (ví dụ 5) rồi lấy nhãn chiếm đa số. Cách này ít bị đánh lừa bởi một ví dụ "lạc loài".' },
      { type: 'callout', tone: 'note', title: 'Ưu và nhược', text: 'Nearest neighbor dễ hiểu, không cần "huấn luyện" gì cả. Nhưng mỗi lần dự đoán nó phải so với toàn bộ dữ liệu, nên chậm khi dữ liệu lớn. Nó cũng phụ thuộc vào cách đo khoảng cách: nếu cân nặng tính bằng gam còn độ ngọt thang 1-10 thì cân nặng sẽ lấn át, vì vậy cần chuẩn hóa dữ liệu như đã học ở bài 1.' },

      { type: 'h', text: 'Học không giám sát: tự tìm cấu trúc' },
      { type: 'p', text: '<strong>Học không giám sát (unsupervised learning)</strong> là khi dữ liệu <em>không có nhãn</em>. Không ai nói cho máy biết đáp án. Nhiệm vụ của máy là tự tìm ra cấu trúc, quy luật ẩn trong dữ liệu.' },
      { type: 'p', text: 'Dạng phổ biến nhất là <strong>phân cụm (clustering)</strong>: gom những ví dụ giống nhau vào cùng một nhóm.' },
      { type: 'example', title: 'Phân nhóm khách hàng', text: 'Một cửa hàng trực tuyến có dữ liệu mua sắm của hàng nghìn khách, nhưng không ai gắn nhãn "khách kiểu A, kiểu B". Thuật toán phân cụm có thể tự phát hiện: có một nhóm hay mua đồ trẻ em vào cuối tuần, một nhóm chỉ mua khi có giảm giá, một nhóm mua đồ công nghệ đắt tiền. Con người sau đó mới đặt tên cho từng nhóm.' },
      { type: 'analogy', text: 'Hãy tưởng tượng bạn đổ một thùng đồ chơi Lego lẫn lộn ra sàn và được yêu cầu "sắp xếp cho gọn", không ai bảo sắp theo tiêu chí nào. Bạn có thể tự gom theo màu, hoặc theo kích thước. Đó chính là tinh thần của học không giám sát.' },

      { type: 'h', text: 'Học tăng cường: học qua thưởng phạt' },
      { type: 'p', text: '<strong>Học tăng cường (reinforcement learning)</strong> khác hẳn hai kiểu trên. Không có bảng dữ liệu sẵn. Thay vào đó, có một <strong>tác tử (agent)</strong> hành động trong một <strong>môi trường (environment)</strong>. Sau mỗi hành động, nó nhận <strong>phần thưởng (reward)</strong> hoặc bị phạt. Qua rất nhiều lần thử và sai, nó học được chiến lược giúp tổng phần thưởng lớn nhất.' },
      { type: 'analogy', text: 'Giống như dạy chó ngồi: mỗi lần chó ngồi đúng, bạn cho một miếng bánh. Bạn không giải thích "ngồi là gì", chó tự tìm ra hành động nào mang lại phần thưởng.' },
      { type: 'p', text: 'Học tăng cường nổi tiếng với các hệ thống chơi game như AlphaGo của DeepMind, và cũng được dùng trong điều khiển robot. Các chatbot hiện đại cũng dùng một kỹ thuật liên quan là <strong>học tăng cường từ phản hồi của con người (RLHF)</strong>: con người chấm điểm các câu trả lời, và mô hình học cách đưa ra câu trả lời được chấm cao hơn.' },
      { type: 'callout', tone: 'note', title: 'Học tăng cường và các mô hình "biết suy luận"', text: 'Từ khoảng 2024-2025, học tăng cường trở thành bước then chốt để huấn luyện các <strong>mô hình suy luận (reasoning model)</strong>, loại mô hình "nghĩ từng bước" trước khi trả lời. Ý tưởng: cho mô hình giải bài toán hoặc viết code, rồi <em>thưởng</em> khi đáp án kiểm tra được là đúng (khớp kết quả toán, code chạy qua bài kiểm thử). Cách này thường được gọi là học tăng cường với phần thưởng kiểm chứng được (RLVR). Nhóm DeepSeek đã công bố mô hình DeepSeek-R1 (bài báo đăng trên Nature năm 2025) và cho thấy chỉ bằng học tăng cường, không cần con người viết mẫu từng bước lập luận, mô hình vẫn tự hình thành thói quen như tự kiểm tra lại và đổi hướng giải khi thấy sai.' },
      { type: 'table', head: ['Kiểu học', 'Dữ liệu', 'Mục tiêu', 'Ví dụ'], rows: [
        ['Có giám sát', 'Có nhãn (đáp án)', 'Dự đoán nhãn cho dữ liệu mới', 'Lọc spam, đoán giá nhà'],
        ['Không giám sát', 'Không nhãn', 'Tìm nhóm, cấu trúc ẩn', 'Phân nhóm khách hàng'],
        ['Tăng cường', 'Phần thưởng từ môi trường', 'Tìm chiến lược hành động tốt nhất', 'Chơi cờ vây, điều khiển robot']
      ] }
    ],
    keyPoints: [
      'Học có giám sát dùng dữ liệu có nhãn, gồm hai dạng: hồi quy (đoán số) và phân loại (đoán nhóm).',
      'Nearest neighbor đoán nhãn bằng cách tìm ví dụ giống nhất trong dữ liệu cũ.',
      'Học không giám sát không có nhãn, tự tìm cấu trúc; phổ biến nhất là phân cụm.',
      'Học tăng cường học qua thử và sai, dựa trên phần thưởng từ môi trường; ngày nay nó là bước quan trọng khi huấn luyện chatbot (RLHF) và mô hình suy luận.'
    ],
    quiz: [
      { q: 'Một ngân hàng có dữ liệu giao dịch không gắn nhãn và muốn tự động chia khách hàng thành các nhóm có thói quen giống nhau. Đây là kiểu học nào?', options: ['Học có giám sát - hồi quy', 'Học tăng cường', 'Học có giám sát - phân loại', 'Học không giám sát - phân cụm'], answer: 3, explain: 'Dữ liệu không có nhãn và mục tiêu là gom nhóm, nên đây là phân cụm thuộc học không giám sát.' },
      { q: 'Thuật toán láng giềng gần nhất dự đoán nhãn của một điểm mới bằng cách nào?', options: ['Tính trung bình tất cả nhãn trong dữ liệu', 'Lấy nhãn của ví dụ giống nó nhất trong dữ liệu đã có', 'Thử ngẫu nhiên rồi nhận thưởng phạt', 'Vẽ một đường thẳng qua các điểm'], answer: 1, explain: 'Nearest neighbor tìm ví dụ gần nhất (giống nhất) và mượn nhãn của ví dụ đó.' },
      { q: 'Bài toán nào phù hợp nhất với học tăng cường?', options: ['Dạy robot tự học cách đi mà không bị ngã', 'Dự đoán giá nhà từ diện tích', 'Phân loại email spam từ dữ liệu có nhãn', 'Chia bài báo thành các chủ đề khi không có nhãn'], answer: 0, explain: 'Robot hành động trong môi trường, nhận phản hồi (ngã là bị phạt, đi được là được thưởng) và học qua thử sai: đúng tinh thần học tăng cường.' }
    ],
    resources: [
      { title: 'Google - Introduction to Machine Learning', url: 'https://developers.google.com/machine-learning/intro-to-ml', note: 'Tiếng Anh, miễn phí, giải thích các kiểu học' },
      { title: 'Machine Learning cơ bản - Bài 2: Phân nhóm các thuật toán Machine Learning', url: 'https://machinelearningcoban.com/2016/12/27/categories/', note: 'Tiếng Việt, miễn phí, có giám sát / không giám sát / tăng cường' },
      { title: 'Machine Learning cơ bản - Bài 6: K-nearest neighbors', url: 'https://machinelearningcoban.com/2017/01/08/knn/', note: 'Tiếng Việt, miễn phí, có code Python' },
      { title: 'Elements of AI - Chương 4: Machine learning', url: 'https://www.elementsofai.com/', note: 'Có bản tiếng Anh và nhiều ngôn ngữ, miễn phí, có bài về nearest neighbor' }
    ],
    video: { id: 'W01tIRP_Rqs', title: 'Supervised vs. Unsupervised Learning', channel: 'IBM Technology', lang: 'en', minutes: 7 },
    updated: '2026-09'
  },

  /* ============================================================
     TẦNG 3 - BÀI 3: HỒI QUY TUYẾN TÍNH & GRADIENT DESCENT
     ============================================================ */
  't3-b3': {
    duration: 16,
    summary: 'Mô hình đầu tiên: vẽ đường thẳng y = wx + b để đoán giá nhà, đo sai số bằng MSE và dò đường xuống núi bằng gradient descent.',
    goals: [
      'Hiểu mô hình hồi quy tuyến tính y = wx + b và ý nghĩa của w, b',
      'Tính được hàm mất mát MSE cho một ví dụ nhỏ',
      'Giải thích gradient descent, learning rate và epoch bằng hình ảnh trực quan'
    ],
    blocks: [
      { type: 'p', text: 'Đây là bài quan trọng nhất của tầng 3. Bạn sẽ thấy "máy học" thực chất là một quá trình rất cụ thể: <strong>đoán, đo sai số, sửa một chút, lặp lại</strong>. Toàn bộ các mô hình AI lớn ngày nay, kể cả ChatGPT, đều dựa trên cùng tinh thần này, chỉ ở quy mô khổng lồ hơn.' },

      { type: 'h', text: 'Mô hình: một đường thẳng' },
      { type: 'p', text: 'Giả sử bạn muốn đoán giá căn hộ ở Hà Nội chỉ dựa vào diện tích. Bạn thu thập vài căn đã bán:' },
      { type: 'table', head: ['Diện tích x (m²)', 'Giá thật y (tỷ đồng)'], rows: [
        ['30', '1,8'],
        ['50', '2,6'],
        ['70', '3,4'],
        ['90', '4,2']
      ] },
      { type: 'callout', tone: 'note', title: 'Số liệu giả định', text: 'Bảng trên là <strong>số liệu giả định</strong>, được chọn cho tròn để dễ tính. Giá nhà thật phụ thuộc nhiều yếu tố khác như vị trí, pháp lý, tầng, hướng.' },
      { type: 'p', text: 'Nếu vẽ các điểm này lên giấy kẻ ô (trục ngang là diện tích, trục dọc là giá), bạn sẽ thấy chúng gần như nằm trên một đường thẳng. <strong>Hồi quy tuyến tính (linear regression)</strong> chính là đi tìm đường thẳng khớp nhất với các điểm đó:' },
      { type: 'p', text: '<strong><code>y = w·x + b</code></strong>' },
      { type: 'list', items: [
        '<code>x</code> là feature (diện tích), <code>y</code> là giá dự đoán.',
        '<code>w</code> là <strong>trọng số (weight)</strong>: độ dốc của đường thẳng. Ở đây nó nghĩa là "mỗi m² thêm bao nhiêu tỷ".',
        '<code>b</code> là <strong>độ lệch (bias)</strong>: điểm đường thẳng cắt trục dọc, giống một khoản "giá khởi điểm".'
      ] },
      { type: 'p', text: 'Đây chính là hàm bậc nhất bạn đã học ở lớp 9! Với dữ liệu trên, đường khớp hoàn hảo là <code>w = 0,04</code> và <code>b = 0,6</code>. Thử lại: căn 50 m² có giá 0,04 × 50 + 0,6 = 2,6 tỷ. Khớp! Vậy căn 60 m² chưa có trong bảng, mô hình đoán 0,04 × 60 + 0,6 = 3,0 tỷ.' },
      { type: 'p', text: '"Huấn luyện mô hình" nghĩa là <strong>đi tìm w và b tốt nhất</strong>. w và b gọi chung là <strong>tham số (parameters)</strong>. Mô hình ngôn ngữ lớn có hàng tỷ tham số, còn mô hình của ta chỉ có hai.' },

      { type: 'h', text: 'Hàm mất mát: đo xem đoán sai bao nhiêu' },
      { type: 'p', text: 'Máy không "nhìn" được đường thẳng nào đẹp. Nó cần một con số cho biết đường thẳng đang sai bao nhiêu. Con số đó gọi là <strong>mất mát (loss)</strong>. Một cách đo phổ biến là <strong>sai số bình phương trung bình (Mean Squared Error, MSE)</strong>:' },
      { type: 'steps', items: [
        { title: 'Tính sai số từng căn', text: 'Lấy giá dự đoán trừ giá thật.' },
        { title: 'Bình phương', text: 'Nhân sai số với chính nó, để số âm thành dương và sai nhiều bị phạt nặng hơn hẳn.' },
        { title: 'Lấy trung bình', text: 'Cộng tất cả lại rồi chia cho số căn.' }
      ] },
      { type: 'example', title: 'Tính MSE cho một đường thẳng chưa tốt', text: 'Giả sử mô hình đang đoán bằng đường <code>y = 0,05x</code> (tức w = 0,05, b = 0). Dự đoán cho 4 căn là 1,5 / 2,5 / 3,5 / 4,5 tỷ. Sai số so với giá thật: -0,3 / -0,1 / +0,1 / +0,3. Bình phương: 0,09 / 0,01 / 0,01 / 0,09. Tổng là 0,2, chia 4 được <strong>MSE = 0,05</strong>. Với đường tốt nhất (w = 0,04, b = 0,6), MSE = 0. Mục tiêu của huấn luyện là làm MSE nhỏ nhất có thể.' },

      { type: 'h', text: 'Gradient descent: xuống núi trong sương mù' },
      { type: 'p', text: 'Có vô số cặp (w, b). Thử hết thì không nổi. Máy dùng một chiến lược thông minh tên là <strong>gradient descent</strong> (hạ dần theo độ dốc).' },
      { type: 'analogy', text: 'Hãy tưởng tượng bạn đứng trên sườn núi lúc sương mù dày đặc, không nhìn thấy gì quá một bước chân. Bạn muốn xuống thung lũng (nơi thấp nhất). Cách làm: dò bằng chân xem hướng nào dốc xuống nhiều nhất, bước một bước theo hướng đó, rồi lại dò tiếp. Cứ thế, từng bước nhỏ, bạn sẽ xuống tới đáy. Độ cao của núi chính là loss. Vị trí của bạn chính là cặp (w, b). Đáy thung lũng là cặp (w, b) có loss nhỏ nhất.' },
      { type: 'steps', items: [
        { title: 'Khởi đầu ngẫu nhiên', text: 'Chọn w và b bất kỳ, ví dụ cả hai bằng 0.' },
        { title: 'Tính loss', text: 'Dùng MSE để đo đường thẳng hiện tại sai bao nhiêu.' },
        { title: 'Tìm hướng dốc', text: 'Tính xem nếu tăng hay giảm w, b một chút thì loss tăng hay giảm. Hướng làm loss giảm nhanh nhất gọi là ngược hướng gradient.' },
        { title: 'Bước một bước nhỏ', text: 'Điều chỉnh w và b theo hướng đó.' },
        { title: 'Lặp lại', text: 'Quay lại bước 2 cho đến khi loss gần như không giảm nữa (mô hình đã hội tụ).' }
      ] },
      { type: 'p', text: '<strong>Tốc độ học (learning rate)</strong> là độ dài mỗi bước chân. Đây là một <strong>siêu tham số (hyperparameter)</strong>: con người chọn trước, không phải máy tự học.' },
      { type: 'list', items: [
        'Learning rate <strong>quá nhỏ</strong>: bước li ti, xuống núi rất lâu.',
        'Learning rate <strong>quá lớn</strong>: bước quá dài, nhảy qua đáy thung lũng sang sườn bên kia, thậm chí càng lúc càng lên cao (loss tăng vọt).',
        'Learning rate <strong>vừa phải</strong>: xuống nhanh và ổn định.'
      ] },
      { type: 'p', text: 'Một <strong>epoch</strong> là một lượt mô hình đã xem qua <em>toàn bộ</em> tập huấn luyện. Huấn luyện thường kéo dài nhiều epoch. Trong thực tế, dữ liệu thường được chia thành các <strong>lô nhỏ (batch)</strong>, và mô hình cập nhật w, b sau mỗi lô thay vì đợi hết cả tập.' },
      { type: 'callout', tone: 'tip', title: 'Đọc biểu đồ loss', text: 'Khi huấn luyện, người ta vẽ loss theo số epoch. Đường cong đẹp là đường đi xuống rồi phẳng dần. Nếu loss dao động dữ dội hoặc tăng lên, rất có thể learning rate đang quá lớn.' },

      { type: 'h', text: 'Dành cho người tò mò: thử bằng Python' },
      { type: 'p', text: 'Không bắt buộc. Nếu bạn muốn thấy gradient descent chạy thật, đoạn code dưới đây tự tìm w và b chỉ với thư viện numpy.' },
      { type: 'code', lang: 'python', code: `import numpy as np

# Số liệu giả định: diện tích (chục m2) và giá (tỷ đồng)
x = np.array([3.0, 5.0, 7.0, 9.0])   # 30, 50, 70, 90 m2
y = np.array([1.8, 2.6, 3.4, 4.2])

w, b = 0.0, 0.0        # khởi đầu
learning_rate = 0.01

for epoch in range(5000):
    y_pred = w * x + b
    error = y_pred - y
    loss = np.mean(error ** 2)          # MSE
    # Độ dốc của loss theo w và b
    grad_w = 2 * np.mean(error * x)
    grad_b = 2 * np.mean(error)
    # Bước xuống núi
    w -= learning_rate * grad_w
    b -= learning_rate * grad_b

print("w =", round(w, 3), "| b =", round(b, 3), "| loss =", round(loss, 6))
# Kết quả gần w = 0.4 (tỷ mỗi chục m2, tức 0.04 tỷ/m2), b = 0.6`, caption: 'Gradient descent viết tay bằng numpy. Diện tích được đổi sang đơn vị chục m² để các con số không quá lớn, giúp learning rate dễ chọn hơn.' },
      { type: 'p', text: 'Trong thực tế, không ai phải viết tay vòng lặp này. Thư viện <strong>scikit-learn</strong> (phiên bản ổn định hiện hành là 1.9, tháng 9/2026) làm việc đó chỉ trong vài dòng:' },
      { type: 'code', lang: 'python', code: `from sklearn.linear_model import LinearRegression

X = [[30], [50], [70], [90]]      # diện tích (m2), mỗi dòng là một ví dụ
y = [1.8, 2.6, 3.4, 4.2]          # giá (tỷ đồng), số liệu giả định

model = LinearRegression().fit(X, y)
print(model.coef_[0], model.intercept_)   # khoảng 0.04 và 0.6
print(model.predict([[60]]))              # khoảng 3.0 tỷ`, caption: 'LinearRegression của scikit-learn tìm w (coef_) và b (intercept_) bằng công thức toán trực tiếp thay vì gradient descent, nhưng kết quả giống nhau.' },
      { type: 'callout', tone: 'tip', title: 'Chạy thử không cần cài đặt', text: 'Mở <a href="https://colab.research.google.com/">Google Colab</a>, tạo một notebook mới, dán code vào và bấm chạy. Colab miễn phí, chạy trên trình duyệt và đã cài sẵn numpy, scikit-learn. Các bài tập lập trình của Google ML Crash Course cũng chạy trên Colab.' }
    ],
    keyPoints: [
      'Hồi quy tuyến tính tìm đường thẳng y = wx + b khớp nhất với dữ liệu; w và b là tham số.',
      'Loss đo mức sai của mô hình; MSE = trung bình của bình phương sai số.',
      'Gradient descent giảm loss từng bước nhỏ, giống xuống núi trong sương mù.',
      'Learning rate là độ dài bước: quá nhỏ thì chậm, quá lớn thì không hội tụ.',
      'Một epoch là một lượt xem hết tập huấn luyện.'
    ],
    quiz: [
      { q: 'Trong mô hình giá nhà y = 0,04x + 0,6 (x là m², y là tỷ đồng), con số 0,04 có ý nghĩa gì?', options: ['Giá khởi điểm của mọi căn nhà', 'Mỗi m² tăng thêm làm giá tăng khoảng 0,04 tỷ', 'Sai số trung bình của mô hình', 'Tốc độ học của mô hình'], answer: 1, explain: '0,04 là trọng số w, tức độ dốc của đường thẳng: mỗi m² thêm vào thì giá dự đoán tăng 0,04 tỷ (40 triệu). 0,6 mới là độ lệch b.' },
      { q: 'Mô hình dự đoán hai căn nhà sai lần lượt +1 và -1 tỷ. MSE là bao nhiêu?', options: ['0', '2', '0,5', '1'], answer: 3, explain: 'Bình phương hai sai số: 1 và 1. Tổng bằng 2, chia cho 2 căn được MSE = 1. Lưu ý nếu không bình phương, +1 và -1 sẽ triệt tiêu thành 0, che giấu sai số.' },
      { q: 'Khi huấn luyện, loss dao động mạnh và có xu hướng tăng lên. Nguyên nhân hay gặp nhất là gì?', options: ['Learning rate quá lớn', 'Learning rate quá nhỏ', 'Số epoch quá ít', 'Dữ liệu đã được chuẩn hóa'], answer: 0, explain: 'Learning rate quá lớn giống bước chân quá dài: nhảy qua đáy thung lũng, lên sườn bên kia, khiến loss dao động hoặc tăng.' }
    ],
    resources: [
      { title: 'Google ML Crash Course - Linear regression', url: 'https://developers.google.com/machine-learning/crash-course/linear-regression', note: 'Tiếng Anh, miễn phí, có bài tập tương tác về loss và gradient descent' },
      { title: 'Machine Learning cơ bản - Bài 3: Linear Regression', url: 'https://machinelearningcoban.com/2016/12/28/linearregression/', note: 'Tiếng Việt, miễn phí, có code Python và scikit-learn' },
      { title: 'Machine Learning cơ bản - Bài 7: Gradient Descent (phần 1/2)', url: 'https://machinelearningcoban.com/2017/01/12/gradientdescent/', note: 'Tiếng Việt, miễn phí, giải thích learning rate kèm code' },
      { title: '3Blue1Brown - Gradient descent, how neural networks learn', url: 'https://www.3blue1brown.com/lessons/gradient-descent', note: 'Tiếng Anh, video trực quan, có phụ đề' }
    ],
    video: { id: 'sDv4f4s2SB8', title: 'Gradient Descent, Step-by-Step', channel: 'StatQuest with Josh Starmer', lang: 'en', minutes: 24 },
    updated: '2026-09'
  },

  /* ============================================================
     TẦNG 3 - BÀI 4: PHÂN LOẠI & ĐÁNH GIÁ
     ============================================================ */
  't3-b4': {
    duration: 16,
    summary: 'Mô hình phân loại trả về xác suất, ta chọn ngưỡng để ra quyết định, rồi đánh giá bằng confusion matrix, accuracy, precision và recall.',
    goals: [
      'Hiểu mô hình phân loại trả về xác suất và vai trò của ngưỡng quyết định',
      'Đọc được confusion matrix và tính accuracy, precision, recall',
      'Giải thích vì sao accuracy đánh lừa khi dữ liệu mất cân bằng'
    ],
    blocks: [
      { type: 'p', text: 'Ở bài trước, mô hình đoán một con số (giá nhà). Nhưng rất nhiều bài toán lại cần câu trả lời dạng <em>có hoặc không</em>: email này có phải spam không? Người này có mắc bệnh không? Giao dịch này có gian lận không? Đó là bài toán <strong>phân loại (classification)</strong>.' },

      { type: 'h', text: 'Từ con số đến xác suất' },
      { type: 'p', text: 'Mô hình phân loại thường không trả lời thẳng "có" hay "không". Nó trả về một <strong>xác suất (probability)</strong> từ 0 đến 1. Ví dụ: "email này có 0,92 khả năng là spam", tức 92%.' },
      { type: 'p', text: 'Một mô hình kinh điển cho việc này là <strong>hồi quy logistic (logistic regression)</strong>. Nó tính giống hồi quy tuyến tính (cộng các feature nhân trọng số), nhưng sau đó cho kết quả đi qua một hàm hình chữ S gọi là <strong>hàm sigmoid</strong>. Hàm này "ép" mọi con số, dù lớn hay nhỏ đến đâu, về khoảng từ 0 đến 1. Số càng lớn thì xác suất càng gần 1, số càng âm thì càng gần 0.' },
      { type: 'analogy', text: 'Hãy tưởng tượng một chiếc bóp còi xe đạp: bóp nhẹ thì kêu nhỏ, bóp mạnh thì kêu to, nhưng bóp mạnh đến mấy cũng chỉ kêu to đến một mức tối đa. Hàm sigmoid cũng vậy: đầu vào có thể rất lớn, nhưng đầu ra không bao giờ vượt quá 1.' },

      { type: 'h', text: 'Ngưỡng quyết định' },
      { type: 'p', text: 'Có xác suất rồi, ta cần một <strong>ngưỡng (threshold)</strong> để ra quyết định. Ngưỡng hay dùng là 0,5: xác suất từ 0,5 trở lên thì kết luận "spam", dưới 0,5 thì "không spam".' },
      { type: 'p', text: 'Nhưng 0,5 không phải lúc nào cũng tốt. Việc chọn ngưỡng tùy vào cái giá của từng loại sai lầm:' },
      { type: 'list', items: [
        '<strong>Lọc spam</strong>: để lọt một email spam vào hộp thư thì hơi phiền. Nhưng chặn nhầm email phỏng vấn xin việc thì rất tai hại. Vì vậy ta có thể nâng ngưỡng lên, ví dụ 0,9, để chỉ chặn khi thật chắc chắn.',
        '<strong>Xét nghiệm sàng lọc bệnh</strong>: bỏ sót người bệnh nguy hiểm hơn nhiều so với báo động nhầm (người khỏe chỉ cần xét nghiệm lại). Vì vậy ta có thể hạ ngưỡng xuống để bắt được nhiều ca bệnh hơn.'
      ] },

      { type: 'h', text: 'Confusion matrix: bảng đếm đúng sai' },
      { type: 'p', text: 'Để đánh giá mô hình phân loại, ta đếm bốn trường hợp có thể xảy ra và xếp vào một bảng gọi là <strong>ma trận nhầm lẫn (confusion matrix)</strong>. Quy ước: lớp ta quan tâm (spam, có bệnh) gọi là <strong>dương tính (positive)</strong>, lớp còn lại là <strong>âm tính (negative)</strong>.' },
      { type: 'table', head: ['', 'Thực tế: Spam', 'Thực tế: Không spam'], rows: [
        ['Mô hình đoán: Spam', 'TP - Dương tính thật (bắt đúng spam)', 'FP - Dương tính giả (chặn nhầm email tốt)'],
        ['Mô hình đoán: Không spam', 'FN - Âm tính giả (để lọt spam)', 'TN - Âm tính thật (cho qua đúng email tốt)']
      ] },
      { type: 'example', title: 'Mô hình lọc spam chấm trên 1.000 email', text: 'Giả sử có 1.000 email, trong đó 100 email là spam thật. Mô hình bắt đúng 80 spam (TP = 80), để lọt 20 spam (FN = 20), chặn nhầm 10 email tốt (FP = 10), và cho qua đúng 890 email tốt (TN = 890). Đây là số liệu giả định để luyện tính toán.' },
      { type: 'table', head: ['1.000 email', 'Thực tế: Spam (100)', 'Thực tế: Không spam (900)'], rows: [
        ['Đoán: Spam', 'TP = 80', 'FP = 10'],
        ['Đoán: Không spam', 'FN = 20', 'TN = 890']
      ] },

      { type: 'h', text: 'Accuracy, precision, recall' },
      { type: 'p', text: 'Từ bốn con số trên, ta tính ba chỉ số phổ biến:' },
      { type: 'list', items: [
        '<strong>Độ chính xác tổng thể (accuracy)</strong> = số đoán đúng / tổng số = (TP + TN) / tất cả. Ví dụ: (80 + 890) / 1.000 = <strong>97%</strong>.',
        '<strong>Precision</strong> (độ chuẩn xác) = TP / (TP + FP). Trả lời câu hỏi: <em>trong những email bị mô hình gọi là spam, bao nhiêu phần trăm đúng là spam?</em> Ví dụ: 80 / 90 ≈ <strong>89%</strong>.',
        '<strong>Recall</strong> (độ bao phủ) = TP / (TP + FN). Trả lời câu hỏi: <em>trong tất cả spam thật, mô hình bắt được bao nhiêu phần trăm?</em> Ví dụ: 80 / 100 = <strong>80%</strong>.'
      ] },
      { type: 'analogy', text: 'Hãy tưởng tượng bạn đi đánh cá bằng lưới. Recall là: trong hồ có 100 con cá, lưới của bạn vớt được bao nhiêu con. Precision là: trong mẻ lưới kéo lên, bao nhiêu phần là cá, bao nhiêu phần là rác và ủng cũ. Lưới to thì vớt được nhiều cá (recall cao) nhưng cũng dính nhiều rác (precision thấp).' },
      { type: 'p', text: 'Precision và recall thường "kéo co" với nhau. Hạ ngưỡng thì mô hình gọi "dương tính" nhiều hơn: recall tăng nhưng precision thường giảm. Nâng ngưỡng thì ngược lại. Lọc spam thường ưu tiên precision (đừng chặn nhầm), xét nghiệm sàng lọc thường ưu tiên recall (đừng bỏ sót).' },
      { type: 'callout', tone: 'warn', title: 'Accuracy đánh lừa khi dữ liệu mất cân bằng', text: 'Giả sử một bệnh hiếm chỉ có 10 người mắc trong 1.000 người. Một "mô hình" lười biếng luôn trả lời "không bệnh" cho mọi người. Nó đúng 990 / 1.000 lần, accuracy <strong>99%</strong>! Nghe rất ấn tượng, nhưng recall bằng 0 / 10 = <strong>0%</strong>: không phát hiện được bất kỳ ai bị bệnh. Mô hình này hoàn toàn vô dụng. Khi một lớp chiếm áp đảo (dữ liệu mất cân bằng - class imbalance), hãy luôn nhìn precision và recall, đừng chỉ nhìn accuracy.' },

      { type: 'h', text: 'Dành cho người tò mò: tính bằng scikit-learn' },
      { type: 'code', lang: 'python', code: `from sklearn.metrics import confusion_matrix, accuracy_score, precision_score, recall_score

# 1 = spam, 0 = không spam (ví dụ nhỏ tự đặt)
y_true = [1, 1, 1, 1, 0, 0, 0, 0, 0, 0]
y_pred = [1, 1, 1, 0, 1, 0, 0, 0, 0, 0]

print(confusion_matrix(y_true, y_pred))   # [[TN FP] [FN TP]] = [[5 1] [1 3]]
print("Accuracy :", accuracy_score(y_true, y_pred))    # 0.8
print("Precision:", precision_score(y_true, y_pred))   # 0.75
print("Recall   :", recall_score(y_true, y_pred))      # 0.75`, caption: 'scikit-learn in confusion matrix theo thứ tự hàng là thực tế, cột là dự đoán, lớp 0 trước lớp 1, nên TN nằm ở góc trên bên trái.' }
    ],
    keyPoints: [
      'Mô hình phân loại trả về xác suất; ngưỡng quyết định biến xác suất thành câu trả lời có/không.',
      'Confusion matrix đếm bốn trường hợp: TP, FP, FN, TN.',
      'Precision = TP / (TP + FP): gọi là dương tính thì đúng bao nhiêu. Recall = TP / (TP + FN): bắt được bao nhiêu ca thật.',
      'Chọn ngưỡng tùy cái giá của từng loại sai lầm; precision và recall thường đánh đổi nhau.',
      'Với dữ liệu mất cân bằng, accuracy cao có thể hoàn toàn vô nghĩa.'
    ],
    quiz: [
      { q: 'Một mô hình xét nghiệm có TP = 40, FN = 10, FP = 20, TN = 930. Recall là bao nhiêu?', options: ['40%', '67%', '97%', '80%'], answer: 3, explain: 'Recall = TP / (TP + FN) = 40 / (40 + 10) = 40 / 50 = 80%. Precision mới là 40 / 60 ≈ 67%.' },
      { q: 'Với bài toán sàng lọc một bệnh nguy hiểm, ta thường ưu tiên điều gì?', options: ['Precision cao, chấp nhận bỏ sót một số người bệnh', 'Recall cao, chấp nhận một số báo động nhầm', 'Chỉ cần accuracy cao', 'Luôn giữ ngưỡng đúng bằng 0,5'], answer: 1, explain: 'Bỏ sót người bệnh (FN) rất nguy hiểm, còn báo động nhầm chỉ cần xét nghiệm lại. Vì vậy ưu tiên recall, thường bằng cách hạ ngưỡng.' },
      { q: 'Trong 1.000 giao dịch chỉ có 5 giao dịch gian lận. Mô hình luôn đoán "không gian lận" đạt accuracy 99,5%. Nhận xét nào đúng?', options: ['Mô hình vô dụng vì recall bằng 0, accuracy bị đánh lừa bởi dữ liệu mất cân bằng', 'Mô hình rất tốt vì accuracy gần 100%', 'Mô hình có precision rất cao nên dùng được', 'Cần giảm số epoch để mô hình tốt hơn'], answer: 0, explain: 'Mô hình không bắt được giao dịch gian lận nào (recall = 0%). Accuracy cao chỉ vì lớp "không gian lận" chiếm áp đảo.' }
    ],
    resources: [
      { title: 'Google ML Crash Course - Classification', url: 'https://developers.google.com/machine-learning/crash-course/classification', note: 'Tiếng Anh, miễn phí, có phần ngưỡng, confusion matrix, precision/recall' },
      { title: 'Google ML Crash Course - Logistic regression', url: 'https://developers.google.com/machine-learning/crash-course/logistic-regression', note: 'Tiếng Anh, miễn phí' },
      { title: 'scikit-learn - Metrics and scoring', url: 'https://scikit-learn.org/stable/modules/model_evaluation.html', note: 'Tài liệu chính thức, tiếng Anh' },
      { title: 'Machine Learning cơ bản - Bài 10: Logistic Regression', url: 'https://machinelearningcoban.com/2017/01/27/logisticregression/', note: 'Tiếng Việt, miễn phí, có hàm sigmoid và code Python' }
    ],
    video: { id: 'Kdsp6soqA7o', title: 'Machine Learning Fundamentals: The Confusion Matrix', channel: 'StatQuest with Josh Starmer', lang: 'en', minutes: 7 },
    updated: '2026-09'
  },

  /* ============================================================
     TẦNG 3 - BÀI 5: OVERFITTING
     ============================================================ */
  't3-b5': {
    duration: 13,
    summary: 'Mô hình học tủ (overfitting) hay học chưa tới (underfitting)? Hiểu khả năng tổng quát hóa và cách giữ mô hình "hiểu bài" thật.',
    goals: [
      'Phân biệt overfitting và underfitting qua ví dụ học tủ và học chưa tới',
      'Hiểu khả năng tổng quát hóa là mục tiêu thật sự của học máy',
      'Biết các cách chống overfitting, trong đó có regularization ở mức khái niệm'
    ],
    blocks: [
      { type: 'p', text: 'Bạn đã biết cách huấn luyện một mô hình cho loss nhỏ. Nhưng có một cái bẫy: loss trên tập huấn luyện nhỏ chưa chắc mô hình đã tốt. Điều ta thật sự cần là mô hình dự đoán đúng với <strong>dữ liệu mới, chưa từng thấy</strong>. Khả năng đó gọi là <strong>tổng quát hóa (generalization)</strong>.' },

      { type: 'h', text: 'Học tủ và hiểu bài' },
      { type: 'example', title: 'Hai bạn học sinh', text: 'Bạn An học thuộc lòng đáp án của 50 đề toán trong sách, từng con số. Bạn Bình thì hiểu cách giải từng dạng bài. Khi làm lại đúng 50 đề đó, cả hai đều được 10 điểm. Nhưng đến kỳ thi thật với đề mới, An lúng túng vì không có đề nào giống hệt, còn Bình vẫn làm tốt. An đã "học tủ", Bình đã "hiểu bài".' },
      { type: 'p', text: 'Mô hình học máy cũng vậy. Một mô hình quá phức tạp có thể ghi nhớ từng chi tiết nhỏ, kể cả nhiễu và lỗi ngẫu nhiên trong dữ liệu huấn luyện, thay vì học quy luật chung. Hiện tượng này gọi là <strong>quá khớp (overfitting)</strong>.' },

      { type: 'h', text: 'Overfitting và underfitting' },
      { type: 'p', text: 'Quay lại ví dụ giá nhà. Hãy tưởng tượng các điểm dữ liệu trên giấy kẻ ô và ba cách vẽ đường qua chúng:' },
      { type: 'list', items: [
        '<strong>Chưa khớp (underfitting)</strong>: vẽ một đường nằm ngang, đoán mọi căn nhà cùng một giá. Mô hình quá đơn giản, sai cả trên dữ liệu huấn luyện lẫn dữ liệu mới. Giống học sinh chưa học bài.',
        '<strong>Vừa khớp (good fit)</strong>: một đường thẳng hoặc đường cong nhẹ đi qua giữa đám điểm. Không chạm chính xác từng điểm, nhưng bắt được xu hướng chung. Đoán tốt cả với nhà mới.',
        '<strong>Quá khớp (overfitting)</strong>: một đường ngoằn ngoèo uốn éo để đi qua <em>chính xác</em> từng điểm. Loss huấn luyện bằng 0, nhưng gặp căn nhà mới thì đoán rất lệch. Giống học tủ.'
      ] },
      { type: 'table', head: ['', 'Loss trên tập huấn luyện', 'Loss trên tập kiểm định', 'Chẩn đoán'], rows: [
        ['Underfitting', 'Cao', 'Cao', 'Mô hình quá đơn giản hoặc học chưa đủ'],
        ['Vừa khớp', 'Thấp', 'Thấp, gần bằng loss huấn luyện', 'Tốt'],
        ['Overfitting', 'Rất thấp', 'Cao hơn hẳn loss huấn luyện', 'Mô hình đang học tủ']
      ] },
      { type: 'callout', tone: 'tip', title: 'Dấu hiệu nhận biết', text: 'Vẽ hai đường loss theo epoch: một cho tập huấn luyện, một cho tập kiểm định. Nếu loss huấn luyện vẫn giảm đều mà loss kiểm định bắt đầu <strong>tăng lên</strong>, đó là lúc mô hình bắt đầu overfitting. Đây chính là lý do ta cần tập validation như đã học ở bài 1.' },

      { type: 'h', text: 'Cách chống overfitting' },
      { type: 'list', items: [
        '<strong>Thêm dữ liệu</strong>: càng nhiều ví dụ đa dạng, mô hình càng khó học thuộc lòng và buộc phải tìm quy luật chung.',
        '<strong>Làm đơn giản mô hình</strong>: dùng ít tham số hơn, ít feature hơn. Đừng dùng dao mổ trâu để giết gà.',
        '<strong>Dừng sớm (early stopping)</strong>: ngừng huấn luyện khi loss trên tập kiểm định không giảm nữa.',
        '<strong>Điều chuẩn (regularization)</strong>: "phạt" mô hình khi nó trở nên quá phức tạp.'
      ] },
      { type: 'p', text: 'Regularization nghe có vẻ khó, nhưng ý tưởng rất đơn giản. Bình thường mô hình chỉ cố làm loss nhỏ nhất. Với regularization, ta đổi mục tiêu thành: <strong>loss nhỏ + mô hình đơn giản</strong>. Mô hình bị cộng thêm "tiền phạt" nếu các trọng số w quá lớn hoặc quá nhiều. Vì vậy nó chỉ giữ lại những quy luật thật sự đáng giá, bỏ qua những chi tiết vụn vặt do nhiễu.' },
      { type: 'analogy', text: 'Hãy tưởng tượng thầy giáo chấm bài có quy định: lời giải đúng được điểm, nhưng lời giải dài dòng, rắc rối không cần thiết bị trừ điểm. Học sinh sẽ học cách tìm lời giải gọn gàng và bản chất, thay vì chép lại mọi thứ. Regularization chính là "luật trừ điểm vì rắc rối" dành cho mô hình.' },
      { type: 'p', text: 'Mức phạt mạnh hay nhẹ lại là một siêu tham số. Phạt quá nhẹ thì vẫn overfitting, phạt quá nặng thì mô hình bị ép đơn giản quá mức và chuyển sang underfitting. Người làm học máy dùng tập validation để tìm điểm cân bằng.' },

      { type: 'h', text: 'Tổng kết tầng 3' },
      { type: 'p', text: 'Bạn vừa đi qua toàn bộ vòng đời cơ bản của một mô hình học máy:' },
      { type: 'steps', items: [
        { title: 'Chuẩn bị dữ liệu', text: 'Xác định feature, label, làm sạch, mã hóa, chia train/validation/test.' },
        { title: 'Chọn kiểu học và mô hình', text: 'Có nhãn hay không? Đoán số hay đoán nhóm?' },
        { title: 'Huấn luyện', text: 'Dùng loss và gradient descent để tìm tham số tốt nhất.' },
        { title: 'Đánh giá', text: 'Dùng đúng chỉ số (MSE, precision, recall...) trên tập validation.' },
        { title: 'Kiểm tra tổng quát hóa', text: 'Chống overfitting, rồi mới đo điểm cuối cùng trên tập test.' }
      ] },
      { type: 'callout', tone: 'note', title: 'Liên hệ với AI hiện đại', text: 'Các mô hình ngôn ngữ lớn cũng đi qua đúng những bước này, chỉ khác ở quy mô: dữ liệu là lượng văn bản khổng lồ, tham số lên tới hàng tỷ, và mô hình là mạng nơ-ron nhiều lớp thay vì một đường thẳng. Sau bước học chính, chúng còn được tinh chỉnh thêm bằng học tăng cường như bạn đã thấy ở bài 2. Đó là chủ đề của tầng tiếp theo.' },
      { type: 'callout', tone: 'tip', title: 'Muốn tự tay luyện tập?', text: 'Lộ trình miễn phí gọn gàng: học lý thuyết với <a href="https://developers.google.com/machine-learning/crash-course">Google ML Crash Course</a> (bản mới có thêm module về mô hình ngôn ngữ lớn và AutoML), đọc bản tiếng Việt ở <a href="https://machinelearningcoban.com/">Machine Learning cơ bản</a>, rồi thực hành trên notebook với khóa <a href="https://www.kaggle.com/learn/intro-to-machine-learning">Intro to Machine Learning của Kaggle Learn</a>. Tất cả chạy được trên trình duyệt, không cần máy mạnh.' }
    ],
    keyPoints: [
      'Mục tiêu thật của học máy là tổng quát hóa: dự đoán đúng với dữ liệu mới.',
      'Overfitting là học tủ: rất tốt trên dữ liệu huấn luyện, kém trên dữ liệu mới.',
      'Underfitting là học chưa tới: kém cả trên dữ liệu huấn luyện lẫn dữ liệu mới.',
      'So sánh loss huấn luyện với loss kiểm định để phát hiện overfitting.',
      'Chống overfitting: thêm dữ liệu, đơn giản hóa mô hình, dừng sớm, regularization.'
    ],
    quiz: [
      { q: 'Một mô hình đạt độ chính xác 99% trên tập huấn luyện nhưng chỉ 60% trên tập kiểm định. Mô hình đang gặp vấn đề gì?', options: ['Underfitting', 'Learning rate quá nhỏ', 'Overfitting', 'Dữ liệu chưa được mã hóa one-hot'], answer: 2, explain: 'Khoảng cách lớn giữa kết quả huấn luyện (rất tốt) và kiểm định (kém) là dấu hiệu điển hình của overfitting, tức mô hình đang học tủ.' },
      { q: 'Ý tưởng cốt lõi của regularization là gì?', options: ['Tăng learning rate để huấn luyện nhanh hơn', 'Xóa bớt tập test', 'Cho mô hình học thuộc toàn bộ dữ liệu', 'Phạt mô hình khi nó quá phức tạp để giữ nó đơn giản hơn'], answer: 3, explain: 'Regularization thêm "tiền phạt" cho sự phức tạp, buộc mô hình vừa có loss nhỏ vừa đơn giản, nhờ đó tổng quát hóa tốt hơn.' },
      { q: 'Mô hình dự đoán giá nhà cho kết quả sai nhiều trên cả tập huấn luyện lẫn tập kiểm định. Cách xử lý nào hợp lý nhất?', options: ['Thử mô hình phức tạp hơn hoặc thêm feature hữu ích', 'Tăng regularization thật mạnh', 'Dừng huấn luyện sớm hơn nữa', 'Bỏ bớt feature'], answer: 0, explain: 'Sai cả trên tập huấn luyện là dấu hiệu underfitting: mô hình quá đơn giản. Cần tăng khả năng học, không phải làm nó đơn giản thêm.' }
    ],
    resources: [
      { title: 'Google ML Crash Course - Datasets, generalization, and overfitting', url: 'https://developers.google.com/machine-learning/crash-course/overfitting', note: 'Tiếng Anh, miễn phí, có phần L2 regularization và early stopping' },
      { title: 'Machine Learning cơ bản - Bài 15: Overfitting', url: 'https://machinelearningcoban.com/2017/03/04/overfitting/', note: 'Tiếng Việt, miễn phí, có validation, cross-validation và regularization' },
      { title: 'scikit-learn - Cross-validation', url: 'https://scikit-learn.org/stable/modules/cross_validation.html', note: 'Tài liệu chính thức, tiếng Anh, cách đánh giá mô hình trên dữ liệu chưa thấy' },
      { title: 'Kaggle Learn - Intro to Machine Learning', url: 'https://www.kaggle.com/learn/intro-to-machine-learning', note: 'Tiếng Anh, miễn phí, thực hành trên notebook, có bài Underfitting and Overfitting' }
    ],
    video: { id: 'EuBBz3bI-aA', title: 'Machine Learning Fundamentals: Bias and Variance', channel: 'StatQuest with Josh Starmer', lang: 'en', minutes: 7 },
    updated: '2026-09'
  }
};

export default lessons;
