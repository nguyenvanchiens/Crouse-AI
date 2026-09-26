const lessons = {

  /* =========================================================
     T2-B1: Chatbot AI hoạt động ra sao
     ========================================================= */
  't2-b1': {
    duration: 16,
    summary: 'Chatbot AI vận hành thế nào: dự đoán từ tiếp theo, token, cửa sổ ngữ cảnh, “trí nhớ”, cùng các tính năng mới như tìm kiếm web, deep research và agent.',
    goals: [
      'Giải thích được vì sao chatbot “viết” bằng cách dự đoán từ tiếp theo',
      'Hiểu token, cửa sổ ngữ cảnh và giới hạn kiến thức theo thời điểm',
      'Nắm các tính năng mới (bộ nhớ, tìm kiếm web, deep research, chế độ suy luận, agent) và chọn được công cụ phù hợp'
    ],
    blocks: [
      { type: 'p', text: 'Bạn đã từng hỏi ChatGPT một câu và nhận được câu trả lời trôi chảy như người thật. Nhưng phía sau màn hình không có ai đang “suy nghĩ” như bạn. Hiểu đúng cách chatbot hoạt động sẽ giúp bạn dùng nó giỏi hơn rất nhiều: biết lúc nào nên tin, lúc nào nên nghi ngờ và vì sao cách đặt câu hỏi lại quan trọng đến vậy.' },

      { type: 'h', text: 'Cỗ máy dự đoán từ tiếp theo' },
      { type: 'p', text: 'Chatbot như ChatGPT, Claude hay Gemini được xây dựng trên <strong>mô hình ngôn ngữ lớn (Large Language Model — LLM)</strong>. Mô hình này đã được huấn luyện trên một lượng văn bản khổng lồ: sách, bài báo, trang web, mã nguồn. Nhiệm vụ cốt lõi của nó nghe rất đơn giản: <em>cho một đoạn văn bản, đoán xem phần tiếp theo nhiều khả năng là gì</em>.' },
      { type: 'p', text: 'Khi bạn gõ “Thủ đô của Việt Nam là”, mô hình tính xác suất cho các khả năng tiếp theo và “Hà Nội” có xác suất cao nhất. Nó viết ra phần đó, rồi lặp lại: nhìn toàn bộ văn bản mới, đoán phần tiếp theo, cứ thế cho đến khi xong câu trả lời. Đó là lý do bạn thấy chữ hiện ra dần dần trên màn hình.' },
      { type: 'analogy', text: 'Hãy tưởng tượng tính năng gợi ý từ trên bàn phím điện thoại, nhưng được “nâng cấp” lên hàng triệu lần. Bàn phím chỉ đoán một từ dựa trên vài từ trước. LLM đoán dựa trên toàn bộ cuộc trò chuyện và những gì nó đã “đọc” được trong quá trình huấn luyện, nên có thể viết cả bài luận, đoạn code hay bài thơ mạch lạc.' },
      { type: 'p', text: 'Sau giai đoạn học từ văn bản thô, các công ty còn tinh chỉnh mô hình bằng phản hồi của con người để nó biết cách trò chuyện, làm theo yêu cầu và từ chối những việc nguy hiểm. Kết quả là một “trợ lý” lịch sự, hữu ích — nhưng bản chất vẫn là dự đoán văn bản hợp lý nhất.' },
      { type: 'callout', tone: 'warn', title: 'Lầm tưởng phổ biến', text: '“Viết trôi chảy” không có nghĩa là “luôn đúng”. Mô hình tối ưu để tạo ra văn bản <em>nghe hợp lý</em>, không phải để tra cứu sự thật trong một cơ sở dữ liệu. Vì vậy đôi khi nó bịa ra thông tin rất tự tin — hiện tượng này gọi là ảo giác (hallucination), bạn sẽ học kỹ ở bài 4.' },

      { type: 'h', text: 'Token và cửa sổ ngữ cảnh' },
      { type: 'p', text: 'Mô hình không đọc từng chữ cái hay từng từ như chúng ta. Nó chia văn bản thành các mảnh nhỏ gọi là <strong>token</strong>. Một token có thể là một từ ngắn, một phần của từ, dấu câu hay khoảng trắng. Tiếng Anh thường tốn ít token hơn tiếng Việt cho cùng một ý, vì phần lớn dữ liệu huấn luyện là tiếng Anh và tiếng Việt có dấu nên hay bị chia nhỏ hơn.' },
      { type: 'p', text: '<strong>Cửa sổ ngữ cảnh (context window)</strong> là lượng token tối đa mô hình có thể “nhìn thấy” cùng lúc — gồm câu hỏi của bạn, tài liệu bạn dán vào, lịch sử trò chuyện và cả câu trả lời nó đang viết. Các mô hình hiện đại có cửa sổ ngữ cảnh khá lớn, đủ chứa nhiều trang tài liệu, nhưng vẫn có giới hạn.' },
      { type: 'example', title: 'Khi cuộc trò chuyện quá dài', text: 'Bạn nhờ chatbot sửa một bài luận, trao đổi qua lại hàng chục lượt, dán thêm nhiều tài liệu. Đến một lúc nó “quên” yêu cầu ban đầu là viết giọng trang trọng. Nguyên nhân: phần đầu cuộc trò chuyện có thể đã bị cắt bớt hoặc bị “chìm” giữa quá nhiều thông tin. Cách xử lý: mở cuộc trò chuyện mới và tóm tắt lại các yêu cầu quan trọng ngay từ đầu.' },

      { type: 'h', text: 'Giới hạn kiến thức và “trí nhớ”' },
      { type: 'p', text: 'Mỗi mô hình được huấn luyện trên dữ liệu đến một thời điểm nhất định, gọi là <strong>mốc giới hạn kiến thức (knowledge cutoff)</strong>. Những sự kiện sau mốc đó, mô hình không biết — trừ khi chatbot có công cụ tìm kiếm web và thực sự dùng nó trong câu trả lời. Nếu bạn hỏi về giá vàng hôm nay, tỷ số trận đấu tối qua hay luật mới ban hành, hãy kiểm tra xem câu trả lời có dẫn nguồn web hay không.' },
      { type: 'p', text: 'Về trí nhớ, cần phân biệt ba điều:' },
      { type: 'list', items: [
        '<strong>Trong một cuộc trò chuyện:</strong> chatbot “nhớ” những gì nằm trong cửa sổ ngữ cảnh, vì toàn bộ lịch sử được gửi lại cho mô hình mỗi lượt.',
        '<strong>Giữa các cuộc trò chuyện:</strong> theo mặc định, mô hình không tự nhớ bạn. Mở chat mới là bắt đầu từ trang giấy trắng.',
        '<strong>Tính năng bộ nhớ (memory):</strong> các ứng dụng lớn như ChatGPT, Claude hay Copilot đều đã có tính năng lưu thông tin về bạn (công việc, dự án, sở thích viết) để dùng lại ở các cuộc trò chuyện sau. Đây là tính năng của ứng dụng, thường có thể xem, sửa hoặc tắt trong phần cài đặt, và có chế độ trò chuyện tạm thời/ẩn danh không lưu lại — không phải mô hình tự “học” thêm từ bạn.'
      ] },
      { type: 'callout', tone: 'note', title: 'Mô hình có học từ cuộc trò chuyện của tôi không?', text: 'Mô hình không thay đổi ngay trong lúc bạn chat. Tuy nhiên, tùy chính sách từng nhà cung cấp và cài đặt tài khoản, dữ liệu trò chuyện <em>có thể</em> được dùng để huấn luyện các phiên bản sau. Hãy đọc phần cài đặt quyền riêng tư của công cụ bạn dùng — bài 6 sẽ nói kỹ hơn.' },

      { type: 'h', text: 'Từ chatbot trả lời đến trợ lý biết làm việc' },
      { type: 'p', text: 'Giai đoạn 2025–2026, chatbot không còn chỉ “trả lời từ trí nhớ”. Các công cụ lớn đều bổ sung những khả năng giúp mô hình lấy thông tin mới, suy nghĩ lâu hơn và tự thực hiện nhiều bước. Bạn nên biết tên các tính năng này để bật đúng lúc:' },
      { type: 'table', head: ['Tính năng', 'Làm gì', 'Khi nào nên dùng'], rows: [
        ['Tìm kiếm web (web search)', 'Chatbot tra web rồi trả lời kèm đường dẫn nguồn.', 'Tin tức, giá cả, quy định mới — mọi thứ sau mốc giới hạn kiến thức.'],
        ['Nghiên cứu sâu (deep research)', 'Tự tìm và đọc nhiều nguồn trong vài phút đến hàng chục phút, rồi viết báo cáo có trích dẫn.', 'Tổng quan một chủ đề, so sánh sản phẩm, chuẩn bị tài liệu.'],
        ['Chế độ suy luận (thinking/reasoning)', 'Mô hình “nghĩ” nhiều bước trước khi trả lời.', 'Toán, lập kế hoạch, phân tích nhiều ràng buộc, lập trình.'],
        ['Bộ nhớ (memory)', 'Ghi nhớ thông tin về bạn giữa các cuộc trò chuyện.', 'Công việc lặp lại, không muốn giới thiệu lại bối cảnh mỗi lần.'],
        ['Agent / điều khiển máy tính (computer use)', 'AI tự mở trình duyệt, bấm, điền biểu mẫu, thao tác trong ứng dụng thay bạn.', 'Việc nhiều bước lặp đi lặp lại — và luôn giám sát trước khi xác nhận thao tác quan trọng.']
      ] },
      { type: 'callout', tone: 'warn', title: 'Agent làm thay nhưng bạn vẫn chịu trách nhiệm', text: 'Khi để AI thao tác trên trình duyệt hay tài khoản của bạn, nó có thể bấm nhầm hoặc bị nội dung độc hại trên trang web “dắt mũi” (prompt injection, xem bài 3). Đừng giao cho agent việc thanh toán, gửi email quan trọng hay xóa dữ liệu mà không kiểm tra lại.' },

      { type: 'h', text: 'Các công cụ phổ biến' },
      { type: 'p', text: 'Có nhiều chatbot AI, mỗi cái có thế mạnh riêng và thay đổi rất nhanh. Dưới đây là cái nhìn tổng quan mang tính định tính:' },
      { type: 'table', head: ['Công cụ', 'Công ty', 'Điểm đáng chú ý'], rows: [
        ['ChatGPT', 'OpenAI', 'Phổ biến nhất, hệ sinh thái rộng: tạo ảnh, phân tích file, bộ nhớ, deep research và chế độ agent tự thao tác trên trình duyệt.'],
        ['Claude', 'Anthropic', 'Mạnh về viết, phân tích tài liệu dài và lập trình; có tìm kiếm web, bộ nhớ và tiện ích Claude in Chrome để thao tác trên trình duyệt; chú trọng an toàn.'],
        ['Gemini', 'Google', 'Tích hợp sâu với hệ sinh thái Google (Gmail, Docs, tìm kiếm); có Deep Research và chế độ agent cho việc nhiều bước.'],
        ['Copilot', 'Microsoft', 'Tích hợp vào Windows, Edge và bộ Microsoft 365 (Word, Excel, Outlook); bản cho doanh nghiệp hiểu được email, tài liệu, lịch họp của bạn.']
      ] },
      { type: 'callout', tone: 'tip', title: 'Mẹo chọn công cụ', text: 'Đừng quá bận tâm “cái nào tốt nhất”. Hãy thử cùng một yêu cầu trên 2–3 công cụ, so sánh kết quả với công việc thật của bạn. Kỹ năng viết prompt bạn học trong tầng này áp dụng được cho tất cả.' },
      { type: 'p', text: 'Ngoài ra, hầu hết công cụ đều có bản miễn phí và bản trả phí với mô hình mạnh hơn hoặc giới hạn sử dụng cao hơn. Tính năng và mức giá thay đổi thường xuyên, vì vậy hãy xem trực tiếp trên trang chính thức thay vì tin vào một bài viết cũ.' }
    ],
    keyPoints: [
      'Chatbot tạo câu trả lời bằng cách dự đoán lần lượt từng token tiếp theo hợp lý nhất.',
      'Token là đơn vị văn bản mô hình xử lý; cửa sổ ngữ cảnh là lượng token nó thấy cùng lúc.',
      'Mô hình có mốc giới hạn kiến thức; thông tin mới cần công cụ tìm kiếm web.',
      'Mặc định chatbot không nhớ bạn giữa các cuộc trò chuyện, trừ khi bật tính năng bộ nhớ.',
      'Tìm kiếm web, deep research, chế độ suy luận và agent mở rộng khả năng của chatbot — hãy thử 2–3 công cụ và chọn theo nhu cầu thật.'
    ],
    quiz: [
      { q: 'Về bản chất, một mô hình ngôn ngữ lớn tạo ra câu trả lời bằng cách nào?', options: ['Tra cứu câu trả lời có sẵn trong một cơ sở dữ liệu', 'Dự đoán lần lượt phần văn bản tiếp theo hợp lý nhất', 'Chuyển câu hỏi cho nhân viên trả lời', 'Sao chép nguyên văn một trang web phù hợp'], answer: 1, explain: 'LLM sinh văn bản bằng cách dự đoán token tiếp theo dựa trên ngữ cảnh, lặp lại cho đến khi hoàn thành câu trả lời.' },
      { q: 'Bạn chat rất dài và chatbot bắt đầu “quên” yêu cầu ban đầu. Nguyên nhân hợp lý nhất là gì?', options: ['Chatbot bị hỏng', 'Máy tính của bạn hết bộ nhớ', 'Cuộc trò chuyện vượt quá hoặc làm loãng cửa sổ ngữ cảnh', 'Chatbot cố tình phớt lờ bạn'], answer: 2, explain: 'Cửa sổ ngữ cảnh có giới hạn. Khi quá dài, phần đầu có thể bị cắt hoặc bị chìm giữa quá nhiều thông tin.' },
      { q: 'Phát biểu nào đúng về “trí nhớ” của chatbot?', options: ['Chatbot luôn nhớ mọi thứ bạn từng nói ở mọi cuộc trò chuyện', 'Mô hình tự học và thay đổi ngay khi bạn chat', 'Chatbot không bao giờ nhớ gì, kể cả trong cùng một cuộc trò chuyện', 'Mặc định không nhớ giữa các cuộc trò chuyện, trừ khi ứng dụng có tính năng bộ nhớ được bật'], answer: 3, explain: 'Trong một cuộc trò chuyện, lịch sử nằm trong ngữ cảnh. Giữa các cuộc trò chuyện chỉ có tính năng bộ nhớ của ứng dụng mới lưu lại thông tin.' }
    ],
    resources: [
      { title: 'OpenAI Tokenizer — xem văn bản được chia thành token', url: 'https://platform.openai.com/tokenizer', note: 'Công cụ trực tuyến, miễn phí' },
      { title: 'AI capabilities and limitations — Anthropic Academy', url: 'https://academy.claude.com/courses/ai-capabilities-and-limitations', note: 'Khóa học miễn phí, tiếng Anh: dự đoán, kiến thức, trí nhớ, giới hạn ngữ cảnh' },
      { title: 'Generative AI for Everyone — DeepLearning.AI', url: 'https://www.deeplearning.ai/courses/generative-ai-for-everyone/', note: 'Khóa học tiếng Anh cho người không chuyên' }
    ],
    video: { id: 'LPZh9BOjkQs', title: 'Large Language Models explained briefly', channel: '3Blue1Brown', lang: 'en', minutes: 8 },
    updated: '2026-09'
  },

  /* =========================================================
     T2-B2: Viết prompt: các nguyên tắc nền tảng
     ========================================================= */
  't2-b2': {
    duration: 16,
    summary: 'Sáu nguyên tắc nền tảng để viết prompt tốt: rõ ràng cụ thể, bối cảnh, vai trò, định dạng đầu ra, ví dụ mẫu và tinh chỉnh qua nhiều lượt.',
    goals: [
      'Biết prompt là gì và vì sao prompt tốt tạo ra kết quả tốt',
      'Áp dụng 6 nguyên tắc nền tảng khi viết prompt hằng ngày',
      'Biết cách tinh chỉnh câu trả lời thay vì bỏ cuộc sau lần đầu'
    ],
    blocks: [
      { type: 'p', text: '<strong>Prompt</strong> là những gì bạn gõ vào để yêu cầu AI làm việc. Cùng một chatbot, người này nhận được câu trả lời chung chung, người kia nhận được bản nháp gần như dùng được ngay. Khác biệt thường nằm ở prompt. Tin vui: viết prompt tốt không cần kỹ thuật cao siêu — nó giống kỹ năng giao việc rõ ràng cho đồng nghiệp.' },
      { type: 'analogy', text: 'Hãy tưởng tượng bạn giao việc cho một nhân viên mới rất giỏi nhưng <em>chưa biết gì về bạn, công ty hay dự án</em>. Nếu chỉ nói “viết cái email đi”, họ sẽ phải đoán mọi thứ. Nếu bạn nói rõ gửi cho ai, mục đích gì, giọng văn ra sao, dài bao nhiêu — họ sẽ làm đúng ngay lần đầu. Hướng dẫn chính thức của Anthropic (Prompting best practices) mô tả Claude đúng như vậy: “một nhân viên mới xuất sắc nhưng chưa có bối cảnh về quy chuẩn và cách làm việc của bạn”.' },
      { type: 'callout', tone: 'tip', title: 'Quy tắc vàng: thử với đồng nghiệp', text: 'Anthropic gợi ý một phép thử đơn giản: đưa prompt của bạn cho một đồng nghiệp không biết gì về nhiệm vụ và nhờ họ làm theo. Nếu họ bối rối, AI cũng sẽ bối rối.' },

      { type: 'h', text: 'Nguyên tắc 1–2: Rõ ràng, cụ thể và cung cấp bối cảnh' },
      { type: 'p', text: 'AI không đọc được suy nghĩ của bạn. Mọi thứ bạn không nói ra, nó sẽ tự điền bằng lựa chọn “trung bình” nhất. Hãy nói rõ: <strong>bạn muốn gì, cho ai, để làm gì, với ràng buộc nào</strong>.' },
      { type: 'prompt',
        bad: 'Viết email xin nghỉ phép.',
        good: `Viết email xin nghỉ phép gửi chị Lan, trưởng phòng Marketing.
- Tôi xin nghỉ 2 ngày: thứ Năm 12/6 và thứ Sáu 13/6 để về quê dự đám cưới em gái.
- Công việc đang làm: chiến dịch quảng cáo tháng 6; tôi đã bàn giao cho anh Minh.
- Giọng văn: lịch sự, ngắn gọn, thân thiện (công ty khá cởi mở).
- Độ dài: dưới 150 từ, có tiêu đề email.`,
        why: 'Prompt tốt trả lời trước các câu hỏi AI sẽ phải đoán: gửi ai, nghỉ bao lâu, lý do, ai lo công việc, giọng văn, độ dài. Kết quả gần như gửi được ngay, chỉ cần đọc lại.' },
      { type: 'p', text: '<strong>Bối cảnh</strong> là thông tin nền giúp AI hiểu tình huống: bạn là ai, người đọc là ai, kết quả sẽ dùng vào việc gì, điều gì đã thử mà không ổn. Hướng dẫn của Anthropic nhấn mạnh việc giải thích <em>lý do</em> đằng sau yêu cầu — khi AI hiểu mục đích, nó đưa ra lựa chọn tốt hơn ở những chỗ bạn không dặn. Ví dụ trong tài liệu: thay vì chỉ ra lệnh “KHÔNG BAO GIỜ dùng dấu ba chấm”, hãy nói “câu trả lời sẽ được đọc bằng giọng máy, nên đừng dùng dấu ba chấm vì phần mềm đọc không biết phát âm” — mô hình đủ thông minh để tự suy ra các trường hợp tương tự.' },
      { type: 'prompt',
        bad: 'Tóm tắt báo cáo này.',
        good: `Dưới đây là báo cáo kinh doanh quý 2 dài 12 trang. Tôi cần trình bày trong cuộc họp 5 phút với ban giám đốc, những người chỉ quan tâm đến doanh thu, chi phí và rủi ro.
Hãy tóm tắt thành 5 gạch đầu dòng, mỗi dòng không quá 25 từ, ưu tiên con số cụ thể có trong báo cáo. Cuối cùng thêm 1 dòng "Cần quyết định:" nếu báo cáo có đề xuất nào cần ban giám đốc duyệt.

[dán báo cáo]`,
        why: 'Biết người đọc là ban giám đốc và thời lượng 5 phút, AI sẽ chọn lọc thông tin quan trọng thay vì tóm tắt đều mọi phần.' },

      { type: 'h', text: 'Nguyên tắc 3–4: Giao vai trò và chỉ định định dạng đầu ra' },
      { type: 'p', text: '<strong>Giao vai trò (role prompting)</strong> nghĩa là bảo AI đóng một vai cụ thể: “Bạn là giáo viên IELTS nhiều kinh nghiệm”, “Bạn là chuyên viên nhân sự”. Vai trò giúp định hướng giọng văn, mức độ chuyên sâu và góc nhìn. Vai trò càng cụ thể càng tốt — kèm theo đối tượng mà vai đó phục vụ.' },
      { type: 'p', text: '<strong>Định dạng đầu ra</strong> là hình thức bạn muốn nhận: bảng, gạch đầu dòng, đoạn văn, số từ, ngôn ngữ, có tiêu đề hay không. Nói rõ định dạng giúp bạn đỡ mất công chỉnh sửa và dễ dán kết quả vào nơi cần dùng.' },
      { type: 'prompt',
        bad: 'Lên kế hoạch học IELTS cho tôi.',
        good: `Bạn là giáo viên IELTS nhiều kinh nghiệm, chuyên dạy người đi làm bận rộn.
Tình hình của tôi: đang ở khoảng band 5.0 (yếu nhất là Writing), cần đạt 6.5 trong 4 tháng để nộp hồ sơ du học. Tôi học được 1 tiếng mỗi tối trong tuần và 3 tiếng mỗi ngày cuối tuần.
Hãy lập kế hoạch học theo từng tháng, trình bày dạng bảng gồm các cột: Tháng | Mục tiêu | Kỹ năng trọng tâm | Hoạt động mỗi ngày | Cách tự đánh giá.
Sau bảng, liệt kê 3 sai lầm người học ở trình độ của tôi hay mắc phải.`,
        why: 'Có vai trò (giáo viên dạy người đi làm), bối cảnh (trình độ, mục tiêu, thời gian rảnh) và định dạng (bảng với các cột cụ thể). Kế hoạch sẽ sát thực tế thay vì lời khuyên chung chung.' },
      { type: 'callout', tone: 'tip', title: 'Nói điều nên làm, không chỉ điều cấm', text: 'Thay vì “Đừng viết dài dòng”, hãy nói “Viết tối đa 3 câu, mỗi câu một ý”. Hướng dẫn của Anthropic ghi rõ: hãy nói cho mô hình biết <em>nên làm gì</em> thay vì <em>không được làm gì</em>. Mô tả hành vi mong muốn một cách tích cực và cụ thể luôn dễ làm theo hơn.' },

      { type: 'h', text: 'Nguyên tắc 5: Cho ví dụ mẫu' },
      { type: 'p', text: 'Đôi khi mô tả bằng lời rất khó, nhưng đưa một ví dụ thì AI hiểu ngay. Muốn caption Facebook theo phong cách của trang bạn? Dán 2–3 caption cũ làm mẫu. Muốn AI phân loại phản hồi khách hàng? Cho vài ví dụ đã phân loại sẵn.' },
      { type: 'prompt',
        bad: 'Viết caption Facebook cho quán cà phê của tôi, món mới là bạc xỉu muối.',
        good: `Viết 3 caption Facebook giới thiệu món mới "bạc xỉu muối" cho quán cà phê của tôi. Hãy viết theo đúng phong cách của các caption cũ dưới đây (ngắn, hài hước nhẹ, có 1–2 emoji, kết bằng lời mời ghé quán):

Mẫu 1: "Thứ Hai không đáng sợ, đáng sợ là thứ Hai mà chưa có cà phê ☕ Ghé quán làm một ly cho tỉnh nè!"
Mẫu 2: "Trời mưa là cái cớ, trà đào mới là lý do 🍑 Hẹn bạn chiều nay nha!"`,
        why: 'Ví dụ mẫu truyền đạt giọng văn, độ dài và cấu trúc tốt hơn mọi mô tả. Lưu ý: AI có thể bắt chước quá sát, nên chọn mẫu đa dạng một chút.' },
      { type: 'p', text: 'Cả ba “ông lớn” đều coi ví dụ là công cụ mạnh: Anthropic gọi đây là một trong những cách đáng tin cậy nhất để điều khiển định dạng và giọng văn, Google thậm chí khuyến nghị <em>luôn</em> kèm ví dụ trong prompt. Bài 3 sẽ đi sâu vào kỹ thuật này (few-shot).' },

      { type: 'h', text: 'Nguyên tắc 6: Lặp lại và tinh chỉnh' },
      { type: 'p', text: 'Ít ai viết được prompt hoàn hảo ngay lần đầu, kể cả chuyên gia. Hãy coi chat với AI là một cuộc đối thoại: đọc kết quả, chỉ ra chỗ chưa ổn, yêu cầu sửa cụ thể.' },
      { type: 'steps', items: [
        { title: 'Viết prompt đầu tiên', text: 'Áp dụng các nguyên tắc trên nhưng đừng cầu toàn. Gửi đi để xem AI hiểu thế nào.' },
        { title: 'Đánh giá kết quả', text: 'Cái gì đúng ý? Cái gì sai, thiếu, thừa? Giọng văn đã hợp chưa?' },
        { title: 'Phản hồi cụ thể', text: 'Thay vì “viết lại đi”, hãy nói “Đoạn 2 quá trang trọng, viết thân mật hơn; bỏ câu cuối; thêm một câu cảm ơn anh Minh”.' },
        { title: 'Lưu lại prompt tốt', text: 'Khi đã có prompt cho kết quả ưng ý, lưu vào ghi chú để dùng lại cho lần sau, chỉ cần thay chi tiết.' }
      ] },
      { type: 'callout', tone: 'note', title: 'Khi nào nên bắt đầu lại?', text: 'Nếu đã sửa nhiều lượt mà AI vẫn đi sai hướng, thường nhanh hơn khi mở cuộc trò chuyện mới với một prompt đầu tiên tốt hơn, gộp tất cả những gì bạn đã học được từ các lượt trước.' },
      { type: 'callout', tone: 'note', title: 'Mô hình suy luận cần prompt khác một chút', text: 'Hướng dẫn của OpenAI phân biệt: với các mô hình suy luận (reasoning), hãy giao mục tiêu ở mức cao như giao cho một đồng nghiệp lâu năm; với mô hình thường, hãy chỉ dẫn chi tiết, rõ từng bước như với người mới. Dù dùng loại nào, mục tiêu, bối cảnh và tiêu chí “thế nào là tốt” vẫn là phần không thể thiếu.' }
    ],
    keyPoints: [
      'Viết prompt như giao việc cho một nhân viên giỏi nhưng chưa biết gì về bạn.',
      'Nói rõ mục tiêu, người đọc, bối cảnh và lý do đằng sau yêu cầu.',
      'Giao vai trò cụ thể và chỉ định định dạng đầu ra (bảng, gạch đầu dòng, độ dài).',
      'Ví dụ mẫu truyền đạt phong cách tốt hơn mô tả bằng lời.',
      'Tinh chỉnh qua nhiều lượt với phản hồi cụ thể; lưu lại prompt hiệu quả.'
    ],
    quiz: [
      { q: 'Prompt nào tốt nhất để nhờ AI viết email xin nghỉ phép?', options: ['“Viết email xin nghỉ.”', '“Viết email xin nghỉ phép thật hay.”', '“Viết email xin nghỉ 2 ngày 12–13/6 gửi trưởng phòng, lý do việc gia đình, đã bàn giao cho anh Minh, giọng lịch sự, dưới 150 từ.”', '“Bạn là AI thông minh nhất, hãy viết email.”'], answer: 2, explain: 'Prompt này nêu rõ người nhận, thời gian, lý do, bàn giao, giọng văn và độ dài — AI không phải đoán.' },
      { q: 'Vì sao nên giải thích lý do hoặc mục đích của yêu cầu?', options: ['Giúp AI đưa ra lựa chọn phù hợp hơn ở những chỗ bạn không dặn cụ thể', 'Vì AI sẽ từ chối nếu không có lý do', 'Để prompt dài hơn, AI sẽ trả lời chậm hơn nhưng kỹ hơn', 'Không cần thiết, AI tự biết mục đích'], answer: 0, explain: 'Hiểu mục đích (ví dụ trình bày cho ban giám đốc trong 5 phút), AI chọn lọc và trình bày thông tin phù hợp hơn.' },
      { q: 'Kết quả đầu tiên chưa đúng ý. Cách phản hồi nào hiệu quả nhất?', options: ['“Sai rồi, làm lại.”', '“Đoạn 2 quá trang trọng, viết thân mật hơn và bỏ câu cuối.”', 'Bỏ luôn, tự viết tay', 'Gửi lại đúng prompt cũ nhiều lần'], answer: 1, explain: 'Phản hồi cụ thể chỉ rõ chỗ cần sửa và sửa thế nào, giúp AI điều chỉnh chính xác.' }
    ],
    resources: [
      { title: 'Prompting best practices — Anthropic (Claude Docs)', url: 'https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices', note: 'Tài liệu chính thức, cập nhật liên tục, tiếng Anh' },
      { title: 'Prompt engineering — OpenAI', url: 'https://developers.openai.com/api/docs/guides/prompt-engineering', note: 'Tài liệu chính thức, tiếng Anh' },
      { title: 'Prompt design strategies — Google Gemini API', url: 'https://ai.google.dev/gemini-api/docs/prompting-strategies', note: 'Tài liệu chính thức, tiếng Anh' },
      { title: 'AI Prompting for Everyone — DeepLearning.AI (Andrew Ng)', url: 'https://www.deeplearning.ai/courses/ai-prompting-for-everyone', note: 'Khóa học cho người mới, tiếng Anh, cần đăng ký' }
    ],
    video: { id: 'T9aRN5JkmL8', title: 'AI prompt engineering: A deep dive', channel: 'Anthropic', lang: 'en', minutes: 77 },
    updated: '2026-09'
  },

  /* =========================================================
     T2-B3: Kỹ thuật prompt nâng cao
     ========================================================= */
  't2-b3': {
    duration: 18,
    summary: 'Kỹ thuật prompt nâng cao: few-shot, chuỗi prompt, suy nghĩ từng bước, thẻ phân tách, tự kiểm tra và tư duy “context engineering”.',
    goals: [
      'Dùng few-shot để AI làm theo mẫu một cách nhất quán',
      'Chia tác vụ lớn thành chuỗi prompt nhỏ và tận dụng chế độ suy luận đúng cách',
      'Dùng thẻ để tách dữ liệu khỏi chỉ dẫn, yêu cầu AI tự kiểm tra và biết chọn lọc ngữ cảnh (context engineering)'
    ],
    blocks: [
      { type: 'p', text: 'Nắm vững 6 nguyên tắc nền tảng là bạn đã dùng AI tốt hơn phần lớn mọi người. Bài này giới thiệu các kỹ thuật mà tài liệu chính thức của Anthropic, OpenAI và Google đều khuyến nghị cho những tác vụ phức tạp hơn: xử lý nhiều dữ liệu, phân tích nhiều bước hoặc cần kết quả nhất quán.' },

      { type: 'h', text: 'Few-shot: dạy bằng nhiều ví dụ' },
      { type: 'p', text: '<strong>Zero-shot</strong> là yêu cầu AI làm việc mà không có ví dụ nào. <strong>Few-shot</strong> là đưa kèm vài ví dụ (Anthropic khuyến nghị khoảng 3–5) gồm cả đầu vào và đầu ra mong muốn. Kỹ thuật này đặc biệt hữu ích khi bạn cần định dạng nhất quán, như phân loại, trích xuất thông tin hay viết theo khuôn mẫu.' },
      { type: 'prompt',
        bad: 'Phân loại các phản hồi khách hàng sau là tích cực hay tiêu cực.',
        good: `Phân loại phản hồi khách hàng thành: Tích cực / Tiêu cực / Trung lập, kèm chủ đề chính. Làm theo đúng định dạng các ví dụ:

Phản hồi: "Giao hàng nhanh, đóng gói cẩn thận."
Kết quả: Tích cực | Giao hàng

Phản hồi: "Áo mặc 2 lần đã phai màu, thất vọng."
Kết quả: Tiêu cực | Chất lượng sản phẩm

Phản hồi: "Shop có bán size XXL không?"
Kết quả: Trung lập | Hỏi thông tin

Bây giờ phân loại các phản hồi sau:
[dán danh sách]`,
        why: 'Ba ví dụ cho thấy rõ nhãn nào được dùng, chủ đề đặt tên thế nào và định dạng một dòng. Kết quả sẽ đồng nhất, dễ dán vào Excel để thống kê.' },
      { type: 'callout', tone: 'tip', title: 'Chọn ví dụ thông minh', text: 'Theo Anthropic, ví dụ tốt cần <strong>sát thực tế</strong> (giống việc thật của bạn), <strong>đa dạng</strong> (bao phủ trường hợp khó như câu hỏi trung lập ở trên) và <strong>tách bạch</strong> (bọc trong thẻ như <code>&lt;vi_du&gt;</code> để AI không nhầm với chỉ dẫn). Nếu mọi ví dụ đều giống nhau, AI có thể bắt chước cả những đặc điểm bạn không muốn. Mẹo: bạn có thể nhờ chính AI đánh giá hoặc viết thêm ví dụ từ bộ mẫu ban đầu.' },

      { type: 'h', text: 'Chia nhỏ tác vụ và yêu cầu suy nghĩ từng bước' },
      { type: 'p', text: 'Một prompt yêu cầu quá nhiều việc cùng lúc dễ khiến AI bỏ sót hoặc làm hời hợt. Giải pháp là <strong>chia nhỏ tác vụ</strong> và tạo <strong>chuỗi prompt (prompt chaining)</strong>: kết quả của bước trước làm đầu vào cho bước sau. Bạn kiểm tra được từng bước và sửa ngay chỗ sai.' },
      { type: 'example', title: 'Chuỗi prompt viết bài thuyết trình', text: 'Bước 1: “Đọc báo cáo này và liệt kê 5 phát hiện quan trọng nhất.” → Bạn chọn 3 phát hiện. Bước 2: “Với 3 phát hiện này, đề xuất dàn ý thuyết trình 8 slide.” → Bạn chỉnh dàn ý. Bước 3: “Viết nội dung chi tiết cho từng slide theo dàn ý đã chốt.” Mỗi bước ngắn, dễ kiểm soát hơn nhiều so với một prompt “làm hết cho tôi”.' },
      { type: 'p', text: 'Với bài toán cần suy luận (tính toán, so sánh phương án, phân tích logic), hãy yêu cầu AI <strong>suy nghĩ từng bước (chain of thought)</strong> trước khi đưa ra kết luận. Việc viết ra các bước trung gian giúp mô hình ít nhảy cóc sai hơn, và giúp bạn thấy được lập luận để kiểm tra.' },
      { type: 'callout', tone: 'note', title: 'Khi mô hình đã có chế độ suy luận', text: 'Các mô hình mới của OpenAI, Anthropic và Google đều có chế độ “suy nghĩ” (thinking/reasoning) tự lập luận trước khi trả lời. Khi chế độ này đang bật, hướng dẫn của Anthropic khuyên ưu tiên chỉ dẫn chung như “hãy suy nghĩ thấu đáo” thay vì tự viết sẵn từng bước — lập luận của mô hình thường vượt xa kế hoạch con người kê ra. Yêu cầu “suy nghĩ từng bước” thủ công vẫn là phương án dự phòng tốt khi chế độ suy luận tắt, và vẫn hữu ích khi bạn muốn <em>thấy</em> cách tính để tự kiểm tra như ví dụ dưới đây.' },
      { type: 'prompt',
        bad: 'Nên chọn gói vay A hay B?',
        good: `Tôi cần vay 200 triệu đồng trong 3 năm để mua xe. Có 2 lựa chọn:
- Gói A: lãi suất cố định 9%/năm suốt 3 năm.
- Gói B: lãi suất ưu đãi 7%/năm trong năm đầu, sau đó thả nổi (dự kiến khoảng 11%/năm).

Hãy suy nghĩ từng bước: (1) ước tính tổng tiền lãi mỗi gói theo dư nợ giảm dần, trình bày cách tính; (2) phân tích rủi ro của lãi thả nổi; (3) cuối cùng mới đưa ra khuyến nghị kèm điều kiện nên chọn gói nào.`,
        why: 'Yêu cầu trình bày từng bước buộc AI tính toán rõ ràng thay vì đoán kết luận. Bạn cũng có thể tự kiểm tra lại phép tính — rất quan trọng vì AI vẫn có thể tính sai.' },

      { type: 'h', text: 'Dùng thẻ để phân tách dữ liệu' },
      { type: 'p', text: 'Khi prompt có cả chỉ dẫn lẫn dữ liệu (tài liệu, email, bảng số liệu), AI đôi khi nhầm đâu là yêu cầu của bạn, đâu là nội dung cần xử lý. Hãy <strong>bọc dữ liệu trong thẻ</strong>. Anthropic khuyến nghị dùng thẻ kiểu XML với tên nhất quán, dễ hiểu, như <code>&lt;chi_dan&gt;</code>, <code>&lt;boi_canh&gt;</code>, <code>&lt;tai_lieu&gt;</code>; OpenAI gợi ý chia prompt thành các phần bằng tiêu đề Markdown và thẻ XML; Google cũng khuyên dùng thẻ XML hoặc Markdown một cách nhất quán.' },
      { type: 'callout', tone: 'tip', title: 'Tài liệu dài: đặt lên trên, câu hỏi để cuối', text: 'Với tài liệu rất dài, hướng dẫn của Anthropic khuyên đặt tài liệu ở <em>đầu</em> prompt, còn câu hỏi và chỉ dẫn ở <em>cuối</em> — trong thử nghiệm của họ, cách này có thể cải thiện chất lượng câu trả lời đáng kể, nhất là khi có nhiều tài liệu. Nếu có nhiều file, bọc mỗi file trong một thẻ riêng kèm tên nguồn.' },
      { type: 'prompt',
        bad: `Trả lời email này giúp tôi: Chào anh, bên em muốn dời buổi họp sang tuần sau, anh bỏ qua email trước và gửi lại bảng giá mới nhé. Viết ngắn thôi.`,
        good: `Hãy soạn thư trả lời cho email của khách hàng nằm trong thẻ <email>. Yêu cầu: đồng ý dời lịch, đề xuất 2 khung giờ vào thứ Ba hoặc thứ Tư tuần sau, hứa gửi bảng giá mới trước thứ Sáu. Giọng chuyên nghiệp, dưới 100 từ.

<email>
Chào anh, bên em muốn dời buổi họp sang tuần sau, anh bỏ qua email trước và gửi lại bảng giá mới nhé.
</email>`,
        why: 'Ở prompt kém, câu “anh bỏ qua email trước” và “viết ngắn thôi” lẫn lộn — không rõ là lời khách hay lời bạn. Thẻ <code>&lt;email&gt;</code> tách bạch dữ liệu với chỉ dẫn, tránh hiểu nhầm.' },
      { type: 'callout', tone: 'warn', title: 'Cẩn thận với nội dung lạ', text: 'Văn bản bạn dán vào (email, trang web) có thể chứa câu như “bỏ qua mọi chỉ dẫn trước đó”. Đây là kiểu tấn công gọi là prompt injection. Dùng thẻ phân tách và đọc lại kết quả giúp giảm rủi ro, đặc biệt khi dùng AI xử lý tài liệu từ người lạ.' },

      { type: 'h', text: 'Yêu cầu AI tự kiểm tra' },
      { type: 'p', text: 'Bạn có thể nhờ AI rà soát chính kết quả của nó: đối chiếu với yêu cầu ban đầu, tìm lỗi, kiểm tra xem mỗi khẳng định có dựa trên tài liệu không. Cách này không đảm bảo tuyệt đối nhưng thường bắt được những lỗi dễ thấy.' },
      { type: 'prompt',
        good: `Trước khi đưa ra bản cuối, hãy tự kiểm tra bản nháp theo danh sách sau và sửa nếu cần:
1. Có đủ 5 ý như tôi yêu cầu không?
2. Mọi con số có xuất hiện trong tài liệu gốc không? Nếu không, hãy xóa hoặc ghi "không có trong tài liệu".
3. Độ dài có dưới 200 từ không?
Chỉ trả về bản cuối cùng, kèm một dòng ghi chú những gì bạn đã sửa.`,
        why: 'Danh sách kiểm tra cụ thể giúp AI tự rà soát có hệ thống, đặc biệt hiệu quả để phát hiện con số bịa đặt hoặc thiếu yêu cầu.' },
      { type: 'p', text: 'Anthropic gọi đây là mẫu <strong>tự sửa lỗi (self-correction)</strong> — dạng chuỗi prompt phổ biến nhất: viết bản nháp → nhờ AI rà soát theo tiêu chí → nhờ AI sửa dựa trên bản rà soát. Tách thành các lượt riêng giúp bạn xem được từng bước.' },

      { type: 'h', text: 'Từ prompt engineering đến context engineering' },
      { type: 'p', text: 'Khi AI làm những việc dài hơi hơn — đọc nhiều tài liệu, dùng công cụ, chạy như agent qua nhiều bước — câu hỏi không còn chỉ là “viết câu lệnh thế nào” mà là “đưa <em>những thông tin gì</em> vào cửa sổ ngữ cảnh”. Anthropic gọi kỹ năng này là <strong>context engineering</strong> (kỹ thuật quản lý ngữ cảnh): chọn lọc và duy trì tập thông tin tối ưu mà mô hình nhìn thấy, gồm chỉ dẫn, tài liệu, ví dụ, công cụ và lịch sử trò chuyện.' },
      { type: 'p', text: 'Lý do: ngữ cảnh là tài nguyên có hạn. Nghiên cứu mà Anthropic trích dẫn cho thấy khi ngữ cảnh càng dài, khả năng mô hình nhớ chính xác thông tin trong đó càng giảm (hiện tượng “context rot”). Nguyên tắc họ đưa ra: tìm <em>tập thông tin nhỏ nhất nhưng giàu giá trị nhất</em> để đạt kết quả mong muốn.' },
      { type: 'analogy', text: 'Hãy tưởng tượng bạn chuẩn bị tài liệu cho một cuộc họp quan trọng. Đưa cho sếp 200 trang “cho đủ” không giúp ích bằng 5 trang đúng trọng tâm. Với AI cũng vậy: dán cả kho tài liệu vào chưa chắc tốt hơn chọn ra đúng những phần liên quan.' },
      { type: 'list', items: [
        '<strong>Chọn lọc trước khi dán:</strong> chỉ đưa những phần tài liệu liên quan đến câu hỏi.',
        '<strong>Ví dụ tiêu biểu thay vì liệt kê mọi ngoại lệ:</strong> vài ví dụ đa dạng, “kinh điển” hiệu quả hơn một danh sách dài các trường hợp đặc biệt.',
        '<strong>Làm mới khi quá dài:</strong> tóm tắt những gì đã chốt rồi mở cuộc trò chuyện mới, thay vì để lịch sử phình to.',
        '<strong>Dùng tính năng dự án/bộ nhớ có chủ đích:</strong> lưu bối cảnh dùng lâu dài (vai trò, quy chuẩn), không lưu mọi thứ.'
      ] },
      { type: 'table', head: ['Kỹ thuật', 'Dùng khi nào'], rows: [
        ['Few-shot', 'Cần định dạng, phong cách hoặc cách phân loại nhất quán'],
        ['Chuỗi prompt', 'Tác vụ lớn có nhiều giai đoạn rõ ràng, cần xem kết quả trung gian'],
        ['Suy nghĩ từng bước', 'Tính toán, so sánh, suy luận logic (nhất là khi chế độ suy luận tắt)'],
        ['Thẻ phân tách', 'Prompt có tài liệu, email, dữ liệu dài'],
        ['Tự kiểm tra', 'Kết quả quan trọng, cần độ chính xác cao'],
        ['Context engineering', 'Làm việc với nhiều tài liệu, công cụ hoặc cuộc trò chuyện dài']
      ] }
    ],
    keyPoints: [
      'Few-shot: đưa khoảng 3–5 ví dụ sát thực tế, đa dạng, bọc trong thẻ để có kết quả nhất quán.',
      'Chia tác vụ lớn thành chuỗi prompt nhỏ; với mô hình có chế độ suy luận, ưu tiên chỉ dẫn chung thay vì kê từng bước.',
      'Bọc dữ liệu trong thẻ (như <code>&lt;tai_lieu&gt;</code>); tài liệu dài đặt trên, câu hỏi để cuối.',
      'Cho AI một danh sách tự kiểm tra, hoặc chạy vòng nháp → rà soát → sửa.',
      'Context engineering: đưa vào ngữ cảnh tập thông tin nhỏ nhất nhưng giá trị nhất.'
    ],
    quiz: [
      { q: 'Few-shot prompting là gì?', options: ['Viết prompt thật ngắn', 'Hỏi AI nhiều lần cùng một câu', 'Chỉ dùng AI vài lần mỗi ngày', 'Đưa kèm vài ví dụ đầu vào và đầu ra mong muốn trong prompt'], answer: 3, explain: 'Few-shot là cung cấp một số ví dụ mẫu để AI hiểu định dạng và cách làm mong muốn.' },
      { q: 'Vì sao nên bọc tài liệu dán vào trong một cặp thẻ, ví dụ thẻ “email” mở và đóng?', options: ['Để AI tách bạch được đâu là dữ liệu, đâu là chỉ dẫn của bạn', 'Vì AI chỉ đọc được văn bản trong thẻ', 'Để câu trả lời có định dạng HTML', 'Để tiết kiệm token'], answer: 0, explain: 'Thẻ phân tách giúp tránh nhầm lẫn giữa nội dung cần xử lý và yêu cầu, đồng thời giảm rủi ro prompt injection.' },
      { q: 'Bạn cần AI viết một báo cáo dài gồm phân tích số liệu, dàn ý và nội dung chi tiết. Cách nào hiệu quả nhất?', options: ['Một prompt duy nhất yêu cầu làm tất cả', 'Chia thành chuỗi prompt: phân tích → dàn ý → viết chi tiết, kiểm tra từng bước', 'Nhờ AI viết rồi nộp luôn không đọc', 'Chỉ dùng few-shot'], answer: 1, explain: 'Chuỗi prompt giúp mỗi bước tập trung, bạn kiểm soát và sửa được kết quả trung gian.' }
    ],
    resources: [
      { title: 'Prompt Engineering Interactive Tutorial — Anthropic (GitHub)', url: 'https://github.com/anthropics/prompt-eng-interactive-tutorial', note: '9 chương thực hành, tiếng Anh, miễn phí' },
      { title: 'Effective context engineering for AI agents — Anthropic', url: 'https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents', note: 'Bài viết kỹ thuật, tiếng Anh' },
      { title: 'Prompting best practices — Anthropic (Claude Docs)', url: 'https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices', note: 'Tài liệu chính thức: ví dụ, thẻ XML, suy luận, chuỗi prompt' },
      { title: 'ChatGPT Prompt Engineering for Developers — DeepLearning.AI', url: 'https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/', note: 'Khóa ngắn, tiếng Anh, miễn phí' }
    ],
    video: { id: 'ysPbXH0LpIE', title: 'Prompting 101 | Code w/ Claude', channel: 'Anthropic', lang: 'en', minutes: 25 },
    updated: '2026-09'
  },

  /* =========================================================
     T2-B4: Ảo giác AI và cách kiểm chứng
     ========================================================= */
  't2-b4': {
    duration: 16,
    summary: 'Ảo giác AI là gì, vì sao chatbot bịa thông tin rất tự tin, và cách kiểm chứng hiện đại với trích dẫn, tìm kiếm có nguồn và deep research.',
    goals: [
      'Hiểu ảo giác (hallucination) là gì và vì sao nó xảy ra',
      'Nhận biết các dấu hiệu và loại nội dung dễ bị ảo giác',
      'Áp dụng prompt và quy trình kiểm chứng để giảm rủi ro'
    ],
    blocks: [
      { type: 'p', text: 'Năm 2023, một luật sư ở Mỹ nộp lên tòa án bản lập luận trích dẫn nhiều vụ án tiền lệ do ChatGPT gợi ý. Vấn đề là các vụ án đó không hề tồn tại — chatbot đã bịa ra chúng, kèm tên và trích dẫn trông rất thật. Luật sư này bị tòa xử phạt. Câu chuyện trở thành ví dụ kinh điển về <strong>ảo giác AI</strong>.' },

      { type: 'h', text: 'Ảo giác là gì và vì sao xảy ra' },
      { type: 'p', text: '<strong>Ảo giác (hallucination)</strong> là khi AI tạo ra thông tin sai hoặc không có thật nhưng trình bày một cách trôi chảy, tự tin. Nó có thể là một con số, một trích dẫn, một tên sách, một đường link, một điều luật hay một sự kiện lịch sử.' },
      { type: 'p', text: 'Nhớ lại bài 1: mô hình tạo văn bản bằng cách dự đoán phần tiếp theo <em>nghe hợp lý nhất</em>. Nó không có cơ chế tự nhiên nào để nói “tôi không biết” trừ khi được huấn luyện hoặc hướng dẫn làm vậy. Khi thiếu thông tin, nó vẫn có xu hướng tạo ra thứ trông giống câu trả lời đúng.' },
      { type: 'p', text: 'Nghiên cứu của OpenAI công bố năm 2025 (“Why language models hallucinate”) chỉ ra thêm một nguyên nhân: cách huấn luyện và chấm điểm mô hình thường <em>thưởng cho việc đoán</em> hơn là thừa nhận “tôi không chắc” — giống bài thi trắc nghiệm không trừ điểm câu sai, nên đoán bừa vẫn có lợi hơn bỏ trống. Mô hình mới ngày càng ít ảo giác hơn, nhưng chưa nhà cung cấp nào loại bỏ được hoàn toàn.' },
      { type: 'analogy', text: 'Hãy tưởng tượng một học sinh rất giỏi văn nhưng đi thi mà quên bài. Thay vì để trống, em viết một bài trôi chảy, dùng từ chuyên môn, trích dẫn “theo nhà nghiên cứu X”. Đọc lướt thì rất thuyết phục — nhưng nhà nghiên cứu X có thể không tồn tại. Chatbot đôi khi cũng như vậy.' },

      { type: 'h', text: 'Nội dung nào dễ bị ảo giác' },
      { type: 'list', items: [
        '<strong>Trích dẫn, nguồn tham khảo, đường link:</strong> tên bài báo, tác giả, số trang, URL rất hay bị bịa.',
        '<strong>Con số cụ thể:</strong> thống kê, ngày tháng, số liệu tài chính, dân số.',
        '<strong>Thông tin ít phổ biến:</strong> người không nổi tiếng, doanh nghiệp nhỏ, sự kiện địa phương, luật và quy định cụ thể của Việt Nam.',
        '<strong>Sự kiện gần đây:</strong> xảy ra sau mốc giới hạn kiến thức của mô hình.',
        '<strong>Câu hỏi có tiền đề sai:</strong> “Vì sao Einstein đoạt giải Nobel Văn học?” — AI có thể “hùa theo” thay vì sửa tiền đề.'
      ] },
      { type: 'callout', tone: 'warn', title: 'Tự tin không có nghĩa là đúng', text: 'Giọng văn chắc chắn không phải là dấu hiệu độ chính xác. AI có thể dùng cùng một giọng khẳng định cho cả thông tin đúng lẫn thông tin bịa. Đừng dùng cảm giác “nghe có vẻ đúng” làm căn cứ.' },

      { type: 'h', text: 'Prompt giúp giảm ảo giác' },
      { type: 'p', text: 'Tài liệu của Anthropic về giảm ảo giác đưa ra các kỹ thuật mà bạn có thể áp dụng ngay khi chat:' },
      { type: 'prompt',
        bad: 'Cho tôi 5 nghiên cứu khoa học chứng minh uống cà phê tốt cho trí nhớ, kèm link.',
        good: `Tôi đang tìm hiểu mối liên hệ giữa cà phê và trí nhớ. Hãy tóm tắt những gì giới khoa học hiện biết, phân biệt rõ điều đã được chứng minh khá chắc chắn và điều còn tranh cãi.
Nếu bạn không chắc về một thông tin, hãy nói rõ là không chắc. Đừng đưa ra tên nghiên cứu hay đường link cụ thể trừ khi bạn tìm được qua công cụ tìm kiếm; thay vào đó, gợi ý từ khóa để tôi tự tra trên Google Scholar hoặc PubMed.`,
        why: 'Cho phép AI nói “không chắc/không biết” và không ép nó bịa ra nguồn cụ thể. Bạn nhận được bức tranh tổng quan kèm cách tự kiểm chứng.' },
      { type: 'prompt',
        bad: 'Theo báo cáo này, doanh thu tăng bao nhiêu và vì sao?',
        good: `Dựa CHỈ vào tài liệu trong thẻ <bao_cao>, hãy trả lời: doanh thu tăng bao nhiêu và vì sao?
Trước khi trả lời, trích nguyên văn các câu trong tài liệu làm căn cứ. Nếu tài liệu không đề cập, hãy nói "Tài liệu không có thông tin này" thay vì suy đoán.

<bao_cao>
[dán báo cáo]
</bao_cao>`,
        why: 'Giới hạn nguồn vào tài liệu cụ thể và yêu cầu trích dẫn nguyên văn giúp bạn đối chiếu nhanh từng khẳng định với văn bản gốc.' },
      { type: 'callout', tone: 'tip', title: 'Rút lại khẳng định không có căn cứ', text: 'Anthropic gợi ý thêm một bước: sau khi viết xong, yêu cầu AI tìm câu trích dẫn hỗ trợ cho <em>từng</em> khẳng định; khẳng định nào không tìm được trích dẫn thì phải xóa và đánh dấu chỗ đã xóa. Bạn cũng có thể hỏi cùng một câu vài lần — nếu các câu trả lời mâu thuẫn nhau, đó là dấu hiệu ảo giác.' },

      { type: 'h', text: 'Kiểm chứng khi AI đã biết tìm kiếm' },
      { type: 'p', text: 'Ngày nay ChatGPT, Claude, Gemini và Copilot đều có thể <strong>tìm kiếm web</strong> và gắn nguồn vào câu trả lời; tính năng <strong>nghiên cứu sâu (deep research)</strong> còn đọc hàng chục trang rồi viết báo cáo đầy đủ trích dẫn. Google cũng khuyến nghị “neo” câu trả lời vào kết quả tìm kiếm (grounding) để giảm ảo giác. Đây là tiến bộ lớn — nhưng nguồn trích dẫn chỉ có giá trị khi bạn thực sự kiểm tra nó.' },
      { type: 'list', items: [
        '<strong>Bật tìm kiếm cho câu hỏi về sự thật:</strong> với tin tức, số liệu, quy định, hãy yêu cầu “tìm kiếm web và dẫn nguồn cho từng ý”.',
        '<strong>Nguồn có nói đúng điều đó không?</strong> AI có thể trích một trang có thật nhưng tóm tắt sai, lấy số liệu cũ hoặc gán ý kiến của người khác cho nguồn.',
        '<strong>Nguồn có đáng tin không?</strong> Ưu tiên trang chính thức (cơ quan nhà nước, văn bản gốc, tạp chí khoa học) hơn blog, diễn đàn hay trang tổng hợp.',
        '<strong>Đọc ngang (lateral reading):</strong> mở một tab mới, tìm xem các nguồn độc lập khác nói gì về cùng thông tin, thay vì chỉ đọc sâu trong một nguồn duy nhất.',
        '<strong>Báo cáo deep research là bản nháp:</strong> dài và có nhiều trích dẫn không có nghĩa là mọi câu đều đúng; kiểm tra các con số và kết luận then chốt.'
      ] },
      { type: 'prompt',
        bad: 'Luật mới về AI ở Việt Nam quy định gì?',
        good: `Hãy tìm kiếm web và tóm tắt các quy định chính của Luật Trí tuệ nhân tạo của Việt Nam liên quan đến người dùng cá nhân.
- Ưu tiên nguồn chính thức (chinhphu.vn, cổng thông tin các bộ, văn bản luật gốc).
- Với mỗi ý, ghi rõ nguồn và số điều nếu có.
- Tách riêng những điểm bạn không tìm được nguồn chính thức xác nhận.`,
        why: 'Buộc AI dùng tìm kiếm, ưu tiên nguồn gốc và đánh dấu phần chưa chắc chắn — bạn biết ngay chỗ nào cần mở ra đọc kỹ.' },

      { type: 'h', text: 'Quy trình kiểm chứng' },
      { type: 'p', text: 'Mức độ kiểm chứng nên tương xứng với mức độ quan trọng. Nhờ AI gợi ý tên cho con mèo thì không cần kiểm tra. Nhưng thông tin về sức khỏe, pháp luật, tài chính, hay bất cứ thứ gì bạn sẽ gửi cho sếp, khách hàng, thầy cô — bắt buộc phải kiểm chứng.' },
      { type: 'steps', items: [
        { title: 'Xác định khẳng định quan trọng', text: 'Gạch ra các con số, tên riêng, trích dẫn, ngày tháng và kết luận then chốt trong câu trả lời.' },
        { title: 'Tìm nguồn gốc độc lập', text: 'Tra trên trang chính thức (cơ quan nhà nước, tổ chức uy tín, tài liệu gốc), không chỉ dựa vào một bài blog hay chính AI khác.' },
        { title: 'Mở từng đường link', text: 'Nếu AI đưa link, hãy bấm vào xem trang có tồn tại và có thực sự nói điều AI nói không.' },
        { title: 'Hỏi ngược lại', text: 'Hỏi AI “Bạn chắc chắn đến đâu về điều này? Có điểm nào có thể sai không?” hoặc hỏi lại ở cuộc trò chuyện mới để xem câu trả lời có nhất quán.' },
        { title: 'Hỏi chuyên gia khi cần', text: 'Với quyết định y tế, pháp lý, tài chính lớn, AI chỉ nên là bước tìm hiểu ban đầu; người có chuyên môn mới là người quyết định.' }
      ] },
      { type: 'callout', tone: 'note', title: 'Một phép thử nhanh', text: 'Chọn ngẫu nhiên 2–3 trích dẫn trong câu trả lời và mở ra đọc. Nếu có dù chỉ một nguồn không nói điều AI khẳng định, hãy kiểm tra kỹ toàn bộ phần còn lại.' }
    ],
    keyPoints: [
      'Ảo giác là khi AI tạo ra thông tin sai nhưng trình bày trôi chảy, tự tin.',
      'Nguyên nhân: mô hình dự đoán văn bản nghe hợp lý, và quá trình huấn luyện thường thưởng cho việc đoán hơn là nói “không chắc”.',
      'Trích dẫn, link, con số, thông tin ít phổ biến và sự kiện mới là vùng rủi ro cao.',
      'Cho phép AI nói “không biết”, giới hạn vào tài liệu, yêu cầu trích dẫn và rút lại khẳng định không có căn cứ.',
      'Tìm kiếm web và deep research có dẫn nguồn giúp kiểm chứng dễ hơn — nhưng phải mở nguồn ra đối chiếu.'
    ],
    quiz: [
      { q: 'Ảo giác AI (hallucination) là gì?', options: ['AI bị lỗi và ngừng trả lời', 'AI tạo ra thông tin sai hoặc không có thật nhưng trình bày rất tự tin', 'AI tạo ra hình ảnh kỳ lạ', 'AI trả lời quá chậm'], answer: 1, explain: 'Ảo giác là hiện tượng mô hình sinh ra nội dung sai hoặc bịa đặt một cách trôi chảy, thuyết phục.' },
      { q: 'Loại nội dung nào có rủi ro bị ảo giác CAO nhất?', options: ['Gợi ý tên cho thú cưng', 'Viết lại một đoạn văn cho mượt hơn', 'Danh sách trích dẫn khoa học kèm đường link cụ thể', 'Ý tưởng cho bữa tiệc sinh nhật'], answer: 2, explain: 'Trích dẫn, tên tài liệu và đường link là những thứ AI rất hay bịa vì chúng có hình thức dễ “đoán” nhưng nội dung phải chính xác tuyệt đối.' },
      { q: 'Cách nào giúp giảm ảo giác khi hỏi về một tài liệu?', options: ['Yêu cầu AI trả lời chỉ dựa vào tài liệu, trích nguyên văn làm căn cứ và nói rõ khi tài liệu không đề cập', 'Yêu cầu AI trả lời thật nhanh', 'Hỏi bằng tiếng Anh', 'Nói với AI rằng bạn sẽ thưởng nếu nó trả lời đúng'], answer: 0, explain: 'Giới hạn nguồn, yêu cầu trích dẫn và cho phép nói “không có thông tin” là các kỹ thuật được Anthropic khuyến nghị.' }
    ],
    resources: [
      { title: 'Reduce hallucinations — Anthropic (Claude Docs)', url: 'https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/reduce-hallucinations', note: 'Tài liệu chính thức, tiếng Anh' },
      { title: 'Why language models hallucinate — OpenAI', url: 'https://openai.com/index/why-language-models-hallucinate/', note: 'Bài viết nghiên cứu, tiếng Anh' },
      { title: 'AI Fluency: Framework & Foundations — Anthropic Academy', url: 'https://anthropic.skilljar.com/ai-fluency-framework-foundations', note: 'Khóa học miễn phí, tiếng Anh; phần “Discernment” về đánh giá kết quả AI' }
    ],
    video: { id: 'cfqtFvWOfg0', title: 'Why Large Language Models Hallucinate', channel: 'IBM Technology', lang: 'en', minutes: 10 },
    updated: '2026-09'
  },

  /* =========================================================
     T2-B5: AI cho công việc và học tập
     ========================================================= */
  't2-b5': {
    duration: 16,
    summary: 'Ứng dụng AI thực tế: viết email, tóm tắt, phân tích dữ liệu, học ngoại ngữ và dùng AI làm gia sư thay vì chép bài.',
    goals: [
      'Áp dụng AI vào các việc văn phòng hằng ngày: email, tóm tắt, phân tích dữ liệu',
      'Dùng AI làm gia sư để thực sự hiểu bài, học ngoại ngữ hiệu quả',
      'Biết giới hạn: việc gì nên tự làm, việc gì nên để AI hỗ trợ'
    ],
    blocks: [
      { type: 'p', text: 'Bạn đã có đủ “vũ khí”: hiểu cách chatbot hoạt động, biết viết prompt, biết kiểm chứng. Bài này là bộ sưu tập các tình huống thực tế — mỗi tình huống kèm prompt mẫu để bạn sao chép và điều chỉnh cho công việc của mình.' },
      { type: 'callout', tone: 'note', title: 'Nguyên tắc vàng', text: 'AI là người trợ lý tạo bản nháp nhanh; <strong>bạn là người chịu trách nhiệm cuối cùng</strong>. Mọi thứ gửi đi dưới tên bạn, hãy đọc lại, sửa và kiểm chứng.' },

      { type: 'h', text: 'Viết lách và giao tiếp công việc' },
      { type: 'p', text: 'Email, tin nhắn công việc, biên bản họp, thông báo nội bộ là những việc tốn thời gian nhưng AI làm rất tốt khi có đủ thông tin. Mẹo: bạn cung cấp <em>ý chính</em>, AI lo phần <em>câu chữ</em>.' },
      { type: 'prompt',
        bad: 'Viết email từ chối khách hàng.',
        good: `Tôi là nhân viên kinh doanh công ty in ấn. Khách hàng (anh Tuấn, công ty ABC) yêu cầu giảm giá 30% cho đơn in 5.000 cuốn catalogue. Chúng tôi chỉ giảm được tối đa 10%, nhưng có thể tặng miễn phí phí giao hàng và đẩy nhanh tiến độ thêm 2 ngày.
Viết email từ chối mức 30% một cách khéo léo, giữ quan hệ tốt, nêu rõ đề xuất thay thế và kết bằng lời mời gọi điện trao đổi. Giọng chuyên nghiệp, ấm áp. Dưới 180 từ.`,
        why: 'AI biết rõ bối cảnh đàm phán, giới hạn thực tế và mục tiêu giữ khách, nên viết được email vừa từ chối vừa mở ra phương án mới.' },
      { type: 'p', text: 'Bạn cũng có thể dán ghi chú lộn xộn sau cuộc họp và nhờ AI sắp xếp thành biên bản gồm: quyết định đã chốt, việc cần làm, người phụ trách, hạn chót. Hãy kiểm tra kỹ tên người và hạn chót vì đây là chỗ dễ sai.' },

      { type: 'h', text: 'Tóm tắt và phân tích dữ liệu' },
      { type: 'p', text: 'AI giúp bạn đọc nhanh tài liệu dài: báo cáo, hợp đồng, bài nghiên cứu. Nhiều chatbot còn cho phép tải lên file bảng tính để phân tích, vẽ biểu đồ — thường bằng cách tự viết và chạy code phía sau, nên phép tính đáng tin hơn “tính nhẩm”. Khi cần tổng quan một chủ đề từ nhiều nguồn trên mạng (thị trường, đối thủ, xu hướng), hãy thử tính năng nghiên cứu sâu (deep research) đã học ở bài 1 và bài 4.' },
      { type: 'prompt',
        bad: 'Phân tích file Excel này.',
        good: `File đính kèm là doanh số bán hàng 6 tháng của 4 chi nhánh (cột: Tháng, Chi nhánh, Sản phẩm, Số lượng, Doanh thu).
Tôi cần chuẩn bị báo cáo cho sếp. Hãy:
1. Tính tổng doanh thu theo chi nhánh và theo tháng.
2. Chỉ ra chi nhánh và sản phẩm tăng trưởng tốt nhất, kém nhất.
3. Nêu 3 điểm bất thường đáng chú ý (nếu có).
4. Đề xuất 1 biểu đồ phù hợp nhất để trình bày xu hướng.
Trình bày các phép tính rõ ràng để tôi kiểm tra lại được.`,
        why: 'Mô tả cấu trúc dữ liệu, mục đích và các câu hỏi cụ thể. Yêu cầu trình bày phép tính giúp bạn đối chiếu lại với số liệu gốc.' },
      { type: 'callout', tone: 'warn', title: 'Kiểm tra lại con số', text: 'AI có thể đọc nhầm cột, tính sai hoặc bỏ sót dòng. Hãy kiểm tra ngẫu nhiên vài con số bằng Excel trước khi đưa vào báo cáo. Và đừng tải lên dữ liệu mật của công ty nếu chưa được phép (xem bài 6).' },

      { type: 'h', text: 'AI làm gia sư, không phải máy chép bài' },
      { type: 'p', text: 'Đây là điểm quan trọng nhất cho người đang đi học. Nếu bạn nhờ AI làm bài tập rồi chép lại, bạn có điểm nhưng không có kiến thức — và nhiều trường đã coi đó là gian lận. Nhưng nếu dùng AI như một gia sư kiên nhẫn, sẵn sàng giải thích lại lần thứ mười, nó có thể giúp bạn học nhanh hơn bao giờ hết.' },
      { type: 'prompt',
        bad: 'Giải bài toán này giúp tôi: [đề bài phương trình bậc hai]',
        good: `Bạn là gia sư Toán kiên nhẫn. Tôi đang học lớp 9 và gặp khó với bài phương trình bậc hai dưới đây.
Đừng giải hộ tôi. Hãy hướng dẫn tôi từng bước bằng cách đặt câu hỏi gợi mở, chờ tôi trả lời rồi mới sang bước tiếp theo. Nếu tôi sai, hãy chỉ ra tôi sai ở đâu và vì sao, rồi để tôi thử lại.

Đề bài: [dán đề]`,
        why: 'Bạn tự tư duy qua từng bước, AI chỉ đóng vai người dẫn đường. Kiến thức ở lại trong đầu bạn chứ không nằm trên màn hình.' },
      { type: 'list', items: [
        '<strong>Giải thích theo nhiều cách:</strong> “Giải thích đạo hàm như cho học sinh lớp 7, rồi dùng một ví dụ về tốc độ xe máy.”',
        '<strong>Tự kiểm tra kiến thức:</strong> “Đặt cho tôi 5 câu hỏi về chương Quang hợp, từng câu một, chấm điểm và giải thích sau mỗi câu.”',
        '<strong>Nhận phản hồi cho bài viết của mình:</strong> “Đây là bài luận tôi tự viết. Chỉ ra 3 điểm yếu lớn nhất về lập luận, đừng viết lại hộ.”',
        '<strong>Lập kế hoạch ôn thi:</strong> “Tôi có 3 tuần trước kỳ thi, đây là đề cương. Chia lịch ôn mỗi ngày 2 tiếng.”'
      ] },

      { type: 'h', text: 'Học ngoại ngữ cùng AI' },
      { type: 'p', text: 'Chatbot là bạn luyện ngoại ngữ có mặt 24/7, không ngại khi bạn nói sai. Bạn có thể luyện hội thoại, sửa bài viết, học từ vựng theo ngữ cảnh.' },
      { type: 'prompt',
        bad: 'Sửa bài IELTS Writing này.',
        good: `Bạn là giám khảo IELTS. Dưới đây là bài Writing Task 2 tôi tự viết (đề: "Some people think university education should be free. Do you agree?"). Mục tiêu của tôi là band 6.5.
1. Ước lượng band theo 4 tiêu chí chấm và giải thích ngắn gọn từng tiêu chí.
2. Liệt kê các lỗi ngữ pháp và từ vựng dạng bảng: Câu gốc | Lỗi | Sửa lại | Giải thích bằng tiếng Việt.
3. Gợi ý 5 từ/cụm từ nâng cao tôi có thể dùng cho chủ đề này.
Không viết lại toàn bộ bài.

<bai_viet>
[dán bài]
</bai_viet>`,
        why: 'Bạn nhận phản hồi có cấu trúc để tự sửa và học từ lỗi của chính mình. Lưu ý: band điểm AI ước lượng chỉ mang tính tham khảo, không thay thế giám khảo thật.' },
      { type: 'example', title: 'Luyện hội thoại nhập vai', text: '“Hãy đóng vai nhân viên khách sạn ở London. Tôi là khách muốn đổi phòng vì phòng ồn. Nói chuyện bằng tiếng Anh đơn giản (trình độ B1). Sau mỗi câu của tôi, ghi chú ngắn bằng tiếng Việt nếu tôi dùng sai ngữ pháp, rồi tiếp tục cuộc hội thoại.” Nhiều ứng dụng chatbot còn hỗ trợ chế độ nói chuyện bằng giọng nói để luyện phát âm và phản xạ.' }
    ],
    keyPoints: [
      'Bạn cung cấp ý chính và bối cảnh, AI lo câu chữ — rồi bạn đọc lại và chịu trách nhiệm.',
      'Tóm tắt và phân tích dữ liệu: nêu rõ cấu trúc, mục đích, yêu cầu trình bày phép tính và kiểm tra lại.',
      'Dùng AI làm gia sư: yêu cầu gợi mở từng bước thay vì giải hộ.',
      'Học ngoại ngữ: nhờ sửa lỗi có giải thích, luyện hội thoại nhập vai.',
      'Chép bài từ AI mang lại điểm số tạm thời nhưng không mang lại kiến thức.'
    ],
    quiz: [
      { q: 'Cách dùng AI nào giúp học sinh thực sự hiểu bài Toán?', options: ['Chụp đề và chép lời giải AI đưa ra', 'Yêu cầu AI hướng dẫn từng bước bằng câu hỏi gợi mở, không giải hộ', 'Nhờ AI làm hết bài tập cả tuần', 'Không dùng AI vì AI luôn sai'], answer: 1, explain: 'Khi AI đóng vai gia sư đặt câu hỏi gợi mở, bạn phải tự tư duy — đó là lúc việc học thực sự diễn ra.' },
      { q: 'Nhờ AI phân tích file doanh số, bước nào KHÔNG nên bỏ qua?', options: ['Đặt tên file thật đẹp', 'Dùng thật nhiều emoji trong prompt', 'Hỏi AI bằng tiếng Anh', 'Kiểm tra ngẫu nhiên một vài con số với dữ liệu gốc trước khi đưa vào báo cáo'], answer: 3, explain: 'AI có thể đọc nhầm cột hoặc tính sai, nên cần đối chiếu với số liệu gốc.' },
      { q: 'Khi nhờ AI sửa bài IELTS Writing, yêu cầu nào giúp bạn tiến bộ nhiều nhất?', options: ['Viết lại toàn bộ bài thành band 9', 'Chỉ cho điểm, không cần giải thích', 'Liệt kê lỗi kèm cách sửa và giải thích, không viết lại toàn bộ bài', 'Dịch bài sang tiếng Việt'], answer: 2, explain: 'Phản hồi có giải thích giúp bạn hiểu lỗi và tự sửa được ở những bài sau.' }
    ],
    resources: [
      { title: 'AI Prompting for Everyone — DeepLearning.AI (Andrew Ng)', url: 'https://www.deeplearning.ai/courses/ai-prompting-for-everyone', note: 'Khóa học cho người mới: tìm thông tin, động não, viết, phân tích dữ liệu; cần đăng ký' },
      { title: 'Generative AI for Everyone — DeepLearning.AI', url: 'https://www.deeplearning.ai/courses/generative-ai-for-everyone/', note: 'Khóa học tiếng Anh, có phần ứng dụng trong công việc' },
      { title: 'AI Fluency: Framework & Foundations — Anthropic Academy', url: 'https://anthropic.skilljar.com/ai-fluency-framework-foundations', note: 'Khóa học miễn phí về cách giao việc và cộng tác với AI' }
    ],
    video: { id: 'EWvNQjAaOHw', title: 'How I use LLMs', channel: 'Andrej Karpathy', lang: 'en', minutes: 131 },
    updated: '2026-09'
  },

  /* =========================================================
     T2-B6: Quyền riêng tư, bản quyền và đạo đức
     ========================================================= */
  't2-b6': {
    duration: 18,
    summary: 'Dùng AI an toàn và có trách nhiệm: bảo vệ dữ liệu, bản quyền, thiên kiến, lừa đảo deepfake và các quy định mới như Luật AI Việt Nam, EU AI Act.',
    goals: [
      'Biết loại dữ liệu nào không nên dán vào chatbot và cách kiểm tra cài đặt quyền riêng tư',
      'Hiểu các vấn đề bản quyền và thiên kiến khi dùng nội dung do AI tạo',
      'Nhận diện lừa đảo deepfake, nắm các quy định mới về AI và áp dụng nguyên tắc dùng AI có trách nhiệm'
    ],
    blocks: [
      { type: 'p', text: 'AI mạnh đến đâu thì rủi ro khi dùng sai cũng lớn đến đó. Một đoạn dữ liệu khách hàng dán nhầm, một hình ảnh vi phạm bản quyền, một đoạn video giả mạo — đều có thể gây hậu quả thật. Bài cuối của Tầng 2 giúp bạn dùng AI vừa hiệu quả vừa an toàn.' },

      { type: 'h', text: 'Quyền riêng tư: nghĩ trước khi dán' },
      { type: 'p', text: 'Khi bạn gửi nội dung cho chatbot, nội dung đó được truyền đến máy chủ của nhà cung cấp. Tùy sản phẩm, gói dịch vụ và cài đặt, dữ liệu có thể được lưu lại một thời gian, được nhân viên xem xét để đảm bảo an toàn, hoặc được dùng để cải thiện mô hình. Các gói dành cho doanh nghiệp thường có cam kết bảo mật chặt chẽ hơn gói cá nhân miễn phí, nhưng bạn cần đọc chính sách cụ thể.' },
      { type: 'analogy', text: 'Hãy coi việc dán thông tin vào chatbot giống như gửi email cho một công ty bên ngoài. Bạn sẽ không gửi mật khẩu ngân hàng hay danh sách lương của đồng nghiệp qua email cho người lạ — vậy cũng đừng dán chúng vào chatbot.' },
      { type: 'list', items: [
        '<strong>Không bao giờ dán:</strong> mật khẩu, mã OTP, số thẻ ngân hàng, khóa API.',
        '<strong>Hết sức thận trọng với:</strong> số CCCD, hồ sơ bệnh án, thông tin khách hàng, bảng lương, hợp đồng mật, mã nguồn nội bộ, chiến lược kinh doanh chưa công bố.',
        '<strong>Ẩn danh hóa khi có thể:</strong> thay tên thật bằng “Khách hàng A”, bỏ số điện thoại, địa chỉ trước khi nhờ AI xử lý.'
      ] },
      { type: 'prompt',
        bad: `Viết email trả lời khiếu nại cho khách hàng Nguyễn Văn Hùng, SĐT 0912xxxxxx, số tài khoản 1903xxxxxxxx, địa chỉ 25 ngõ 10 phố X, về việc bị trừ tiền 2 lần.`,
        good: `Viết email trả lời khiếu nại cho một khách hàng (gọi là "anh [Tên]") về việc bị trừ tiền 2 lần cho cùng một đơn hàng. Nội dung: xin lỗi, xác nhận đã kiểm tra, hoàn tiền trong 3–5 ngày làm việc, tặng mã giảm giá cho lần mua sau. Giọng chân thành, chuyên nghiệp.`,
        why: 'AI không cần tên, số điện thoại hay số tài khoản thật để viết email tốt. Bạn tự điền thông tin thật vào bản cuối — dữ liệu cá nhân của khách không rời khỏi máy bạn.' },
      { type: 'callout', tone: 'warn', title: 'Tuân thủ chính sách công ty', text: 'Nhiều công ty có quy định riêng về công cụ AI được phép dùng và loại dữ liệu được đưa vào. Trước khi dùng AI cho công việc, hãy hỏi bộ phận IT hoặc quản lý. Vi phạm có thể dẫn đến kỷ luật. Ở Việt Nam, <strong>Luật Bảo vệ dữ liệu cá nhân (số 91/2025/QH15)</strong> có hiệu lực từ 1/1/2026 quy định rõ quyền của người có dữ liệu (được biết, đồng ý, truy cập, chỉnh sửa, yêu cầu xóa) và trách nhiệm của tổ chức xử lý dữ liệu — dán dữ liệu khách hàng vào công cụ AI bên ngoài cũng là một hình thức xử lý dữ liệu.' },
      { type: 'callout', tone: 'tip', title: 'Kiểm tra cài đặt của bạn', text: 'Vào phần cài đặt (Settings) của chatbot để xem: dữ liệu có được dùng để huấn luyện không, tính năng bộ nhớ đang bật hay tắt, lịch sử trò chuyện được lưu thế nào. Nhiều công cụ cho phép tắt các tùy chọn này hoặc dùng chế độ trò chuyện tạm thời.' },

      { type: 'h', text: 'Bản quyền và tính minh bạch' },
      { type: 'p', text: 'Bản quyền với nội dung do AI tạo là lĩnh vực pháp lý còn đang tranh luận và thay đổi ở nhiều quốc gia. Một số điểm bạn nên nắm:' },
      { type: 'list', items: [
        '<strong>Việc bảo hộ còn chưa rõ ràng:</strong> nhiều nơi, như Cơ quan Bản quyền Hoa Kỳ, cho rằng nội dung thuần túy do AI tạo mà thiếu đóng góp sáng tạo đủ lớn của con người thì không được bảo hộ bản quyền.',
        '<strong>AI có thể tái tạo nội dung có bản quyền:</strong> yêu cầu AI chép nguyên văn sách, lời bài hát hay vẽ “y hệt” nhân vật của hãng khác để dùng thương mại có thể vi phạm quyền của chủ sở hữu.',
        '<strong>Minh bạch khi cần:</strong> trường học, tòa soạn, nhà xuất bản và nhiều công ty yêu cầu khai báo việc dùng AI. Hãy đọc quy định và trung thực.',
        '<strong>Điều khoản sử dụng:</strong> mỗi công cụ có điều khoản riêng về quyền sử dụng nội dung tạo ra, nhất là cho mục đích thương mại.'
      ] },

      { type: 'h', text: 'Thiên kiến và deepfake' },
      { type: 'p', text: '<strong>Thiên kiến (bias)</strong>: AI học từ dữ liệu do con người tạo ra, nên có thể mang theo định kiến có sẵn trong xã hội — về giới tính, vùng miền, dân tộc, tuổi tác. Ví dụ, khi được yêu cầu tả “một bác sĩ” và “một y tá”, mô hình có thể mặc định giới tính theo khuôn mẫu. Các nhà phát triển đang nỗ lực giảm thiểu, nhưng bạn vẫn cần tỉnh táo, đặc biệt khi dùng AI hỗ trợ các quyết định ảnh hưởng đến người khác như tuyển dụng hay đánh giá nhân sự.' },
      { type: 'example', title: 'Tuyển dụng với AI', text: 'Một phòng nhân sự nhờ AI sàng lọc CV. Nếu tiêu chí không rõ ràng, AI có thể ưu ái những hồ sơ giống “hình mẫu” phổ biến trong dữ liệu. Cách làm có trách nhiệm: xác định tiêu chí khách quan trước, ẩn các thông tin không liên quan (giới tính, tuổi, quê quán) và để con người xem xét quyết định cuối cùng.' },
      { type: 'p', text: '<strong>Deepfake</strong> là hình ảnh, video hoặc giọng nói giả mạo do AI tạo ra, trông giống người thật. Kẻ gian đã dùng deepfake để giả giọng, giả mặt người thân trong cuộc gọi video nhằm lừa chuyển tiền — một hình thức lừa đảo đã được cơ quan chức năng ở Việt Nam nhiều lần cảnh báo. Công an nhiều địa phương còn cảnh báo thủ đoạn gọi video qua Zalo, Messenger, dùng deepfake và trang phục giả để <em>giả danh công an, viện kiểm sát</em>, dọa nạn nhân liên quan “vụ án bí mật” rồi yêu cầu chuyển tiền vào tài khoản “xác minh”.' },
      { type: 'example', title: 'Cuộc họp video mà chỉ có một người thật', text: 'Đầu năm 2024, một nhân viên văn phòng Hồng Kông của tập đoàn kỹ thuật Arup (Anh) tham gia cuộc họp video với “giám đốc tài chính” và nhiều “đồng nghiệp”. Tất cả những người khác trong cuộc họp đều là deepfake. Tin rằng mình đang làm theo chỉ đạo của cấp trên, nhân viên này chuyển tổng cộng khoảng 25 triệu USD cho kẻ lừa đảo qua nhiều lần. Bài học: thấy mặt, nghe giọng — kể cả nhiều người cùng lúc — không còn là bằng chứng.' },
      { type: 'steps', items: [
        { title: 'Nghi ngờ yêu cầu gấp về tiền', text: 'Cuộc gọi video ngắn, chất lượng kém, người gọi hối thúc chuyển tiền là dấu hiệu đáng ngờ.' },
        { title: 'Xác minh qua kênh khác', text: 'Tắt máy, gọi lại bằng số điện thoại bạn đã lưu từ trước, hoặc hỏi một câu chỉ người thật mới biết.' },
        { title: 'Quan sát chi tiết bất thường', text: 'Cuộc gọi rất ngắn, khuôn mặt thiếu biểu cảm, cử động không tự nhiên, ánh sáng và màu da lạ, tiếng không khớp hình — dù deepfake ngày càng khó phát hiện bằng mắt.' },
        { title: 'Nhớ rằng cơ quan chức năng không làm việc qua video call', text: 'Công an, tòa án, viện kiểm sát không yêu cầu bạn chuyển tiền hay cung cấp số dư tài khoản qua cuộc gọi video. Đòi giữ bí mật với gia đình là dấu hiệu lừa đảo rõ ràng.' },
        { title: 'Không tự tạo deepfake gây hại', text: 'Tạo hình ảnh, video giả mạo người khác để bôi nhọ, lừa đảo hay nội dung nhạy cảm là vi phạm đạo đức và có thể vi phạm pháp luật.' }
      ] },

      { type: 'h', text: 'Luật chơi mới: quy định về AI' },
      { type: 'p', text: 'Từ 2024 đến 2026, AI đã chuyển từ “vùng xám” sang lĩnh vực có luật riêng ở nhiều nơi. Hai văn bản bạn nên biết:' },
      { type: 'list', items: [
        '<strong>Việt Nam — Luật Trí tuệ nhân tạo (số 134/2025/QH15):</strong> Quốc hội thông qua ngày 10/12/2025, có hiệu lực từ 1/3/2026. Luật quản lý theo mức độ rủi ro (cao, trung bình, thấp), khẳng định AI là công cụ hỗ trợ và con người giữ quyền quyết định cuối cùng ở những việc quan trọng. Hệ thống AI trò chuyện trực tiếp với người dùng phải cho biết đó là máy; âm thanh, hình ảnh, video do AI tạo ra phải có dấu hiệu nhận biết theo quy định của Chính phủ. Luật nghiêm cấm dùng AI để thao túng nhận thức, hành vi con người hay tạo nội dung giả nhằm lừa dối, xúc phạm danh dự người khác.',
        '<strong>Liên minh châu Âu — Đạo luật AI (EU AI Act):</strong> có hiệu lực từ 1/8/2024 và áp dụng dần: các ứng dụng AI bị cấm (như thao túng, lừa dối gây hại) từ 2/2/2025; quy định cho mô hình AI đa dụng từ 2/8/2025; nghĩa vụ minh bạch từ 2/8/2026 — người dùng phải biết mình đang nói chuyện với chatbot, nội dung AI tạo phải nhận diện được và deepfake phải được gắn nhãn rõ ràng. Năm 2026, EU đã điều chỉnh lùi thời hạn cho nhóm AI rủi ro cao (tuyển dụng, chấm điểm tín dụng, giáo dục…) sang tháng 12/2027 và tháng 8/2028.'
      ] },
      { type: 'callout', tone: 'note', title: 'Điều này có ý nghĩa gì với bạn?', text: 'Nếu bạn dùng AI tạo ảnh, video hay giọng nói mô phỏng người thật để đăng công khai, hãy ghi rõ là nội dung do AI tạo. Và ngược lại, khi thấy nhãn “tạo bởi AI”, bạn biết cần đánh giá nội dung đó cẩn thận hơn. Tuy nhiên, kẻ lừa đảo sẽ không gắn nhãn — nên kỹ năng xác minh vẫn là lá chắn quan trọng nhất.' },

      { type: 'h', text: 'Dùng AI có trách nhiệm' },
      { type: 'table', head: ['Nên', 'Không nên'], rows: [
        ['Ẩn danh hóa dữ liệu trước khi dán', 'Dán mật khẩu, dữ liệu khách hàng, tài liệu mật'],
        ['Kiểm chứng thông tin quan trọng', 'Tin tuyệt đối vào câu trả lời nghe có vẻ đúng'],
        ['Khai báo dùng AI khi quy định yêu cầu', 'Nộp bài AI viết như bài của mình'],
        ['Để con người quyết định việc ảnh hưởng đến người khác', 'Giao hoàn toàn cho AI chấm điểm, tuyển dụng, kỷ luật'],
        ['Xác minh cuộc gọi, video đáng ngờ qua kênh khác', 'Chuyển tiền chỉ vì thấy mặt, nghe giọng qua video'],
        ['Ghi rõ “tạo bởi AI” khi đăng ảnh, video mô phỏng người thật', 'Tạo deepfake người khác để trêu đùa, bôi nhọ hay lừa đảo']
      ] },
      { type: 'p', text: 'Chúc mừng bạn đã hoàn thành Tầng 2! Giờ bạn đã có thể dùng chatbot AI như một người dùng chuyên nghiệp: viết prompt hiệu quả, kiểm chứng kết quả và bảo vệ bản thân cùng người khác.' }
    ],
    keyPoints: [
      'Dữ liệu dán vào chatbot được gửi đến máy chủ nhà cung cấp; không dán mật khẩu và thông tin nhạy cảm.',
      'Ẩn danh hóa dữ liệu, kiểm tra cài đặt quyền riêng tư và tuân thủ chính sách công ty.',
      'Bản quyền nội dung AI còn nhiều tranh luận; minh bạch khi dùng AI và tôn trọng quyền tác giả.',
      'Luật Trí tuệ nhân tạo Việt Nam (hiệu lực 1/3/2026) và EU AI Act yêu cầu minh bạch: nội dung AI tạo phải nhận biết được, deepfake phải gắn nhãn.',
      'Cảnh giác deepfake, kể cả cuộc gọi video nhiều người hay “giả danh công an”: luôn xác minh qua kênh khác trước khi chuyển tiền.'
    ],
    quiz: [
      { q: 'Bạn muốn nhờ AI viết email trả lời khách hàng. Cách làm nào an toàn nhất?', options: ['Dán toàn bộ thông tin khách gồm SĐT, số tài khoản để AI viết cho chính xác', 'Mô tả tình huống và dùng tên giả hoặc chỗ trống, tự điền thông tin thật sau', 'Gửi ảnh chụp CCCD của khách cho AI', 'Không cần lo vì chatbot không lưu gì'], answer: 1, explain: 'AI không cần dữ liệu cá nhân thật để viết email tốt. Ẩn danh hóa giúp bảo vệ khách hàng và tuân thủ quy định.' },
      { q: 'Bạn nhận cuộc gọi video từ “người thân” nhờ chuyển tiền gấp, hình ảnh hơi mờ. Nên làm gì?', options: ['Chuyển ngay vì đã thấy mặt', 'Tắt máy, gọi lại bằng số đã lưu hoặc hỏi câu chỉ người thật biết để xác minh', 'Chuyển một nửa số tiền cho chắc', 'Nhắn tin hỏi lại chính tài khoản đó'], answer: 1, explain: 'Deepfake có thể giả mặt và giọng. Xác minh qua một kênh độc lập là cách phòng tránh hiệu quả nhất.' },
      { q: 'Vì sao AI có thể đưa ra kết quả thiên kiến?', options: ['Vì AI cố tình phân biệt đối xử', 'Vì AI không đọc được tiếng Việt', 'Vì AI học từ dữ liệu do con người tạo ra, vốn chứa định kiến xã hội', 'Vì người dùng viết prompt quá dài'], answer: 2, explain: 'Thiên kiến trong dữ liệu huấn luyện có thể được mô hình học lại và thể hiện trong câu trả lời.' }
    ],
    resources: [
      { title: 'Luật Trí tuệ nhân tạo số 134/2025/QH15 — Cổng TTĐT Chính phủ', url: 'https://vanban.chinhphu.vn/?pageid=27160&docid=216334&classid=1&typegroupid=3', note: 'Văn bản gốc, tiếng Việt' },
      { title: 'AI Act — Ủy ban châu Âu', url: 'https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai', note: 'Tổng quan chính thức: mức rủi ro, minh bạch, mốc thời gian; tiếng Anh' },
      { title: 'Ethics of AI — Đại học Helsinki', url: 'https://ethics-of-ai.mooc.fi/', note: 'Khóa học tiếng Anh, miễn phí' },
      { title: 'Copyright and Artificial Intelligence — U.S. Copyright Office', url: 'https://www.copyright.gov/ai/', note: 'Tài liệu chính thức, tiếng Anh' }
    ],
    video: { id: 'cVvJgdm19Ak', title: 'Unmask The DeepFake: Defending Against Generative AI Deception', channel: 'IBM Technology', lang: 'en', minutes: 15 },
    updated: '2026-09'
  }

};

export default lessons;
