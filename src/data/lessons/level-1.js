const lessons = {

  // ================================================================
  // t1-b1: AI là gì và không là gì
  // ================================================================
  't1-b1': {
    duration: 12,
    summary: 'Vì sao rất khó định nghĩa AI, hai đặc điểm cốt lõi là tự chủ và thích nghi, và AI khác gì một chương trình máy tính thông thường.',
    goals: [
      'Giải thích được vì sao "trí tuệ nhân tạo" là một khái niệm khó định nghĩa',
      'Nhận ra hai đặc điểm cốt lõi của hệ thống AI: tính tự chủ và tính thích nghi',
      'Phân biệt được đâu là AI, đâu chỉ là phần mềm thông thường',
      'Biết sơ lược các cuộc tranh luận triết học: phép thử Turing và căn phòng tiếng Trung'
    ],
    blocks: [
      { type: 'h', text: 'Vì sao định nghĩa AI lại khó đến vậy?' },
      { type: 'p', text: 'Trí tuệ nhân tạo (Artificial Intelligence, viết tắt là <strong>AI</strong>) xuất hiện khắp nơi: trên báo, trong quảng cáo điện thoại, trong các buổi hội thảo. Nhưng nếu bạn hỏi mười người "AI là gì?", bạn có thể nhận được mười câu trả lời khác nhau. Điều này không phải vì mọi người thiếu hiểu biết, mà vì bản thân khái niệm này thật sự khó nắm bắt.' },
      { type: 'p', text: 'Khóa học <em>Elements of AI</em> của Đại học Helsinki chỉ ra ba lý do chính:' },
      { type: 'list', ordered: true, items: [
        '<strong>Không có định nghĩa chính thức được mọi người đồng ý.</strong> Ngay cả các nhà nghiên cứu AI cũng không thống nhất một câu định nghĩa duy nhất. Chính chữ "trí tuệ" (intelligence) ở người cũng đã khó định nghĩa rồi.',
        '<strong>"Hiệu ứng AI" (AI effect): ranh giới luôn dịch chuyển.</strong> Khi một bài toán từng được coi là "thông minh" đã được giải xong, người ta thôi gọi nó là AI. Máy tính chơi cờ, nhận dạng chữ viết tay, tìm đường ngắn nhất trên bản đồ từng là đỉnh cao AI; ngày nay nhiều người chỉ coi đó là "phần mềm bình thường".',
        '<strong>Khoa học viễn tưởng làm nhiễu hình dung.</strong> Phim ảnh khiến ta nghĩ AI phải là robot biết nói, có cảm xúc, thậm chí muốn thống trị thế giới. Thực tế, phần lớn AI hôm nay là những phần mềm lặng lẽ chạy phía sau ứng dụng bạn dùng hằng ngày.'
      ] },
      { type: 'callout', tone: 'note', title: 'AI là một "từ va li"', text: 'Nhà khoa học Marvin Minsky gọi những từ như "trí tuệ" là <em>từ va li</em> (suitcase word): một từ chứa bên trong rất nhiều ý nghĩa khác nhau. "AI" cũng vậy: nó có thể chỉ một lĩnh vực nghiên cứu, một kỹ thuật, hay một sản phẩm cụ thể. Khi nghe ai đó nói "AI", hãy hỏi lại: "Cụ thể là hệ thống nào, làm việc gì?"' },

      { type: 'h', text: 'Hai đặc điểm cốt lõi: tự chủ và thích nghi' },
      { type: 'p', text: 'Thay vì cố tìm một định nghĩa hoàn hảo, Elements of AI đề xuất nhìn vào hai tính chất mà các hệ thống AI thường có:' },
      { type: 'table', head: ['Đặc điểm', 'Ý nghĩa', 'Ví dụ'], rows: [
        ['<strong>Tính tự chủ</strong> (autonomy)', 'Có khả năng thực hiện nhiệm vụ trong môi trường phức tạp mà không cần con người chỉ dẫn từng bước.', 'Robot hút bụi tự tìm đường quanh bàn ghế; xe tự lái tự quyết định giảm tốc khi có người qua đường.'],
        ['<strong>Tính thích nghi</strong> (adaptivity)', 'Có khả năng cải thiện hiệu quả bằng cách học từ kinh nghiệm, tức là từ dữ liệu.', 'Bộ lọc thư rác ngày càng lọc chuẩn hơn khi bạn bấm "Báo cáo spam"; bàn phím điện thoại đoán từ ngày càng sát cách bạn gõ.']
      ] },
      { type: 'p', text: 'Từ năm 2025, các <strong>tác tử AI</strong> (AI agent) được các hãng lớn đưa ra rộng rãi đã đẩy tính tự chủ lên một nấc mới: bạn giao một mục tiêu, hệ thống tự lướt web, điền biểu mẫu, viết và chạy code qua nhiều bước. Dù vậy, chúng vẫn cần con người đặt mục tiêu, cấp quyền và kiểm tra kết quả.' },
      { type: 'p', text: 'Không phải hệ thống AI nào cũng có đủ cả hai ở mức cao. Nhưng nếu một phần mềm <em>không tự chủ chút nào</em> và <em>không bao giờ thay đổi theo dữ liệu</em>, khả năng cao đó chỉ là phần mềm thông thường.' },
      { type: 'analogy', text: 'Hãy tưởng tượng hai người phụ bếp. Người thứ nhất chỉ làm đúng từng bước trong công thức giấy dán trên tường; thiếu một nguyên liệu là đứng im. Người thứ hai được giao "nấu bữa tối cho 4 người", tự xoay xở với những gì có trong tủ lạnh (tự chủ), và sau vài tuần đã biết nhà bạn thích ăn nhạt hơn (thích nghi). Phần mềm thông thường giống người thứ nhất; hệ thống AI hướng tới người thứ hai.' },

      { type: 'h', text: 'Cái gì KHÔNG phải là AI?' },
      { type: 'p', text: 'Một cách hiểu AI tốt là biết những gì nằm ngoài nó. Vài ví dụ thường bị gọi nhầm là AI:' },
      { type: 'list', items: [
        '<strong>Máy tính bỏ túi:</strong> tính toán cực nhanh nhưng chỉ làm đúng phép tính được lập trình sẵn, không tự chủ, không học.',
        '<strong>Bảng tính Excel với công thức cố định:</strong> luôn cho cùng một kết quả với cùng một dữ liệu đầu vào, không cải thiện theo thời gian.',
        '<strong>Chuông cửa hẹn giờ, điều hòa bật theo lịch:</strong> đây là tự động hóa (automation) theo luật cứng "nếu... thì...", chưa phải AI.',
        '<strong>Một trang web chỉ hiển thị danh sách sản phẩm theo giá:</strong> sắp xếp là thuật toán đơn giản, không phải trí tuệ.'
      ] },
      { type: 'example', title: 'So sánh: Shopee sắp xếp theo giá và Shopee gợi ý "Có thể bạn cũng thích"', text: 'Khi bạn bấm "Sắp xếp theo giá thấp đến cao", Shopee chỉ chạy một thuật toán sắp xếp. Ai bấm cũng nhận kết quả như nhau. Còn mục "Gợi ý hôm nay" thì khác: hệ thống học từ lịch sử xem, tìm kiếm, mua hàng của hàng triệu người để đoán món bạn có thể quan tâm, và gợi ý thay đổi theo hành vi của bạn. Cái thứ hai mang tính thích nghi, nên được coi là một ứng dụng AI.' },
      { type: 'callout', tone: 'warn', title: 'Lầm tưởng: "Có chữ AI trên hộp là thông minh"', text: 'Nhiều sản phẩm gắn nhãn "AI" chỉ để quảng cáo (gọi là <em>AI washing</em>). Nồi cơm "AI", máy giặt "AI" có thể chỉ là cảm biến cộng vài luật điều khiển. Điều đó không xấu, nhưng đừng mặc định mọi thứ mang nhãn AI đều biết học hay biết suy nghĩ.' },
      { type: 'p', text: 'Một lưu ý nhỏ về cách dùng từ: Elements of AI khuyên nên coi AI là một <em>lĩnh vực</em> giống như "toán học" hay "sinh học", thay vì gọi mỗi chương trình là "một con AI". Nói "hệ thống này dùng kỹ thuật AI" sẽ chính xác hơn.' },

      { type: 'h', text: 'AI nằm ở đâu giữa các ngành khoa học?' },
      { type: 'p', text: 'AI có quan hệ chặt chẽ với nhiều lĩnh vực khác. Bạn sẽ gặp những từ này suốt khóa học:' },
      { type: 'list', items: [
        '<strong>Khoa học máy tính (computer science):</strong> AI là một nhánh của khoa học máy tính.',
        '<strong>Học máy (machine learning):</strong> một nhánh con của AI, giúp máy cải thiện nhờ dữ liệu. Đây chính là nguồn gốc của "tính thích nghi".',
        '<strong>Học sâu (deep learning):</strong> một nhánh con của học máy, dùng mạng nơ-ron nhiều lớp. Bài 3 sẽ nói kỹ.',
        '<strong>Khoa học dữ liệu (data science):</strong> dùng thống kê, học máy và kiến thức chuyên ngành để rút ra hiểu biết từ dữ liệu. Giao thoa nhiều với AI nhưng không trùng hoàn toàn.',
        '<strong>Người máy học (robotics):</strong> chế tạo máy hoạt động trong thế giới thật. Robot thường cần AI để nhìn, định hướng và ra quyết định, nhưng không phải robot nào cũng có AI.'
      ] },

      { type: 'h', text: 'Máy có thật sự "nghĩ" không? Hai thí nghiệm tư duy nổi tiếng' },
      { type: 'p', text: 'Năm 1950, nhà toán học Anh <strong>Alan Turing</strong> đề xuất bỏ qua câu hỏi khó "máy có biết nghĩ không" và thay bằng một phép thử cụ thể, gọi là <strong>trò chơi bắt chước</strong>, sau này được gọi là <strong>phép thử Turing</strong> (Turing test). Một người giám khảo trò chuyện bằng chữ với hai bên giấu mặt: một người thật và một máy. Nếu giám khảo không phân biệt được đâu là máy, ta có thể coi máy đã thể hiện hành vi thông minh.' },
      { type: 'p', text: 'Năm 1980, nhà triết học <strong>John Searle</strong> phản bác bằng thí nghiệm <strong>căn phòng tiếng Trung</strong> (Chinese room). Hãy tưởng tượng một người không biết một chữ tiếng Trung ngồi trong phòng kín, có một cuốn sách hướng dẫn cực kỳ chi tiết: "nếu nhận được chuỗi ký hiệu này, hãy trả ra chuỗi ký hiệu kia". Người bên ngoài gửi câu hỏi tiếng Trung vào và nhận câu trả lời trôi chảy. Nhìn từ ngoài, căn phòng "hiểu" tiếng Trung. Nhưng người bên trong chẳng hiểu gì cả, chỉ làm theo quy tắc.' },
      { type: 'p', text: 'Searle muốn nói: <em>hành xử như thể thông minh</em> chưa chắc đã là <em>thật sự hiểu</em>. Cuộc tranh luận này càng sôi nổi hơn khi các chatbot như ChatGPT, Gemini hay Claude trò chuyện ngày càng tự nhiên; bách khoa triết học Stanford cũng đã bổ sung phần bàn về mô hình ngôn ngữ lớn vào mục từ này. Người ta phân biệt <strong>AI yếu</strong> (weak AI: máy hành xử thông minh) và <strong>AI mạnh</strong> (strong AI: máy thật sự có trí óc, có ý thức). Mọi hệ thống AI hiện nay, dù ấn tượng đến đâu, đều chưa có bằng chứng khoa học nào cho thấy chúng có ý thức.' },
      { type: 'callout', tone: 'tip', title: 'Góc nhìn thực dụng', text: 'Với người dùng và người làm sản phẩm, câu hỏi hữu ích hơn thường là: "Hệ thống này làm tốt nhiệm vụ gì, sai ở đâu, và tôi kiểm tra kết quả bằng cách nào?" Hãy để câu hỏi "máy có hiểu thật không" cho các buổi cà phê triết học.' }
    ],
    keyPoints: [
      'AI không có một định nghĩa duy nhất được mọi người đồng ý; ranh giới của nó luôn dịch chuyển theo thời gian (hiệu ứng AI).',
      'Hai đặc điểm cốt lõi của hệ thống AI: tự chủ (làm việc không cần chỉ dẫn từng bước) và thích nghi (học từ dữ liệu, kinh nghiệm).',
      'Tự động hóa theo luật cứng, máy tính bỏ túi hay thuật toán sắp xếp đơn giản thường không được coi là AI.',
      'Phép thử Turing đo hành vi bên ngoài; căn phòng tiếng Trung đặt câu hỏi: hành xử thông minh có đồng nghĩa với thật sự hiểu không?'
    ],
    quiz: [
      {
        q: 'Theo Elements of AI, hai đặc điểm cốt lõi thường thấy ở hệ thống AI là gì?',
        options: ['Tốc độ tính toán và dung lượng bộ nhớ', 'Có hình dáng robot và biết nói', 'Tính tự chủ và tính thích nghi', 'Kết nối Internet và giao diện đẹp'],
        answer: 2,
        explain: 'Tự chủ là làm được việc trong môi trường phức tạp mà không cần chỉ dẫn liên tục; thích nghi là cải thiện nhờ học từ kinh nghiệm. Tốc độ hay hình dáng robot không phải điều kiện của AI.'
      },
      {
        q: 'Ví dụ nào dưới đây ít có khả năng được coi là AI nhất?',
        options: ['Máy tính bỏ túi thực hiện phép nhân', 'Bộ lọc thư rác học từ các lần bạn bấm "Báo cáo spam"', 'Face ID nhận ra khuôn mặt bạn trong nhiều điều kiện ánh sáng', 'Google Dịch dịch một đoạn văn từ tiếng Anh sang tiếng Việt'],
        answer: 0,
        explain: 'Máy tính bỏ túi chỉ làm đúng phép tính đã lập trình sẵn, không tự chủ, không học. Ba ví dụ còn lại đều dựa trên mô hình học từ dữ liệu.'
      },
      {
        q: 'Thí nghiệm "căn phòng tiếng Trung" của John Searle muốn chỉ ra điều gì?',
        options: ['Máy tính không bao giờ có thể dịch tiếng Trung', 'Hành xử như thể hiểu biết chưa chắc đã là thật sự hiểu', 'Phép thử Turing là cách duy nhất để đo trí tuệ', 'Tiếng Trung là ngôn ngữ khó nhất cho AI'],
        answer: 1,
        explain: 'Người trong phòng trả lời trôi chảy chỉ nhờ làm theo quy tắc, dù không hiểu gì. Searle dùng nó để phản bác ý tưởng rằng qua được phép thử hành vi là đủ để coi máy "hiểu".'
      }
    ],
    resources: [
      { title: 'Elements of AI, Chương 1: What is AI?', url: 'https://course.elementsofai.com/1', note: 'Tiếng Anh, miễn phí, của Đại học Helsinki' },
      { title: 'The Chinese Room Argument (Stanford Encyclopedia of Philosophy)', url: 'https://plato.stanford.edu/entries/chinese-room/', note: 'Tiếng Anh, bài viết học thuật chuyên sâu' },
      { title: 'Alan Turing (1950), Computing Machinery and Intelligence', url: 'https://academic.oup.com/mind/article/LIX/236/433/986238', note: 'Tiếng Anh, bài báo gốc về phép thử Turing' },
      { title: 'What is artificial intelligence? (IBM Think)', url: 'https://www.ibm.com/think/topics/artificial-intelligence', note: 'Tiếng Anh, miễn phí; tổng quan cập nhật gồm cả AI tạo sinh và tác tử AI' }
    ],
    video: { id: 'a0_lo_GDcFw', title: 'What Is Artificial Intelligence? Crash Course AI #1', channel: 'CrashCourse', lang: 'en', minutes: 12 },
    updated: '2026-09'
  },

  // ================================================================
  // t1-b2: Lịch sử ngắn của AI
  // ================================================================
  't1-b2': {
    duration: 16,
    summary: 'Hơn 70 năm của AI: từ Turing, Dartmouth, các mùa đông AI, đến học sâu, ChatGPT, mô hình suy luận, tác tử AI và những đạo luật AI đầu tiên.',
    goals: [
      'Nắm được các cột mốc chính của AI từ năm 1950 đến nay',
      'Hiểu vì sao AI từng trải qua những "mùa đông" và bài học rút ra',
      'Giải thích được vì sao AI bùng nổ mạnh từ khoảng năm 2012',
      'Đặt ChatGPT, mô hình suy luận và tác tử AI vào đúng bối cảnh lịch sử',
      'Biết các mốc chính của Đạo luật AI châu Âu và Luật Trí tuệ nhân tạo của Việt Nam'
    ],
    blocks: [
      { type: 'h', text: 'Khởi đầu: câu hỏi của Turing và mùa hè ở Dartmouth' },
      { type: 'p', text: 'Năm <strong>1950</strong>, Alan Turing công bố bài báo "Computing Machinery and Intelligence", mở đầu bằng câu hỏi: "Máy có thể suy nghĩ không?" Ông đề xuất trò chơi bắt chước (phép thử Turing) mà ta đã gặp ở bài trước. Đây được coi là một trong những viên gạch đầu tiên của lĩnh vực AI, dù khi đó máy tính còn to bằng cả căn phòng.' },
      { type: 'p', text: 'Mùa hè năm <strong>1956</strong>, một nhóm nhà khoa học gồm John McCarthy, Marvin Minsky, Claude Shannon và Nathaniel Rochester tổ chức một hội thảo tại Đại học <strong>Dartmouth</strong> (Mỹ). Thuật ngữ <em>"artificial intelligence"</em> được McCarthy dùng trong bản đề xuất cho hội thảo này. Họ tin rằng mọi khía cạnh của học tập và trí tuệ, về nguyên tắc, có thể được mô tả chính xác đến mức một cỗ máy có thể mô phỏng. Hội nghị Dartmouth thường được coi là thời điểm "khai sinh" chính thức của ngành AI.' },
      { type: 'p', text: 'Những năm sau đó là thời kỳ lạc quan. Máy tính giải được bài toán đại số, chứng minh định lý hình học, chơi cờ đam. Năm 1958, Frank Rosenblatt giới thiệu <strong>perceptron</strong>, một mô hình nơ-ron nhân tạo đơn giản, tổ tiên xa của học sâu ngày nay. Nhiều nhà nghiên cứu dự đoán máy sẽ sớm thông minh như người chỉ trong vài chục năm.' },

      { type: 'h', text: 'Những mùa đông AI và thời của hệ chuyên gia' },
      { type: 'p', text: 'Lời hứa quá lớn, kết quả lại chậm. Máy tính thời đó yếu, dữ liệu ít, và nhiều bài toán hóa ra khó hơn tưởng tượng rất nhiều: hiểu ngôn ngữ, nhìn và nhận ra đồ vật, xử lý các tình huống thường ngày. Đến giữa thập niên 1970, các chính phủ và nhà tài trợ thất vọng, cắt giảm mạnh ngân sách. Ở Anh, báo cáo Lighthill (1973) chỉ trích nặng nề nghiên cứu AI. Giai đoạn này được gọi là <strong>mùa đông AI</strong> (AI winter) đầu tiên.' },
      { type: 'p', text: 'Thập niên 1980, AI hồi sinh nhờ <strong>hệ chuyên gia</strong> (expert systems). Ý tưởng: phỏng vấn các chuyên gia (bác sĩ, kỹ sư) rồi viết kiến thức của họ thành hàng nghìn luật "nếu... thì...". Một ví dụ nổi tiếng là hệ thống XCON giúp công ty DEC cấu hình máy tính cho khách hàng. Nhiều doanh nghiệp đổ tiền vào hệ chuyên gia.' },
      { type: 'p', text: 'Nhưng hệ chuyên gia đắt để xây, khó bảo trì, và "giòn": gặp tình huống ngoài luật là bó tay. Cuối thập niên 1980 đến đầu 1990, thị trường sụp đổ, kéo theo <strong>mùa đông AI thứ hai</strong>.' },
      { type: 'analogy', text: 'Hệ chuyên gia giống như cố dạy một người nấu ăn bằng cách đưa cho họ một cuốn sổ ghi mọi tình huống có thể xảy ra trong bếp. Sổ càng dày càng khó tra, và kiểu gì cũng có ngày gặp tình huống chưa ghi. Học máy thì khác: cho người đó nếm và nấu thật nhiều món, để họ tự rút ra quy luật.' },
      { type: 'callout', tone: 'note', title: 'Bài học từ các mùa đông', text: 'Cả hai lần, nguyên nhân chung là <em>kỳ vọng vượt xa khả năng thực tế</em>. Khi đọc các tin tức "AI sẽ thay thế mọi thứ trong năm tới", hãy nhớ lịch sử này để giữ một cái đầu tỉnh táo.' },

      { type: 'h', text: 'Chuyển sang học từ dữ liệu: Deep Blue, ImageNet và AlphaGo' },
      { type: 'p', text: 'Từ thập niên 1990, AI dần chuyển hướng: thay vì viết tay mọi luật, người ta để máy <strong>học từ dữ liệu</strong> bằng các phương pháp thống kê. Đây là thời kỳ học máy (machine learning) lớn mạnh.' },
      { type: 'steps', items: [
        { title: '1997: Deep Blue thắng Kasparov', text: 'Máy tính Deep Blue của IBM thắng nhà vô địch cờ vua thế giới Garry Kasparov trong một trận đấu nhiều ván. Deep Blue chủ yếu dựa vào sức mạnh tính toán khổng lồ để duyệt rất nhiều nước đi, cộng với kiến thức cờ do chuyên gia đưa vào, chứ không "học" theo nghĩa hiện đại.' },
        { title: '2012: ImageNet và AlexNet', text: 'ImageNet là một bộ dữ liệu khổng lồ gồm hàng triệu ảnh đã được gán nhãn, kèm một cuộc thi nhận dạng ảnh hằng năm. Năm 2012, mạng nơ-ron sâu AlexNet (của Alex Krizhevsky, Ilya Sutskever và Geoffrey Hinton) thắng cuộc thi với cách biệt lớn so với các phương pháp cũ. Sự kiện này châm ngòi cho làn sóng <strong>học sâu</strong> (deep learning).' },
        { title: '2016: AlphaGo thắng Lee Sedol', text: 'AlphaGo của DeepMind thắng kỳ thủ cờ vây hàng đầu Lee Sedol với tỉ số 4-1 tại Seoul. Cờ vây có số thế cờ lớn hơn cờ vua rất nhiều, nên không thể dùng cách "duyệt hết" như Deep Blue. AlphaGo kết hợp mạng nơ-ron học từ các ván cờ với kỹ thuật tự chơi với chính mình để cải thiện.' },
        { title: '2017: Kiến trúc Transformer', text: 'Nhóm nghiên cứu của Google công bố bài báo "Attention Is All You Need", giới thiệu kiến trúc <strong>Transformer</strong>. Kiến trúc này xử lý văn bản hiệu quả hơn hẳn và dễ mở rộng quy mô, trở thành nền tảng cho gần như mọi mô hình ngôn ngữ lớn sau này, trong đó có dòng GPT.' },
        { title: 'Cuối 2022: ChatGPT ra mắt', text: 'Ngày 30/11/2022, OpenAI phát hành ChatGPT. Lần đầu tiên, hàng trăm triệu người bình thường có thể trò chuyện trực tiếp với một mô hình ngôn ngữ lớn. ChatGPT trở thành một trong những ứng dụng tiêu dùng có tốc độ tăng người dùng nhanh nhất lịch sử, mở ra làn sóng <strong>AI tạo sinh</strong> (generative AI).' }
      ] },

      { type: 'h', text: 'Vì sao AI bùng nổ vào đúng lúc này?' },
      { type: 'p', text: 'Nhiều ý tưởng cốt lõi của học sâu đã có từ vài chục năm trước. Vậy tại sao đến khoảng năm 2012 chúng mới thật sự tỏa sáng? Có ba yếu tố gặp nhau:' },
      { type: 'list', items: [
        '<strong>Dữ liệu:</strong> Internet, điện thoại thông minh và mạng xã hội tạo ra lượng ảnh, văn bản, video khổng lồ để máy học.',
        '<strong>Sức mạnh tính toán:</strong> chip đồ họa (GPU), vốn làm ra để chơi game, hóa ra rất hợp để huấn luyện mạng nơ-ron. Điện toán đám mây giúp thuê máy mạnh dễ dàng hơn.',
        '<strong>Thuật toán tốt hơn:</strong> các cải tiến về cách huấn luyện mạng nơ-ron sâu, rồi đến Transformer, giúp tận dụng dữ liệu và phần cứng hiệu quả hơn.'
      ] },
      { type: 'example', title: 'Google Dịch: một câu chuyện nhỏ của cả lịch sử', text: 'Nếu bạn dùng Google Dịch từ đầu thập niên 2010, bạn có thể nhớ những câu dịch "ngô nghê" từng chữ. Khi đó hệ thống dựa trên thống kê theo cụm từ. Khoảng năm 2016, Google chuyển sang dịch máy bằng mạng nơ-ron, và câu dịch trở nên trôi chảy hơn rõ rệt. Cùng một sản phẩm, nhưng phản ánh đúng bước chuyển của cả ngành: từ luật và thống kê đơn giản sang học sâu.' },

      { type: 'h', text: 'Từ 2023 đến nay: mô hình lớn, suy luận, tác tử và luật AI' },
      { type: 'p', text: 'Sau ChatGPT, cuộc đua AI tăng tốc mạnh. Nhiều công ty liên tục ra mắt các thế hệ mô hình ngôn ngữ lớn cạnh tranh, như GPT của OpenAI, Gemini của Google, Claude của Anthropic, Llama của Meta, DeepSeek và nhiều mô hình mở khác. Các mô hình ngày càng <strong>đa phương thức</strong> (multimodal): không chỉ đọc chữ mà còn hiểu hình ảnh, âm thanh, video.' },
      { type: 'steps', items: [
        { title: '3/2023: GPT-4', text: 'OpenAI ra mắt GPT-4 (14/3/2023), mô hình nhận được cả ảnh lẫn chữ làm đầu vào. Từ đây, các hãng lớn cạnh tranh sát sao với những thế hệ mô hình mới ra đời chỉ sau vài tháng.' },
        { title: '9/2024: Mô hình suy luận (reasoning model)', text: 'OpenAI giới thiệu o1 (12/9/2024), mô hình dành thời gian "suy nghĩ" bằng một chuỗi lập luận nội bộ trước khi trả lời, nhờ đó giỏi hơn hẳn ở toán, khoa học và lập trình. Ý tưởng mới ở đây là: bỏ thêm sức tính toán <em>lúc trả lời</em> cũng giúp mô hình thông minh hơn, chứ không chỉ lúc huấn luyện.' },
        { title: '1/2025: DeepSeek-R1 và tác tử AI', text: 'Công ty Trung Quốc DeepSeek phát hành DeepSeek-R1 (20/1/2025), một mô hình suy luận công khai trọng số (open-weight), được cho là huấn luyện với chi phí thấp hơn nhiều so với đối thủ, gây chú ý lớn trong giới công nghệ. Ba ngày sau, OpenAI ra mắt Operator, một <strong>tác tử AI</strong> tự thao tác trên trình duyệt để làm việc thay người dùng. Từ đó, tác tử AI trở thành hướng phát triển chính của cả ngành.' },
        { title: '7/2025: Đạt chuẩn huy chương vàng Olympic Toán', text: 'Các hệ thống AI lần đầu đạt thành tích tương đương huy chương vàng với đề thi Olympic Toán quốc tế (IMO), minh chứng rõ cho bước tiến của mô hình suy luận.' },
        { title: '8/2025 đến nay: suy luận thành tiêu chuẩn', text: 'OpenAI ra mắt GPT-5 (7/8/2025). Chế độ suy luận và khả năng làm việc như tác tử dần trở thành tính năng tiêu chuẩn trong các mô hình chủ lực của mọi hãng lớn, và các thế hệ mới tiếp tục ra mắt dồn dập trong năm 2026.' }
      ] },
      { type: 'p', text: 'AI cũng được ghi nhận ở cấp độ khoa học cao nhất: năm 2024, giải Nobel Vật lý trao cho John Hopfield và Geoffrey Hinton vì các nghiên cứu nền tảng về mạng nơ-ron; giải Nobel Hóa học có phần trao cho Demis Hassabis và John Jumper nhờ AlphaFold, hệ thống dự đoán cấu trúc protein.' },
      { type: 'p', text: 'Song song với công nghệ, <strong>luật chơi</strong> cũng hình thành. Hai văn bản bạn nên biết:' },
      { type: 'table', head: ['Mốc', 'Đạo luật AI của EU (EU AI Act)', 'Luật Trí tuệ nhân tạo của Việt Nam'], rows: [
        ['Thông qua / có hiệu lực', 'Có hiệu lực từ 1/8/2024, áp dụng theo từng giai đoạn', 'Quốc hội thông qua ngày 10/12/2025 (429/434 đại biểu tán thành), có hiệu lực từ 1/3/2026'],
        ['Các giai đoạn chính', '2/2/2025: cấm một số ứng dụng AI nguy hiểm, yêu cầu hiểu biết về AI; 2/8/2025: nghĩa vụ với mô hình AI đa dụng (như GPT, Gemini, Claude); 2/8/2026: phần lớn quy định còn lại, gồm nghĩa vụ minh bạch', 'Hệ thống đã triển khai trước ngày luật có hiệu lực có thời gian chuyển tiếp: 18 tháng với y tế, giáo dục, tài chính; 12 tháng với lĩnh vực khác'],
        ['Cách tiếp cận', 'Quản lý theo mức rủi ro. Gói sửa đổi "Digital Omnibus" (hiệu lực 27/7/2026) lùi yêu cầu với hệ thống rủi ro cao sang 2/12/2027 và 2/8/2028', 'Quản lý theo 3 mức rủi ro (cao, trung bình, thấp) cùng danh sách hành vi bị cấm, như dùng deepfake để lừa đảo; doanh nghiệp tự đánh giá thay vì xin phép trước']
      ] },
      { type: 'callout', tone: 'warn', title: 'Song song với cơ hội là những câu hỏi lớn', text: 'Tin giả, deepfake, bản quyền dữ liệu huấn luyện, tác động đến việc làm, tiêu thụ năng lượng và an toàn AI đang là chủ đề nóng. Các đạo luật trên là những nỗ lực đầu tiên, và chắc chắn sẽ còn được điều chỉnh khi công nghệ thay đổi. Chúng ta sẽ quay lại các vấn đề này ở những tầng sau.' }
    ],
    keyPoints: [
      'Turing (1950) đặt câu hỏi "máy có thể suy nghĩ không?"; hội nghị Dartmouth (1956) khai sinh ngành AI.',
      'AI từng trải qua hai "mùa đông" (giữa thập niên 1970 và cuối 1980 đến đầu 1990) do kỳ vọng vượt xa thực tế; hệ chuyên gia là làn sóng giữa hai mùa đông.',
      'Các cột mốc lớn: Deep Blue (1997), AlexNet thắng ImageNet (2012), AlphaGo (2016), Transformer (2017), ChatGPT (cuối 2022).',
      'AI bùng nổ nhờ ba yếu tố gặp nhau: dữ liệu lớn, sức mạnh tính toán (GPU) và thuật toán tốt hơn.',
      'Từ 2023: GPT-4 và cuộc đua mô hình lớn, mô hình suy luận (o1 năm 2024, DeepSeek-R1 năm 2025), tác tử AI; EU AI Act áp dụng dần từ 2025, Luật Trí tuệ nhân tạo của Việt Nam có hiệu lực từ 1/3/2026.'
    ],
    quiz: [
      {
        q: 'Sự kiện nào thường được coi là thời điểm "khai sinh" chính thức của ngành AI?',
        options: ['Deep Blue thắng Kasparov năm 1997', 'ChatGPT ra mắt năm 2022', 'Bài báo Transformer năm 2017', 'Hội thảo tại Đại học Dartmouth năm 1956'],
        answer: 3,
        explain: 'Hội thảo Dartmouth mùa hè 1956 quy tụ những người sáng lập ngành, và thuật ngữ "artificial intelligence" được dùng trong bản đề xuất cho hội thảo này.'
      },
      {
        q: 'Nguyên nhân chung của các "mùa đông AI" là gì?',
        options: ['Kỳ vọng và lời hứa vượt xa khả năng thực tế của công nghệ lúc đó', 'Chính phủ cấm nghiên cứu AI', 'Máy tính bị virus tấn công hàng loạt', 'Các nhà khoa học mất hứng thú với máy tính'],
        answer: 0,
        explain: 'Cả hai lần, kết quả không theo kịp những dự đoán lạc quan, khiến nhà tài trợ thất vọng và cắt giảm đầu tư.'
      },
      {
        q: 'Vì sao năm 2012 (AlexNet thắng cuộc thi ImageNet) là một bước ngoặt?',
        options: ['Đó là lần đầu tiên máy tính chơi cờ vua', 'Nó cho thấy mạng nơ-ron sâu vượt trội rõ rệt so với các phương pháp cũ, mở ra làn sóng học sâu', 'Đó là lúc ChatGPT được phát hành', 'Đó là năm thuật ngữ AI ra đời'],
        answer: 1,
        explain: 'AlexNet thắng với cách biệt lớn trong bài toán nhận dạng ảnh, thuyết phục giới nghiên cứu và doanh nghiệp đầu tư mạnh vào học sâu.'
      }
    ],
    resources: [
      { title: 'Stanford HAI: The 2026 AI Index Report', url: 'https://hai.stanford.edu/ai-index/2026-ai-index-report', note: 'Tiếng Anh, miễn phí; bức tranh toàn cảnh AI năm 2025 bằng số liệu' },
      { title: 'Việt Nam chính thức có Luật Trí tuệ nhân tạo (Báo Chính phủ)', url: 'https://baochinhphu.vn/viet-nam-chinh-thuc-co-luat-tri-tue-nhan-tao-ai-102251210164948585.htm', note: 'Tiếng Việt, tóm tắt các điểm chính của luật' },
      { title: 'EU AI Act: Implementation Timeline', url: 'https://artificialintelligenceact.eu/implementation-timeline/', note: 'Tiếng Anh, lộ trình áp dụng từng giai đoạn, đã cập nhật Digital Omnibus' },
      { title: 'Attention Is All You Need (bài báo Transformer, 2017)', url: 'https://arxiv.org/abs/1706.03762', note: 'Tiếng Anh, bài báo gốc, chỉ cần đọc phần tóm tắt' }
    ],
    video: { id: 'd95J8yzvjbQ', title: 'The Thinking Game | Full documentary | Tribeca Film Festival official selection', channel: 'Google DeepMind', lang: 'en', minutes: 84 },
    updated: '2026-09'
  },

  // ================================================================
  // t1-b3: AI, Machine Learning và Deep Learning
  // ================================================================
  't1-b3': {
    duration: 13,
    summary: 'Phân biệt AI, học máy và học sâu bằng hình ảnh những vòng tròn lồng nhau, cùng cách máy "học" từ ví dụ thay vì từ luật viết tay.',
    goals: [
      'Vẽ được mối quan hệ giữa AI, Machine Learning và Deep Learning',
      'Hiểu sự khác nhau giữa lập trình bằng luật và học từ dữ liệu',
      'Biết ba kiểu học máy cơ bản: có giám sát, không giám sát, tăng cường',
      'Hiểu mạng nơ-ron và AI tạo sinh nằm ở đâu trong bức tranh'
    ],
    blocks: [
      { type: 'h', text: 'Ba vòng tròn lồng nhau' },
      { type: 'p', text: 'Ba thuật ngữ <strong>AI</strong>, <strong>Machine Learning</strong> và <strong>Deep Learning</strong> thường bị dùng lẫn lộn. Cách dễ nhớ nhất là hình dung ba vòng tròn lồng vào nhau:' },
      { type: 'list', items: [
        '<strong>Trí tuệ nhân tạo (AI)</strong> là vòng ngoài cùng: toàn bộ lĩnh vực nghiên cứu làm cho máy thực hiện những việc đòi hỏi trí tuệ.',
        '<strong>Học máy (Machine Learning, ML)</strong> nằm bên trong AI: các phương pháp giúp máy <em>tự học quy luật từ dữ liệu</em> thay vì được lập trình từng luật.',
        '<strong>Học sâu (Deep Learning, DL)</strong> nằm bên trong học máy: một nhóm phương pháp học máy dùng <em>mạng nơ-ron nhân tạo nhiều lớp</em>.'
      ] },
      { type: 'p', text: 'Vậy mọi hệ thống học sâu đều là học máy, mọi hệ thống học máy đều là AI. Nhưng chiều ngược lại thì không: có những hệ thống AI không dùng học máy (ví dụ hệ chuyên gia viết bằng luật, hay chương trình tìm đường trên bản đồ), và có những phương pháp học máy không phải học sâu (ví dụ cây quyết định, hồi quy tuyến tính).' },
      { type: 'analogy', text: 'Hãy nghĩ tới "phương tiện giao thông", "ô tô" và "ô tô điện". Mọi ô tô điện đều là ô tô, mọi ô tô đều là phương tiện giao thông. Nhưng xe đạp là phương tiện giao thông mà không phải ô tô, và xe chạy xăng là ô tô mà không phải ô tô điện. AI, học máy và học sâu có quan hệ y như vậy.' },

      { type: 'h', text: 'Lập trình truyền thống và học máy khác nhau thế nào?' },
      { type: 'p', text: 'Trong <strong>lập trình truyền thống</strong>, con người tự viết luật: đưa dữ liệu và luật vào, máy cho ra kết quả. Trong <strong>học máy</strong>, ta làm ngược lại: đưa vào rất nhiều ví dụ gồm dữ liệu kèm đáp án đúng, máy tự tìm ra "luật" (gọi là <strong>mô hình</strong>, model). Sau đó mô hình được dùng để dự đoán cho dữ liệu mới.' },
      { type: 'table', head: ['', 'Lập trình truyền thống', 'Học máy'], rows: [
        ['Ai tạo ra luật?', 'Lập trình viên viết tay', 'Máy tự rút ra từ ví dụ'],
        ['Đầu vào', 'Dữ liệu + luật', 'Dữ liệu + đáp án mẫu'],
        ['Đầu ra', 'Kết quả', 'Một mô hình dùng để dự đoán'],
        ['Hợp với', 'Việc có luật rõ ràng: tính lương, tính thuế', 'Việc khó mô tả thành luật: nhận diện khuôn mặt, hiểu giọng nói']
      ] },
      { type: 'example', title: 'Lọc thư rác (spam): hai cách làm', text: 'Cách cũ: viết luật "nếu thư có chữ <em>trúng thưởng</em> hoặc <em>khuyến mãi 90%</em> thì là spam". Kẻ gửi spam chỉ cần viết "tr.ú.n.g th.ư.ở.n.g" là qua mặt. Cách học máy: đưa cho máy hàng triệu thư đã được người dùng đánh dấu "spam" hoặc "không spam". Máy tự phát hiện hàng nghìn dấu hiệu tinh vi (người gửi, cấu trúc, đường link, cách viết...) và tiếp tục cập nhật khi có thư mới bị báo cáo. Đó là lý do hộp thư Gmail của bạn ngày nay hiếm khi lọt spam.' },
      { type: 'p', text: 'Andrew Ng, trong khóa <em>AI for Everyone</em>, mô tả phần lớn giá trị của học máy hiện nay đến từ việc học một ánh xạ đơn giản <strong>từ A sang B</strong>: đầu vào A, đầu ra B. Ảnh khuôn mặt → có phải chủ máy không (Face ID). Email → spam hay không. Câu tiếng Anh → câu tiếng Việt (Google Dịch). Thông tin chuyến đi → giá cước và thời gian đến (Grab).' },

      { type: 'h', text: 'Ba kiểu học máy cơ bản' },
      { type: 'table', head: ['Kiểu học', 'Cách học', 'Ví dụ'], rows: [
        ['<strong>Học có giám sát</strong> (supervised learning)', 'Học từ ví dụ có sẵn đáp án (nhãn). Giống học sinh làm bài tập có đáp án ở cuối sách.', 'Phân loại spam, nhận dạng ảnh chó hay mèo, dự đoán giá nhà.'],
        ['<strong>Học không giám sát</strong> (unsupervised learning)', 'Dữ liệu không có đáp án; máy tự tìm cấu trúc, nhóm những thứ giống nhau.', 'Chia khách hàng của một cửa hàng thành các nhóm có thói quen mua sắm tương tự.'],
        ['<strong>Học tăng cường</strong> (reinforcement learning)', 'Học bằng cách thử và sai, nhận "thưởng" khi làm tốt, "phạt" khi làm sai.', 'AlphaGo tự chơi hàng triệu ván cờ; robot học cách đi.']
      ] },
      { type: 'callout', tone: 'tip', title: 'Mẹo ghi nhớ', text: 'Có giám sát = có thầy chấm bài. Không giám sát = tự xếp đồ vào ngăn. Tăng cường = huấn luyện thú cưng bằng phần thưởng.' },

      { type: 'h', text: 'Học sâu và mạng nơ-ron' },
      { type: 'p', text: '<strong>Mạng nơ-ron nhân tạo</strong> (artificial neural network) là một cấu trúc toán học lấy cảm hứng rất lỏng lẻo từ não người. Nó gồm nhiều lớp "nơ-ron" nối với nhau; mỗi kết nối có một con số (trọng số) quyết định tín hiệu mạnh hay yếu. Quá trình huấn luyện là điều chỉnh dần hàng triệu, thậm chí hàng tỷ con số này sao cho mạng trả lời đúng nhiều nhất có thể.' },
      { type: 'p', text: 'Chữ "sâu" (deep) trong học sâu chỉ việc mạng có <em>nhiều lớp</em>. Các lớp đầu học những đặc điểm đơn giản, các lớp sau ghép chúng lại thành khái niệm phức tạp. Với ảnh khuôn mặt, lớp đầu có thể nhận ra các cạnh và đường nét, lớp giữa nhận ra mắt, mũi, miệng, lớp cuối nhận ra cả khuôn mặt.' },
      { type: 'analogy', text: 'Hãy tưởng tượng một dây chuyền nhà máy nhiều công đoạn. Công đoạn đầu chỉ phân loại mảnh gỗ theo hình dạng, công đoạn giữa ráp thành chân ghế, mặt ghế, công đoạn cuối lắp thành chiếc ghế hoàn chỉnh. Mỗi lớp của mạng nơ-ron là một công đoạn, và điều kỳ diệu là không ai chỉ định trước từng công đoạn phải làm gì: mạng tự học cách phân công qua huấn luyện.' },
      { type: 'callout', tone: 'warn', title: 'Lầm tưởng: "Mạng nơ-ron là bộ não điện tử"', text: 'Mạng nơ-ron nhân tạo chỉ mượn ý tưởng từ não bộ, còn cách hoạt động thực tế khác rất xa. Nó là phép tính trên các con số, không có suy nghĩ hay cảm xúc.' },

      { type: 'h', text: 'Còn AI tạo sinh và ChatGPT nằm ở đâu?' },
      { type: 'p', text: '<strong>AI tạo sinh</strong> (generative AI) là nhóm mô hình học sâu có khả năng <em>tạo ra nội dung mới</em>: văn bản, hình ảnh, âm thanh, video, code. <strong>Mô hình ngôn ngữ lớn</strong> (Large Language Model, LLM) như mô hình đứng sau ChatGPT, Gemini hay Claude là một dạng AI tạo sinh chuyên về ngôn ngữ, được xây dựng trên kiến trúc Transformer và huấn luyện trên lượng văn bản khổng lồ.' },
      { type: 'p', text: 'Về cốt lõi, một LLM được huấn luyện để <strong>dự đoán từ tiếp theo</strong> trong một đoạn văn. Làm điều đó ở quy mô cực lớn, mô hình học được ngữ pháp, kiến thức phổ thông và cả cách lập luận ở mức nhất định. Sau đó, mô hình còn được tinh chỉnh thêm, trong đó có dùng <strong>học tăng cường</strong>. Các <strong>mô hình suy luận</strong> (reasoning model) xuất hiện từ năm 2024, như o1 của OpenAI hay DeepSeek-R1, được huấn luyện bằng học tăng cường để "nghĩ" từng bước trước khi trả lời. Nghĩa là cả ba kiểu học bạn vừa gặp đều góp mặt trong một chatbot hiện đại. Bạn sẽ tìm hiểu kỹ ở các tầng sau.' },
      { type: 'p', text: 'Tóm lại, nếu vẽ tiếp các vòng tròn: AI ⊃ Học máy ⊃ Học sâu ⊃ AI tạo sinh ⊃ Mô hình ngôn ngữ lớn.' }
    ],
    keyPoints: [
      'AI chứa học máy, học máy chứa học sâu: ba vòng tròn lồng nhau, không phải ba thứ ngang hàng.',
      'Lập trình truyền thống: người viết luật. Học máy: máy tự rút ra luật (mô hình) từ ví dụ.',
      'Ba kiểu học máy: có giám sát (có đáp án), không giám sát (tự tìm nhóm), tăng cường (thử sai và nhận thưởng).',
      'Học sâu dùng mạng nơ-ron nhiều lớp; AI tạo sinh và mô hình ngôn ngữ lớn như ChatGPT là một nhánh của học sâu.'
    ],
    quiz: [
      {
        q: 'Phát biểu nào về quan hệ giữa AI, học máy và học sâu là đúng?',
        options: ['Học máy chứa AI, AI chứa học sâu', 'Mọi hệ thống AI đều dùng học sâu', 'Học sâu là một phần của học máy, học máy là một phần của AI', 'Ba khái niệm này là một, chỉ khác tên gọi'],
        answer: 2,
        explain: 'Đây là quan hệ lồng nhau: AI ⊃ học máy ⊃ học sâu. Có hệ thống AI không dùng học máy, như hệ chuyên gia viết bằng luật.'
      },
      {
        q: 'Một cửa hàng muốn chia khách hàng thành các nhóm có thói quen mua sắm giống nhau, nhưng không có sẵn nhãn nhóm nào. Kiểu học máy nào phù hợp nhất?',
        options: ['Học tăng cường', 'Học không giám sát', 'Học có giám sát', 'Lập trình bằng luật cố định'],
        answer: 1,
        explain: 'Khi dữ liệu không có đáp án và mục tiêu là tìm ra các nhóm tự nhiên, ta dùng học không giám sát (ví dụ phân cụm).'
      },
      {
        q: 'Điểm khác biệt cốt lõi giữa học máy và lập trình truyền thống là gì?',
        options: ['Học máy tự rút ra quy luật từ ví dụ, thay vì con người viết tay từng luật', 'Học máy luôn chạy nhanh hơn', 'Học máy không cần dữ liệu', 'Lập trình truyền thống không dùng máy tính'],
        answer: 0,
        explain: 'Trong học máy, ta cung cấp dữ liệu kèm đáp án mẫu và máy tự tìm ra mô hình. Học máy thực ra rất cần dữ liệu, và không nhất thiết nhanh hơn.'
      }
    ],
    resources: [
      { title: 'AI for Everyone (Andrew Ng, DeepLearning.AI)', url: 'https://www.deeplearning.ai/courses/ai-for-everyone/', note: 'Tiếng Anh (có phụ đề), không cần kỹ thuật, có thể học miễn phí' },
      { title: '3Blue1Brown: Neural Networks', url: 'https://www.3blue1brown.com/topics/neural-networks', note: 'Tiếng Anh, video trực quan về mạng nơ-ron' },
      { title: 'Elements of AI, Chương 4: Machine learning', url: 'https://course.elementsofai.com/4', note: 'Tiếng Anh, miễn phí' },
      { title: 'Google Machine Learning Crash Course', url: 'https://developers.google.com/machine-learning/crash-course', note: 'Tiếng Anh, miễn phí; khi bạn muốn đi sâu hơn vào học máy' }
    ],
    video: { id: 'qYNweeDHiyU', title: 'AI, Machine Learning, Deep Learning and Generative AI Explained', channel: 'IBM Technology', lang: 'en', minutes: 10 },
    updated: '2026-09'
  },

  // ================================================================
  // t1-b4: AI hẹp, AI tổng quát và những lầm tưởng
  // ================================================================
  't1-b4': {
    duration: 15,
    summary: 'Phân biệt AI hẹp và AI tổng quát (AGI), hiểu AI hôm nay làm được gì và không làm được gì, và gỡ bỏ những lầm tưởng phổ biến.',
    goals: [
      'Phân biệt AI hẹp (ANI) và AI tổng quát (AGI)',
      'Biết một số cách ước lượng việc gì AI làm tốt, việc gì còn khó',
      'Nhận diện và phản biện được các lầm tưởng phổ biến về AI',
      'Nắm được các quan điểm chính trong tranh luận về AGI hiện nay',
      'Có thái độ cân bằng: không quá sợ hãi, không quá thần thánh hóa AI'
    ],
    blocks: [
      { type: 'h', text: 'AI hẹp và AI tổng quát' },
      { type: 'p', text: 'Andrew Ng, trong khóa <em>AI for Everyone</em>, nhấn mạnh rằng chữ "AI" thực ra đang chỉ hai ý tưởng rất khác nhau:' },
      { type: 'table', head: ['', 'AI hẹp (ANI)', 'AI tổng quát (AGI)'], rows: [
        ['Tên tiếng Anh', 'Artificial Narrow Intelligence', 'Artificial General Intelligence'],
        ['Là gì?', 'AI làm tốt một việc cụ thể hoặc một nhóm việc hẹp', 'AI có thể làm mọi việc trí tuệ mà con người làm được, và học được việc mới linh hoạt như người'],
        ['Hiện trạng', 'Đã có, rất nhiều, tạo ra phần lớn giá trị kinh tế của AI hiện nay', 'Chưa có sự đồng thuận rằng đã đạt được. Giới chuyên gia bất đồng cả về định nghĩa lẫn thời điểm, thậm chí về việc có đạt được hay không'],
        ['Ví dụ', 'Face ID, lọc spam, gợi ý video TikTok, tính giá cước Grab, loa thông minh', 'Các robot trong phim khoa học viễn tưởng']
      ] },
      { type: 'p', text: 'Andrew Ng chỉ ra một điểm quan trọng: những tiến bộ rất nhanh của AI hẹp khiến nhiều người lầm tưởng AI tổng quát cũng đang tiến nhanh tương tự. Thực tế, giỏi một việc hẹp không có nghĩa là gần với trí tuệ tổng quát.' },
      { type: 'callout', tone: 'note', title: 'Còn các chatbot như ChatGPT thì sao?', text: 'Các mô hình ngôn ngữ lớn làm được <em>rất nhiều việc khác nhau</em>: viết, dịch, tóm tắt, lập trình, giải thích. Vì vậy chúng tổng quát hơn nhiều so với AI hẹp truyền thống, và đang có tranh luận sôi nổi về việc chúng gần AGI đến đâu. Tuy vậy, chúng vẫn mắc lỗi cơ bản, trí nhớ dài hạn còn hạn chế, và không học liên tục từ trải nghiệm như con người. Hãy coi đây là một câu hỏi mở, và cẩn trọng với những lời khẳng định chắc nịch từ cả hai phía. Mục cuối bài sẽ tóm tắt cuộc tranh luận hiện nay.' },

      { type: 'h', text: 'AI hôm nay làm tốt những gì?' },
      { type: 'p', text: 'Không có quy tắc nào chính xác tuyệt đối, nhưng có một vài dấu hiệu cho thấy một bài toán hợp với AI (đặc biệt là học máy):' },
      { type: 'list', items: [
        '<strong>Là một ánh xạ A → B rõ ràng:</strong> đầu vào và đầu ra được xác định cụ thể (ảnh → có vết nứt hay không; đoạn ghi âm → văn bản).',
        '<strong>Có nhiều dữ liệu:</strong> càng nhiều ví dụ tốt, mô hình càng học tốt.',
        '<strong>Việc lặp đi lặp lại, cần tốc độ và quy mô:</strong> xét hàng triệu giao dịch thẻ để phát hiện gian lận, duyệt hàng tỷ bức ảnh.',
        '<strong>Chấp nhận được sai sót nhỏ</strong> hoặc có người kiểm tra lại.'
      ] },
      { type: 'p', text: 'Andrew Ng từng nêu một quy tắc kinh nghiệm (từ trước làn sóng AI tạo sinh): <em>những việc một người bình thường làm được với chưa tới một giây suy nghĩ</em>, như nhìn ảnh và nhận ra có xe hơi hay không, thì nhiều khả năng AI đã hoặc sẽ sớm tự động hóa được. Đây chỉ là gợi ý, không phải định luật, nhưng giúp bạn có trực giác ban đầu.' },

      { type: 'h', text: 'AI hôm nay còn gặp khó ở đâu?' },
      { type: 'list', items: [
        '<strong>Thiếu dữ liệu hoặc dữ liệu kém:</strong> dữ liệu sai, lệch, thiếu thì mô hình học sai. "Rác vào, rác ra" (garbage in, garbage out).',
        '<strong>Tình huống khác xa dữ liệu huấn luyện:</strong> một hệ thống nhận diện bệnh học từ ảnh chụp ở bệnh viện A có thể kém đi khi gặp máy chụp khác ở bệnh viện B.',
        '<strong>Hiểu biết thông thường và suy luận nhiều bước về thế giới thật:</strong> AI có thể làm tốt bài thi khó nhưng lại hớ ở những câu hỏi mẹo đơn giản.',
        '<strong>Trách nhiệm và phán xét giá trị:</strong> quyết định liên quan đến đạo đức, luật pháp, sinh mạng vẫn cần con người chịu trách nhiệm.',
        '<strong>Giải thích lý do:</strong> nhiều mô hình học sâu giống "hộp đen", khó giải thích vì sao ra kết quả đó.'
      ] },
      { type: 'example', title: 'Chatbot "bịa" một cách tự tin', text: 'Bạn hỏi chatbot: "Cho tôi 3 bài báo khoa học về nông nghiệp lúa ở Đồng bằng sông Cửu Long." Nó có thể trả về ba tiêu đề, tên tác giả, năm xuất bản nghe rất hợp lý, nhưng khi tra thì không tồn tại. Hiện tượng này gọi là <strong>ảo giác</strong> (hallucination). Nó xảy ra vì mô hình được huấn luyện để tạo ra văn bản nghe hợp lý, chứ không có cơ chế tự kiểm chứng sự thật. Luôn kiểm tra lại thông tin quan trọng.' },

      { type: 'h', text: 'Những lầm tưởng phổ biến về AI' },
      { type: 'callout', tone: 'warn', title: 'Lầm tưởng 1: "AI hiểu và có cảm xúc như người"', text: 'Chatbot có thể viết "Tôi rất vui được giúp bạn", nhưng đó là mẫu ngôn ngữ học được từ dữ liệu. Không có bằng chứng khoa học nào cho thấy các hệ thống AI hiện nay có ý thức hay cảm xúc.' },
      { type: 'callout', tone: 'warn', title: 'Lầm tưởng 2: "AI luôn khách quan vì nó là máy"', text: 'AI học từ dữ liệu do con người tạo ra, nên có thể mang theo thiên kiến (bias) trong dữ liệu. Ví dụ, một hệ thống sàng lọc hồ sơ xin việc học từ lịch sử tuyển dụng thiên lệch sẽ lặp lại chính thiên lệch đó.' },
      { type: 'callout', tone: 'warn', title: 'Lầm tưởng 3: "AI sẽ sớm thay thế hoàn toàn con người"', text: 'AI thường tự động hóa <em>từng nhiệm vụ</em> (task) chứ hiếm khi thay trọn <em>một công việc</em> (job), vì mỗi công việc gồm nhiều nhiệm vụ khác nhau. Nhiều nghề sẽ thay đổi, một số việc sẽ mất đi và việc mới xuất hiện. Người biết dùng AI tốt thường có lợi thế hơn người không dùng.' },
      { type: 'callout', tone: 'warn', title: 'Lầm tưởng 4: "AI là phép màu, chỉ dành cho chuyên gia"', text: 'Như bạn đã thấy ở bài 3, cốt lõi của phần lớn AI là học quy luật từ dữ liệu. Không cần là nhà toán học, bạn vẫn có thể hiểu và dùng AI hiệu quả. Đó chính là mục tiêu của khóa học này.' },
      { type: 'analogy', text: 'Hãy nghĩ về AI hiện nay như một thực tập sinh cực kỳ nhanh nhẹn, đã đọc rất nhiều sách, làm việc không biết mệt, nhưng đôi khi tự tin nói sai, thiếu kinh nghiệm thực tế và không chịu trách nhiệm thay bạn. Bạn sẽ giao việc cho thực tập sinh này, nhưng vẫn phải kiểm tra kết quả trước khi gửi cho sếp.' },

      { type: 'h', text: 'Tranh luận về AGI hiện nay (2025–2026)' },
      { type: 'p', text: 'Từ khi có mô hình suy luận và tác tử AI, câu hỏi "AGI bao giờ đến?" trở nên nóng hơn bao giờ hết. Điều quan trọng đầu tiên cần biết: mọi người <em>không dùng chung một định nghĩa</em>. Nhóm nghiên cứu Google DeepMind từng đề xuất chia AGI thành nhiều <strong>cấp độ</strong> theo độ giỏi, độ rộng và mức tự chủ, thay vì coi AGI là một vạch đích duy nhất. Nhiều bất đồng thực chất là bất đồng về định nghĩa.' },
      { type: 'table', head: ['Quan điểm', 'Lập luận chính'], rows: [
        ['<strong>Lạc quan về thời gian</strong>', 'Một số lãnh đạo các công ty AI hàng đầu (như OpenAI, Anthropic, Google DeepMind) cho rằng AI có năng lực ngang con người ở phần lớn công việc trí óc có thể xuất hiện trong vài năm đến một thập kỷ tới, dựa trên tốc độ tiến bộ rất nhanh ở toán, lập trình và tác tử.'],
        ['<strong>Hoài nghi</strong>', 'Nhiều nhà nghiên cứu, tiêu biểu là Yann LeCun, cho rằng mô hình ngôn ngữ lớn hiện nay thiếu những thứ cốt lõi như hiểu thế giới vật lý, lập kế hoạch dài hạn và trí nhớ bền vững, nên cần thêm những đột phá mới chứ không chỉ làm mô hình to hơn.'],
        ['<strong>Thận trọng, dựa trên bằng chứng</strong>', 'Báo cáo An toàn AI Quốc tế 2026 (do Yoshua Bengio chủ trì, hơn 100 chuyên gia từ hơn 30 quốc gia và tổ chức) kết luận: tiến bộ đến năm 2030 rất khó đoán; AI có thể chậm lại vì thiếu dữ liệu hay năng lượng, giữ nguyên tốc độ, hoặc tăng tốc nếu AI bắt đầu giúp nghiên cứu AI.']
      ] },
      { type: 'p', text: 'Bằng chứng hiện có cho thấy năng lực AI mang tính <strong>"răng cưa"</strong> (jagged): mô hình hàng đầu đạt chuẩn huy chương vàng Olympic Toán quốc tế và viết code giỏi, nhưng vẫn có thể đếm sai đồ vật trong ảnh, lúng túng khi suy luận về không gian, hay không tự sửa được lỗi nhỏ trong một chuỗi công việc dài. Báo cáo AI Index 2026 của Stanford đưa một ví dụ dễ nhớ: mô hình giành huy chương vàng Olympic Toán nhưng chỉ đọc đúng đồng hồ kim khoảng một nửa số lần.' },
      { type: 'callout', tone: 'tip', title: 'Cách nghe tin về AGI cho tỉnh táo', text: 'Khi đọc một tuyên bố "AGI đã đến" hay "AGI không bao giờ đến", hãy hỏi: (1) Người nói định nghĩa AGI là gì? (2) Họ dựa trên bằng chứng nào, hay chỉ là dự đoán? (3) Họ có lợi ích gì từ quan điểm đó? Với công việc hằng ngày, câu hỏi hữu ích hơn vẫn là: "AI làm tốt việc cụ thể này đến đâu, và tôi kiểm tra bằng cách nào?" (Video minh hoạ của bài là cuộc trò chuyện với Shane Legg, đồng sáng lập Google DeepMind, đại diện cho phía lạc quan; hãy đặt nó cạnh các lập luận hoài nghi ở trên.)' }
    ],
    keyPoints: [
      'AI hẹp (ANI) làm tốt từng việc cụ thể và đã có mặt khắp nơi; AGI chưa có định nghĩa thống nhất, và thời điểm xuất hiện còn gây tranh cãi giữa phe lạc quan và phe hoài nghi.',
      'Năng lực AI hiện nay mang tính "răng cưa": rất giỏi một số việc khó nhưng vẫn hỏng ở những việc tưởng như đơn giản.',
      'AI hợp với bài toán có đầu vào/đầu ra rõ ràng, nhiều dữ liệu, lặp lại ở quy mô lớn; còn gặp khó với dữ liệu kém, tình huống lạ, hiểu biết thông thường và trách nhiệm.',
      'Chatbot có thể "ảo giác": tạo ra thông tin nghe hợp lý nhưng sai. Luôn kiểm chứng thông tin quan trọng.',
      'AI không có cảm xúc, không tự động khách quan, và thường tự động hóa từng nhiệm vụ chứ hiếm khi thay trọn một nghề.'
    ],
    quiz: [
      {
        q: 'Ví dụ nào là AI hẹp (ANI)?',
        options: ['Một robot tự học mọi nghề như con người', 'Hệ thống gợi ý video trên TikTok', 'Một AI có ý thức và cảm xúc riêng', 'Không có ví dụ nào, AI hẹp chưa tồn tại'],
        answer: 1,
        explain: 'Hệ thống gợi ý video làm tốt một nhiệm vụ cụ thể, đúng nghĩa AI hẹp. AI tổng quát hay AI có ý thức vẫn chưa tồn tại.'
      },
      {
        q: 'Chatbot đưa ra tên một cuốn sách kèm tác giả nghe rất hợp lý, nhưng thực tế cuốn sách không tồn tại. Hiện tượng này gọi là gì?',
        options: ['Quá khớp (overfitting)', 'Học tăng cường', 'Mùa đông AI', 'Ảo giác (hallucination)'],
        answer: 3,
        explain: 'Ảo giác là khi mô hình tạo ra thông tin nghe hợp lý nhưng sai hoặc bịa đặt, vì nó được huấn luyện để tạo văn bản trôi chảy chứ không tự kiểm chứng sự thật.'
      },
      {
        q: 'Vì sao nói "AI luôn khách quan vì nó là máy" là một lầm tưởng?',
        options: ['Vì AI học từ dữ liệu do con người tạo ra và có thể mang theo thiên kiến trong dữ liệu đó', 'Vì máy tính hay bị hỏng', 'Vì AI cố ý lừa người dùng', 'Vì AI không dùng dữ liệu'],
        answer: 0,
        explain: 'Nếu dữ liệu huấn luyện phản ánh thiên lệch trong xã hội, mô hình có thể học và khuếch đại chính thiên lệch đó.'
      }
    ],
    resources: [
      { title: 'International AI Safety Report 2026', url: 'https://internationalaisafetyreport.org/publication/international-ai-safety-report-2026', note: 'Tiếng Anh (có bản dịch các ngôn ngữ LHQ), miễn phí; đánh giá năng lực và rủi ro AI bởi hơn 100 chuyên gia' },
      { title: 'Levels of AGI for Operationalizing Progress on the Path to AGI (Google DeepMind)', url: 'https://arxiv.org/abs/2311.02462', note: 'Tiếng Anh, bài báo đề xuất các cấp độ AGI' },
      { title: 'AI for Everyone (Coursera, Andrew Ng)', url: 'https://www.coursera.org/learn/ai-for-everyone', note: 'Tiếng Anh (có phụ đề), tuần 1 nói về ANI, AGI và giới hạn của AI' }
    ],
    video: { id: 'kMUdrUP-QCs', title: 'The Transformative Potential of AGI — and When It Might Arrive | Shane Legg and Chris Anderson | TED', channel: 'TED', lang: 'en', minutes: 16 },
    updated: '2026-09'
  },

  // ================================================================
  // t1-b5: AI quanh ta mỗi ngày
  // ================================================================
  't1-b5': {
    duration: 12,
    summary: 'Nhận ra AI trong một ngày của bạn: Face ID, Grab, Shopee, lọc spam, xác thực khuôn mặt khi chuyển khoản, trợ lý AI trên VNeID và chatbot.',
    goals: [
      'Nhận diện được các ứng dụng AI quen thuộc trong đời sống hằng ngày',
      'Hiểu sơ lược mỗi ứng dụng học từ dữ liệu gì và dự đoán điều gì',
      'Nhận thức được mặt trái: quyền riêng tư, bong bóng lọc, lừa đảo deepfake',
      'Tự phân tích một ứng dụng bất kỳ theo khung "đầu vào → đầu ra → dữ liệu"'
    ],
    blocks: [
      { type: 'h', text: 'Một ngày của bạn, qua lăng kính AI' },
      { type: 'p', text: 'Có thể bạn nghĩ mình chưa từng "dùng AI" cho tới khi thử ChatGPT. Thực ra, bạn đã sống cùng AI từ lâu. Hãy cùng đi qua một ngày bình thường:' },
      { type: 'steps', items: [
        { title: '6:30 Mở khóa điện thoại', text: 'Face ID hoặc mở khóa bằng khuôn mặt dùng mạng nơ-ron để so khuôn mặt bạn với dữ liệu đã đăng ký, kể cả khi bạn đội mũ, đeo kính hay đứng chỗ thiếu sáng.' },
        { title: '7:00 Lướt mạng xã hội', text: 'Facebook, TikTok, YouTube quyết định bài nào hiện lên đầu dựa trên dự đoán bạn sẽ xem, thích hay bình luận bài nào.' },
        { title: '7:30 Đặt xe đi làm', text: 'Grab ước tính thời gian đến, đề xuất giá cước, ghép tài xế gần nhất. Google Maps dự báo kẹt xe dựa trên dữ liệu di chuyển của rất nhiều người.' },
        { title: '9:00 Mở hộp thư', text: 'Gmail tự đẩy thư rác và thư lừa đảo vào mục Spam, phân loại thư quảng cáo sang tab riêng, gợi ý câu trả lời ngắn.' },
        { title: '12:00 Mua sắm giờ nghỉ trưa', text: 'Shopee, Lazada, Tiki gợi ý "Có thể bạn cũng thích"; ô tìm kiếm tự hiểu dù bạn gõ sai chính tả hay gõ không dấu.' },
        { title: '12:30 Chuyển khoản trả tiền nhà', text: 'Từ 1/7/2024, theo Quyết định 2345/QĐ-NHNN, chuyển khoản trên 10 triệu đồng (hoặc khi tổng trong ngày vượt 20 triệu) phải xác thực sinh trắc học. Ứng dụng ngân hàng so khuôn mặt bạn trước camera với dữ liệu sinh trắc học đã đăng ký: đây chính là AI nhận diện khuôn mặt trong một việc rất đời thường.' },
        { title: '14:00 Hỏi thủ tục hành chính', text: 'Thay vì gọi điện hỏi, bạn mở ứng dụng VNeID, vào mục cẩm nang và chọn "Trợ lý AI" để hỏi cần giấy tờ gì. Nhiều địa phương, như Hà Nội với ứng dụng iHanoi và Zalo OA, cũng dùng trợ lý ảo AI hướng dẫn dịch vụ công.' },
        { title: '15:00 Đọc tài liệu tiếng Anh', text: 'Google Dịch dịch cả đoạn văn, thậm chí dịch trực tiếp chữ trong ảnh chụp qua camera. Hoặc bạn nhờ một chatbot như ChatGPT, Gemini, Claude tóm tắt và giải thích lại bằng tiếng Việt.' },
        { title: '20:00 Giải trí buổi tối', text: 'Netflix, Spotify, Zing MP3 đề xuất phim, bài hát hợp gu. Bạn hỏi trợ lý giọng nói "Ngày mai trời có mưa không?"' }
      ] },
      { type: 'callout', tone: 'tip', title: 'Thử ngay', text: 'Mở ứng dụng Ảnh (Photos) trên điện thoại và gõ tìm "chó", "biển" hoặc "bánh sinh nhật". Điện thoại tìm ra ảnh dù bạn chưa từng gắn nhãn. Đó là nhận dạng hình ảnh bằng học sâu, chạy ngay trong túi bạn.' },

      { type: 'h', text: 'Bên trong vài ứng dụng quen thuộc' },
      { type: 'p', text: 'Nhớ lại khung "A → B" của Andrew Ng ở bài 3. Hầu hết các ứng dụng trên đều có thể mô tả bằng ba câu hỏi: <em>đầu vào là gì, đầu ra là gì, học từ dữ liệu nào?</em>' },
      { type: 'table', head: ['Ứng dụng', 'Đầu vào (A)', 'Đầu ra (B)', 'Học từ dữ liệu gì?'], rows: [
        ['Lọc spam Gmail', 'Nội dung, người gửi, đường link trong thư', 'Spam hay không', 'Hàng triệu thư người dùng đã đánh dấu'],
        ['Gợi ý sản phẩm Shopee', 'Lịch sử xem, tìm kiếm, mua của bạn', 'Danh sách sản phẩm bạn có thể thích', 'Hành vi mua sắm của rất nhiều người dùng'],
        ['Grab ước tính giờ đến', 'Điểm đón, điểm đến, thời gian, tình hình giao thông', 'Số phút dự kiến', 'Dữ liệu các chuyến đi trước đó'],
        ['Face ID', 'Hình ảnh và dữ liệu độ sâu khuôn mặt', 'Đúng chủ máy hay không', 'Ảnh khuôn mặt dùng để huấn luyện mô hình, cộng dữ liệu bạn đăng ký'],
        ['Google Dịch', 'Câu ở ngôn ngữ nguồn', 'Câu ở ngôn ngữ đích', 'Rất nhiều cặp văn bản song ngữ'],
        ['Ngân hàng phát hiện gian lận thẻ', 'Số tiền, địa điểm, thời gian giao dịch', 'Giao dịch có đáng ngờ không', 'Lịch sử các giao dịch hợp lệ và gian lận']
      ] },
      { type: 'example', title: 'Vì sao bạn vừa tìm "nồi chiên không dầu" là thấy quảng cáo khắp nơi?', text: 'Khi bạn tìm kiếm một sản phẩm, hệ thống gợi ý và quảng cáo ghi nhận tín hiệu "người này đang quan tâm đồ gia dụng nhà bếp". Mô hình so sánh bạn với những người có hành vi tương tự và dự đoán bạn có khả năng bấm vào quảng cáo nồi chiên, máy xay sinh tố. Ngay cả khi bạn đã mua xong, hệ thống có thể chưa biết, nên vẫn tiếp tục gợi ý. Đó là một giới hạn điển hình: AI chỉ biết những gì dữ liệu cho nó biết.' },

      { type: 'h', text: 'AI trong các lĩnh vực lớn hơn' },
      { type: 'list', items: [
        '<strong>Y tế:</strong> hỗ trợ bác sĩ đọc ảnh X-quang, CT, phát hiện dấu hiệu bất thường; AlphaFold dự đoán cấu trúc protein phục vụ nghiên cứu thuốc.',
        '<strong>Tài chính, ngân hàng:</strong> phát hiện giao dịch gian lận, xác minh danh tính bằng khuôn mặt khi mở tài khoản trực tuyến (eKYC), chấm điểm tín dụng.',
        '<strong>Nông nghiệp:</strong> nhận diện sâu bệnh qua ảnh lá cây, dự báo thời tiết và năng suất.',
        '<strong>Giáo dục:</strong> ứng dụng học ngoại ngữ chấm phát âm, gợi ý bài tập phù hợp trình độ.',
        '<strong>Giao thông:</strong> camera nhận diện biển số xe, hệ thống hỗ trợ lái trên ô tô đời mới.',
        '<strong>Công việc văn phòng:</strong> chatbot hỗ trợ soạn thảo, tóm tắt cuộc họp, viết code, trả lời khách hàng tự động; tác tử AI bắt đầu tự làm cả chuỗi việc như tra cứu, điền biểu mẫu.',
        '<strong>Hành chính công:</strong> trợ lý AI trên VNeID và các cổng dịch vụ công địa phương giải đáp thủ tục, biểu mẫu, cảnh báo thông tin lừa đảo.'
      ] },
      { type: 'callout', tone: 'note', title: 'AI tạo sinh phổ biến nhanh chưa từng thấy', text: 'Theo báo cáo AI Index 2026 của Đại học Stanford, AI tạo sinh được khoảng một nửa dân số thế giới sử dụng chỉ trong khoảng ba năm kể từ khi ChatGPT ra mắt. Tại Việt Nam, Luật Trí tuệ nhân tạo có hiệu lực từ 1/3/2026 đặt ra khung quản lý theo mức rủi ro cho các ứng dụng này.' },

      { type: 'h', text: 'Mặt trái cần tỉnh táo' },
      { type: 'p', text: 'AI mang lại tiện lợi, nhưng bạn cũng nên hiểu những rủi ro đi kèm:' },
      { type: 'list', items: [
        '<strong>Quyền riêng tư:</strong> để gợi ý chính xác, ứng dụng cần thu thập nhiều dữ liệu về bạn. Hãy xem lại quyền truy cập (vị trí, micro, danh bạ) mà bạn cấp cho ứng dụng.',
        '<strong>Bong bóng lọc (filter bubble):</strong> khi thuật toán chỉ đưa cho bạn những gì bạn thích, bạn có thể ngày càng ít tiếp xúc với quan điểm khác.',
        '<strong>Lừa đảo bằng deepfake:</strong> công nghệ giả giọng nói, giả khuôn mặt trong cuộc gọi video đang bị kẻ gian lợi dụng để giả làm người thân, sếp hoặc cán bộ công an, viện kiểm sát để lừa chuyển tiền. Luật Trí tuệ nhân tạo của Việt Nam (hiệu lực từ 1/3/2026) cấm dùng deepfake để lừa đảo, nhưng tỉnh táo vẫn là lá chắn đầu tiên.',
        '<strong>Phụ thuộc quá mức:</strong> tin tuyệt đối vào kết quả của chatbot hay bản đồ mà không kiểm tra lại.'
      ] },
      { type: 'callout', tone: 'warn', title: 'Cảnh giác cuộc gọi video "người quen" vay tiền', text: 'Nếu nhận được cuộc gọi video hình ảnh mờ, ngắn, từ người thân hay bạn bè nhờ chuyển tiền gấp, hãy gọi lại bằng số điện thoại quen thuộc hoặc hỏi một câu chỉ hai người biết trước khi làm bất cứ điều gì. Dấu hiệu đáng ngờ thường gặp: cuộc gọi chỉ vài giây, khuôn mặt ít biểu cảm, da và ánh sáng không tự nhiên, tiếng không khớp khẩu hình, rồi viện cớ "sóng yếu" để cúp máy. Hình ảnh và giọng nói giờ đây có thể bị làm giả.' },
      { type: 'analogy', text: 'Hãy coi các hệ thống gợi ý như một người bán hàng rất tinh ý ở chợ: nhớ bạn hay mua gì, luôn bày sẵn món bạn thích. Rất tiện, nhưng người bán ấy cũng muốn bạn mua nhiều hơn. Biết điều đó, bạn sẽ tận dụng được sự tiện lợi mà vẫn giữ quyền tự quyết.' },
      { type: 'callout', tone: 'tip', title: 'Bài tập nhỏ trước khi sang Tầng 2', text: 'Chọn ba ứng dụng bạn dùng nhiều nhất. Với mỗi ứng dụng, hãy viết ra: (1) tính năng nào có thể dùng AI, (2) đầu vào và đầu ra của nó, (3) nó có thể học từ dữ liệu gì của bạn. Bạn sẽ bất ngờ về số lượng AI mình đang dùng mỗi ngày.' }
    ],
    keyPoints: [
      'AI đã có mặt trong đời sống hằng ngày từ lâu: Face ID, lọc spam, gợi ý sản phẩm, Google Maps, Grab, Google Dịch, trợ lý giọng nói.',
      'Có thể hiểu hầu hết ứng dụng AI qua ba câu hỏi: đầu vào là gì, đầu ra là gì, học từ dữ liệu nào.',
      'AI đang được dùng rộng rãi trong y tế, tài chính (xác thực sinh trắc học), nông nghiệp, giáo dục, giao thông, văn phòng và dịch vụ công (trợ lý AI trên VNeID).',
      'Cần tỉnh táo với rủi ro: quyền riêng tư, bong bóng lọc, lừa đảo deepfake và việc phụ thuộc quá mức vào AI.'
    ],
    quiz: [
      {
        q: 'Với tính năng lọc thư rác của Gmail, đâu là mô tả "đầu vào → đầu ra" đúng nhất?',
        options: ['Đầu vào: nhãn spam; Đầu ra: nội dung thư', 'Đầu vào: số điện thoại của bạn; Đầu ra: danh bạ', 'Đầu vào: nội dung, người gửi, đường link của thư; Đầu ra: spam hay không', 'Đầu vào: mật khẩu Gmail; Đầu ra: thư mới'],
        answer: 2,
        explain: 'Hệ thống nhận thông tin về một bức thư (A) và dự đoán nó có phải spam hay không (B), dựa trên hàng triệu thư đã được người dùng đánh dấu.'
      },
      {
        q: '"Bong bóng lọc" (filter bubble) là gì?',
        options: ['Lỗi khiến ứng dụng bị treo', 'Tình trạng thuật toán gợi ý chỉ đưa những nội dung hợp sở thích, khiến bạn ít tiếp xúc quan điểm khác', 'Một loại virus máy tính', 'Tính năng chặn quảng cáo'],
        answer: 1,
        explain: 'Khi hệ thống gợi ý tối ưu cho những gì bạn thích xem, bạn dễ bị "bao bọc" trong một luồng thông tin một chiều.'
      },
      {
        q: 'Bạn nhận cuộc gọi video ngắn, hình mờ, từ "người thân" nhờ chuyển tiền gấp. Cách xử lý an toàn nhất là gì?',
        options: ['Chuyển ngay vì đã thấy mặt người thân', 'Gửi mã OTP để họ tự chuyển', 'Chuyển một nửa số tiền cho chắc', 'Gọi lại bằng số điện thoại quen thuộc hoặc hỏi câu chỉ hai người biết để xác minh'],
        answer: 3,
        explain: 'Công nghệ deepfake có thể giả mạo khuôn mặt và giọng nói. Luôn xác minh qua một kênh khác mà bạn chủ động liên hệ trước khi chuyển tiền, và không bao giờ đưa mã OTP cho người khác.'
      }
    ],
    resources: [
      { title: 'Hướng dẫn sử dụng trợ lý ảo AI của Bộ Công an tra cứu thủ tục hành chính (Dân trí)', url: 'https://dantri.com.vn/cong-nghe/huong-dan-su-dung-tro-ly-ao-ai-cua-bo-cong-an-tra-cuu-thu-tuc-hanh-chinh-20250718030301447.htm', note: 'Tiếng Việt, cách dùng Trợ lý AI trên VNeID' },
      { title: 'Dấu hiệu nhận biết và cách phòng tránh lừa đảo cuộc gọi video Deepfake (VTV)', url: 'https://vtv.vn/cong-nghe/dau-hieu-nhan-biet-va-cach-phong-tranh-lua-dao-cuoc-goi-video-deepfake-20230630162756596.htm', note: 'Tiếng Việt, khuyến cáo của cơ quan chức năng' },
      { title: 'Elements of AI, Chương 1: What is AI?', url: 'https://course.elementsofai.com/1', note: 'Tiếng Anh, miễn phí, có nhiều ví dụ ứng dụng AI' },
      { title: 'AI for Everyone (DeepLearning.AI)', url: 'https://www.deeplearning.ai/courses/ai-for-everyone/', note: 'Tiếng Anh (có phụ đề), nhiều ví dụ AI trong doanh nghiệp và đời sống' }
    ],
    video: { id: 'xWfoJaYqFdI', title: 'Deepfake AI: Cảnh giác khi kẻ lừa đảo ngụy trang hoàn hảo | VTV24', channel: 'VTV24', lang: 'vi', minutes: 8 },
    updated: '2026-09'
  }

};

export default lessons;
