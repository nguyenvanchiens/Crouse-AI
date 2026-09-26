const lessons = {
  /* ================================================================
   * T4-B1: Nơ-ron nhân tạo và mạng nơ-ron
   * ================================================================ */
  't4-b1': {
    duration: 15,
    summary: 'Hiểu một nơ-ron nhân tạo hoạt động ra sao, vì sao cần hàm kích hoạt phi tuyến và cách nhiều lớp nơ-ron ghép lại để nhận diện chữ số viết tay.',
    goals: [
      'Mô tả được một nơ-ron nhân tạo: đầu vào, trọng số, bias và hàm kích hoạt',
      'Giải thích vì sao mạng nơ-ron cần lớp ẩn và hàm kích hoạt phi tuyến',
      'Hình dung được cách một mạng nơ-ron nhận diện chữ số viết tay (MNIST)'
    ],
    blocks: [
      { type: 'h', text: 'Một nơ-ron nhân tạo là gì?' },
      { type: 'p', text: 'Mạng nơ-ron (neural network) nghe có vẻ bí ẩn, nhưng đơn vị nhỏ nhất của nó lại rất đơn giản: <strong>nơ-ron nhân tạo</strong> (artificial neuron). Mỗi nơ-ron chỉ là một phép tính nhỏ: nhận vài con số, xử lý, rồi trả ra một con số.' },
      { type: 'p', text: 'Tên gọi lấy cảm hứng từ nơ-ron sinh học trong não: tế bào thần kinh nhận tín hiệu từ nhiều tế bào khác và "bắn" tín hiệu đi khi đủ mạnh. Tuy vậy, nơ-ron nhân tạo chỉ là một mô hình toán học rất đơn giản hóa, không phải bản sao của não người.' },
      { type: 'list', items: [
        '<strong>Đầu vào (input)</strong>: các con số đưa vào, ví dụ độ sáng của từng điểm ảnh.',
        '<strong>Trọng số (weight)</strong>: mỗi đầu vào được nhân với một trọng số, thể hiện đầu vào đó "quan trọng" đến mức nào. Trọng số dương là khuyến khích, âm là kìm hãm.',
        '<strong>Bias</strong> (độ lệch): một con số cộng thêm, giống như "ngưỡng" giúp nơ-ron dễ hoặc khó kích hoạt hơn.',
        '<strong>Hàm kích hoạt (activation function)</strong>: biến tổng vừa tính thành đầu ra cuối cùng.'
      ] },
      { type: 'p', text: 'Công thức gọn: <code>đầu ra = kích_hoạt(w1·x1 + w2·x2 + ... + b)</code>. Tức là: nhân từng đầu vào với trọng số, cộng tất cả lại, cộng thêm bias, rồi đưa qua hàm kích hoạt.' },
      { type: 'analogy', text: 'Hãy tưởng tượng bạn quyết định có đi xem phim tối nay không. Các đầu vào: trời có mưa không, bạn bè có đi không, phim có hay không. Mỗi yếu tố có "trọng số" riêng: bạn bè đi cùng quan trọng hơn thời tiết. Bias là tính cách của bạn: người mê phim thì bias cao, chỉ cần chút lý do là đi. Cộng tất cả lại, vượt ngưỡng thì "đi", không thì "ở nhà". Đó chính là một nơ-ron.' },
      { type: 'h', text: 'Perceptron và các hàm kích hoạt' },
      { type: 'p', text: 'Nơ-ron nhân tạo đầu tiên nổi tiếng là <strong>perceptron</strong>, do Frank Rosenblatt đề xuất năm 1958. Perceptron dùng một quy tắc cứng: tổng lớn hơn 0 thì ra 1, ngược lại ra 0. Đơn giản, nhưng khó huấn luyện vì đầu ra nhảy bậc đột ngột.' },
      { type: 'p', text: 'Mạng hiện đại dùng các hàm kích hoạt "mềm" hơn:' },
      { type: 'table', head: ['Hàm kích hoạt', 'Cách hoạt động', 'Ghi chú'], rows: [
        ['Sigmoid', 'Ép mọi số về khoảng 0 đến 1, dạng đường cong chữ S', 'Hợp để biểu diễn xác suất; dùng nhiều trong mạng thời kỳ đầu'],
        ['ReLU', 'Số âm thành 0, số dương giữ nguyên', 'Rất đơn giản, tính nhanh, là lựa chọn mặc định phổ biến hiện nay'],
        ['Bước nhảy (perceptron)', 'Ra 0 hoặc 1', 'Mang tính lịch sử, khó huấn luyện bằng gradient']
      ] },
      { type: 'code', lang: 'python', code: `import numpy as np

def relu(z):
    return np.maximum(0, z)

def sigmoid(z):
    return 1 / (1 + np.exp(-z))

x = np.array([0.8, 0.2, 0.5])    # 3 đầu vào
w = np.array([0.9, -0.4, 0.3])   # 3 trọng số
b = -0.2                          # bias

z = np.dot(w, x) + b              # tổng có trọng số + bias
print("z =", z)
print("ReLU:", relu(z), "| Sigmoid:", sigmoid(z))`, caption: 'Một nơ-ron viết bằng numpy: nhân đầu vào với trọng số, cộng bias, rồi đưa qua hàm kích hoạt.' },
      { type: 'h', text: 'Từ một nơ-ron đến một mạng: lớp ẩn' },
      { type: 'p', text: 'Một nơ-ron đơn lẻ chỉ vẽ được một "đường ranh giới" thẳng. Sức mạnh thật sự đến khi ta xếp nhiều nơ-ron thành <strong>lớp (layer)</strong>, và nối nhiều lớp liên tiếp:' },
      { type: 'list', items: [
        '<strong>Lớp đầu vào</strong>: nhận dữ liệu thô.',
        '<strong>Lớp ẩn (hidden layer)</strong>: các lớp ở giữa, tự học ra những đặc trưng trung gian. Gọi là "ẩn" vì ta không trực tiếp quy định chúng phải học gì.',
        '<strong>Lớp đầu ra</strong>: đưa ra kết quả cuối, ví dụ xác suất cho từng nhãn.'
      ] },
      { type: 'p', text: 'Mạng có nhiều lớp ẩn được gọi là mạng sâu, từ đó có tên <strong>học sâu (deep learning)</strong>.' },
      { type: 'callout', tone: 'warn', title: 'Vì sao bắt buộc phải có phi tuyến?', text: 'Nếu bỏ hàm kích hoạt, mỗi lớp chỉ là phép nhân rồi cộng (phép biến đổi tuyến tính). Xếp chồng bao nhiêu lớp tuyến tính thì kết quả vẫn tương đương <em>một</em> lớp tuyến tính duy nhất, vẫn chỉ vẽ được đường thẳng. Hàm kích hoạt phi tuyến như ReLU hay sigmoid cho phép mạng uốn cong ranh giới, nhờ vậy học được các quan hệ phức tạp như khuôn mặt, giọng nói hay ngữ nghĩa câu.' },
      { type: 'h', text: 'Ví dụ kinh điển: nhận diện chữ số viết tay (MNIST)' },
      { type: 'p', text: '<strong>MNIST</strong> là bộ dữ liệu gồm hàng chục nghìn ảnh chữ số viết tay từ 0 đến 9, mỗi ảnh 28×28 điểm ảnh, tức 784 điểm. Đây là "bài tập vỡ lòng" của học sâu và cũng là ví dụ chính trong series Neural Networks của 3Blue1Brown.' },
      { type: 'example', title: 'Một mạng nhận diện chữ số', text: 'Lớp đầu vào có 784 nơ-ron, mỗi nơ-ron chứa độ sáng của một điểm ảnh (0 là đen, 1 là trắng). Tiếp theo là hai lớp ẩn, mỗi lớp 16 nơ-ron. Lớp đầu ra có 10 nơ-ron, ứng với 10 chữ số. Khi đưa ảnh chữ "7" vào, nếu mạng đã được huấn luyện tốt, nơ-ron số 7 ở lớp đầu ra sẽ sáng nhất.' },
      { type: 'p', text: 'Trực giác mà 3Blue1Brown gợi ý: lớp ẩn đầu tiên <em>có thể</em> học phát hiện các nét nhỏ, lớp sau ghép nét thành hình như vòng tròn hay đường thẳng dài, và lớp đầu ra ghép hình thành chữ số (ví dụ vòng tròn ở trên cộng nét dọc là số 9). Thực tế các nơ-ron không luôn học gọn gàng như thế, nhưng ý tưởng "từ chi tiết nhỏ đến khái niệm lớn" là cốt lõi của học sâu.' },
      { type: 'callout', tone: 'note', title: 'Mạng này có bao nhiêu tham số?', text: 'Mỗi kết nối có một trọng số, mỗi nơ-ron (trừ lớp đầu vào) có một bias. Với mạng 784-16-16-10, tổng cộng khoảng 13.000 tham số. Nghe nhiều, nhưng so với các mô hình ngôn ngữ lớn có hàng tỷ tham số thì chỉ là hạt cát. "Huấn luyện" chính là đi tìm giá trị tốt cho tất cả các con số này, nội dung của bài tiếp theo.' }
    ],
    keyPoints: [
      'Nơ-ron nhân tạo = nhân đầu vào với trọng số, cộng bias, đưa qua hàm kích hoạt.',
      'ReLU và sigmoid là hai hàm kích hoạt phổ biến; perceptron là tổ tiên dùng hàm bước nhảy.',
      'Không có hàm kích hoạt phi tuyến, mạng nhiều lớp cũng chỉ tương đương một lớp tuyến tính.',
      'Lớp ẩn tự học các đặc trưng trung gian, từ chi tiết nhỏ đến khái niệm lớn.',
      'MNIST: 784 điểm ảnh vào, 10 chữ số ra là ví dụ kinh điển để hiểu mạng nơ-ron.'
    ],
    quiz: [
      { q: 'Trong một nơ-ron nhân tạo, trọng số (weight) có vai trò gì?', options: ['Quyết định số lớp của mạng', 'Thể hiện mức độ quan trọng của từng đầu vào', 'Lưu trữ ảnh đầu vào', 'Chọn hàm kích hoạt'], answer: 1, explain: 'Mỗi đầu vào được nhân với một trọng số; trọng số lớn nghĩa là đầu vào đó ảnh hưởng mạnh đến đầu ra.' },
      { q: 'Điều gì xảy ra nếu bỏ hết hàm kích hoạt phi tuyến trong mạng nhiều lớp?', options: ['Mạng chạy chậm hơn nhưng thông minh hơn', 'Mạng không thể nhận đầu vào', 'Cả mạng chỉ tương đương một phép biến đổi tuyến tính, không học được quan hệ phức tạp', 'Mạng tự động thêm lớp ẩn'], answer: 2, explain: 'Chồng các phép tuyến tính lên nhau vẫn ra một phép tuyến tính. Phi tuyến là thứ giúp mạng "uốn cong" ranh giới.' },
      { q: 'Hàm ReLU biến đổi đầu vào như thế nào?', options: ['Số âm thành 0, số dương giữ nguyên', 'Ép mọi số về khoảng 0 đến 1', 'Đổi dấu mọi số', 'Luôn trả về 1'], answer: 0, explain: 'ReLU(z) = max(0, z). Ép về 0–1 là đặc điểm của sigmoid.' }
    ],
    resources: [
      { title: '3Blue1Brown — But what is a neural network?', url: 'https://www.3blue1brown.com/lessons/neural-networks', note: 'Tiếng Anh, video trực quan, có phụ đề' },
      { title: 'Google ML Crash Course — Neural networks', url: 'https://developers.google.com/machine-learning/crash-course/neural-networks', note: 'Tiếng Anh, miễn phí, có bài tập tương tác' },
      { title: 'Andrej Karpathy — Neural Networks: Zero to Hero', url: 'https://karpathy.ai/zero-to-hero.html', note: 'Tiếng Anh, chuỗi video tự code mạng nơ-ron từ đầu bằng Python, dành cho người muốn đi sâu' }
    ],
    video: { id: 'aircAruvnKk', title: 'But what is a neural network? | Deep learning chapter 1', channel: '3Blue1Brown', lang: 'en', minutes: 19 },
    updated: '2026-09'
  },

  /* ================================================================
   * T4-B2: Huấn luyện mạng: lan truyền ngược
   * ================================================================ */
  't4-b2': {
    duration: 15,
    summary: 'Mạng nơ-ron "học" bằng cách nào: đo sai số bằng hàm loss, truy trách nhiệm bằng lan truyền ngược và chỉnh trọng số bằng gradient descent.',
    goals: [
      'Phân biệt được forward pass, hàm mất mát (loss) và lan truyền ngược (backpropagation)',
      'Hiểu trực quan gradient descent như việc "xuống dốc trong sương mù"',
      'Biết các khái niệm batch, epoch, learning rate và vì sao cần GPU'
    ],
    blocks: [
      { type: 'h', text: 'Học nghĩa là gì với một mạng nơ-ron?' },
      { type: 'p', text: 'Ở bài trước, mạng nhận diện chữ số có khoảng 13.000 trọng số và bias. Ban đầu các con số này được chọn <strong>ngẫu nhiên</strong>, nên mạng đoán bừa. "Học" chỉ đơn giản là: <strong>điều chỉnh dần các con số đó sao cho mạng đoán sai ít hơn</strong>.' },
      { type: 'p', text: 'Không ai ngồi chỉnh tay hàng nghìn, hàng tỷ con số. Thay vào đó, ta dùng một vòng lặp tự động gồm bốn bước, lặp lại hàng triệu lần.' },
      { type: 'steps', items: [
        { title: 'Lan truyền xuôi (forward pass)', text: 'Đưa một ảnh vào, tính lần lượt qua từng lớp để ra dự đoán, ví dụ "70% là số 3".' },
        { title: 'Tính hàm mất mát (loss)', text: 'So dự đoán với đáp án đúng. Loss là một con số đo "sai bao nhiêu": đoán đúng và tự tin thì loss nhỏ, đoán sai thì loss lớn.' },
        { title: 'Lan truyền ngược (backpropagation)', text: 'Đi ngược từ đầu ra về đầu vào, tính xem mỗi trọng số góp bao nhiêu vào sai số.' },
        { title: 'Cập nhật trọng số (gradient descent)', text: 'Nhích mỗi trọng số một chút theo hướng làm loss giảm. Rồi quay lại bước 1 với dữ liệu tiếp theo.' }
      ] },
      { type: 'h', text: 'Gradient descent: xuống dốc trong sương mù' },
      { type: 'analogy', text: 'Hãy tưởng tượng bạn đứng trên sườn núi giữa màn sương dày, muốn xuống thung lũng thấp nhất nhưng không nhìn thấy gì. Cách hợp lý: dò chân cảm nhận mặt đất dốc về phía nào, rồi bước một bước theo hướng dốc xuống. Lặp lại mãi, bạn sẽ xuống dần. Độ cao ở đây là loss, vị trí của bạn là toàn bộ trọng số, và "độ dốc" chính là <strong>gradient</strong>.' },
      { type: 'p', text: '<strong>Gradient</strong> cho biết: nếu tăng mỗi trọng số lên một chút, loss sẽ tăng hay giảm, và nhanh cỡ nào. <strong>Gradient descent</strong> (hạ gradient) là đi ngược hướng gradient để loss giảm.' },
      { type: 'p', text: 'Mỗi bước đi dài bao nhiêu do <strong>tốc độ học (learning rate)</strong> quyết định. Bước quá lớn thì dễ nhảy vượt qua đáy thung lũng và dao động mãi. Bước quá nhỏ thì đi rất lâu mới tới nơi. Chọn learning rate là một trong những việc chỉnh tay quan trọng nhất khi huấn luyện.' },
      { type: 'callout', tone: 'note', title: 'Không phải lúc nào cũng tìm được đáy thấp nhất', text: 'Địa hình loss của mạng lớn rất gồ ghề, có nhiều hố nhỏ. Gradient descent thường chỉ tìm được một điểm "đủ tốt" chứ không đảm bảo thấp nhất tuyệt đối. May mắn là với mạng sâu, những điểm đủ tốt thường cho kết quả rất ổn trong thực tế.' },
      { type: 'h', text: 'Lan truyền ngược: truy trách nhiệm cho sai số' },
      { type: 'p', text: 'Vấn đề: để đi xuống dốc, ta cần biết gradient cho <em>từng</em> trọng số trong mạng. Với hàng triệu trọng số, tính riêng lẻ từng cái sẽ cực kỳ tốn kém. <strong>Lan truyền ngược (backpropagation)</strong> là thuật toán tính tất cả gradient đó một cách hiệu quả, chỉ với một lượt đi ngược qua mạng.' },
      { type: 'example', title: 'Truy trách nhiệm trong một nhà hàng', text: 'Một món ăn bị khách chê quá mặn. Quản lý hỏi đầu bếp chính; đầu bếp chính nói do nước sốt; người làm sốt nói do dùng loại nước mắm mới. Trách nhiệm được truy ngược từng khâu, mỗi người nhận phần lỗi tương ứng mức đóng góp của mình, và ai đóng góp nhiều nhất sẽ điều chỉnh nhiều nhất. Backpropagation làm đúng như vậy: sai số ở đầu ra được chia ngược về từng lớp, từng nơ-ron, từng trọng số.' },
      { type: 'p', text: 'Ví dụ với MNIST: đưa vào ảnh số "2" nhưng mạng đoán "7". Backprop sẽ muốn nơ-ron đầu ra số 2 sáng hơn, số 7 tối đi. Để làm vậy, nó xem nơ-ron nào ở lớp ẩn trước đó đang "đẩy" nhiều cho số 7 và giảm trọng số tương ứng, rồi tiếp tục truy về các lớp sâu hơn. Về mặt toán, đây là ứng dụng <strong>quy tắc dây chuyền (chain rule)</strong> của giải tích, nhưng bạn chỉ cần nhớ trực giác "chia trách nhiệm ngược dòng".' },
      { type: 'callout', tone: 'tip', title: 'Bạn không cần tự viết backprop', text: 'Các thư viện như PyTorch, TensorFlow hay JAX tính gradient tự động (autograd). Người làm thực tế chỉ định nghĩa mạng và hàm loss; thư viện lo phần lan truyền ngược.' },
      { type: 'h', text: 'Batch, epoch và vì sao cần GPU' },
      { type: 'table', head: ['Thuật ngữ', 'Ý nghĩa', 'Ví dụ'], rows: [
        ['Batch (lô)', 'Nhóm ví dụ được xử lý cùng lúc trước mỗi lần cập nhật trọng số', 'Mỗi lần lấy 64 ảnh, tính loss trung bình rồi mới chỉnh'],
        ['Epoch', 'Một lượt duyệt qua toàn bộ dữ liệu huấn luyện', 'Dữ liệu 60.000 ảnh, batch 64 thì một epoch có khoảng 938 lần cập nhật'],
        ['Learning rate', 'Độ dài mỗi bước chỉnh trọng số', 'Quá lớn thì loss dao động, quá nhỏ thì học chậm']
      ] },
      { type: 'p', text: 'Vì sao dùng batch nhỏ thay vì cả bộ dữ liệu? Tính gradient trên toàn bộ dữ liệu mỗi bước rất chậm. Dùng một lô ngẫu nhiên cho ra hướng dốc "gần đúng" nhưng nhanh hơn nhiều. Cách này gọi là <strong>gradient descent ngẫu nhiên theo lô (mini-batch stochastic gradient descent)</strong>. Giống như người xuống núi bước nhanh, hơi loạng choạng, nhưng tổng thể vẫn đi xuống.' },
      { type: 'p', text: 'Cả forward pass lẫn backprop về bản chất là <strong>rất nhiều phép nhân ma trận</strong>, và các phép này có thể tính song song. <strong>GPU</strong> (bộ xử lý đồ họa), vốn được thiết kế để tính hàng triệu điểm ảnh cùng lúc cho trò chơi, hóa ra cực kỳ hợp với việc này. Sự kết hợp giữa dữ liệu lớn, GPU và thuật toán tốt là lý do học sâu bùng nổ từ đầu những năm 2010.' },
      { type: 'callout', tone: 'warn', title: 'Học thuộc lòng không phải là học', text: 'Nếu huấn luyện quá lâu trên cùng dữ liệu, mạng có thể "học vẹt" từng ví dụ và kém đi với dữ liệu mới (quá khớp, overfitting). Vì vậy người ta luôn giữ riêng một phần dữ liệu để kiểm tra, và dừng khi kết quả trên phần đó không còn cải thiện.' }
    ],
    keyPoints: [
      'Huấn luyện = lặp lại: forward pass, tính loss, backprop, cập nhật trọng số.',
      'Loss đo mức sai; gradient chỉ hướng làm loss tăng nhanh nhất, ta đi ngược hướng đó.',
      'Backpropagation chia "trách nhiệm" sai số ngược từ đầu ra về từng trọng số một cách hiệu quả.',
      'Batch là nhóm ví dụ mỗi lần cập nhật; epoch là một lượt qua toàn bộ dữ liệu.',
      'GPU tính song song phép nhân ma trận, là động cơ phần cứng của học sâu.'
    ],
    quiz: [
      { q: 'Hàm mất mát (loss) dùng để làm gì?', options: ['Đếm số nơ-ron trong mạng', 'Tăng tốc GPU', 'Chọn dữ liệu huấn luyện', 'Đo xem dự đoán của mạng sai lệch bao nhiêu so với đáp án'], answer: 3, explain: 'Loss là con số đo mức sai. Mục tiêu của huấn luyện là làm loss nhỏ lại.' },
      { q: 'Một epoch là gì?', options: ['Một lượt mạng duyệt qua toàn bộ dữ liệu huấn luyện', 'Một lần cập nhật một trọng số', 'Một lớp ẩn trong mạng', 'Thời gian để GPU khởi động'], answer: 0, explain: 'Epoch = một vòng qua hết dữ liệu. Mỗi epoch gồm nhiều batch, mỗi batch là một lần cập nhật.' },
      { q: 'Điều gì xảy ra nếu learning rate quá lớn?', options: ['Mạng học chính xác hơn', 'Loss có thể dao động hoặc tăng vì mỗi bước nhảy vượt qua điểm thấp', 'Mạng tự động thêm dữ liệu', 'Không ảnh hưởng gì'], answer: 1, explain: 'Bước quá dài khiến ta nhảy qua lại quanh đáy thung lũng thay vì đi xuống ổn định.' }
    ],
    resources: [
      { title: '3Blue1Brown — Gradient descent, how neural networks learn', url: 'https://www.3blue1brown.com/lessons/gradient-descent', note: 'Tiếng Anh, video trực quan' },
      { title: '3Blue1Brown — What is backpropagation really doing?', url: 'https://www.3blue1brown.com/lessons/backpropagation', note: 'Tiếng Anh, giải thích backprop không cần nhiều toán' },
      { title: 'Google ML Crash Course — Neural networks: training using backpropagation', url: 'https://developers.google.com/machine-learning/crash-course/neural-networks/backpropagation', note: 'Tiếng Anh, miễn phí' },
      { title: 'Andrej Karpathy — Neural Networks: Zero to Hero (bài micrograd)', url: 'https://karpathy.ai/zero-to-hero.html', note: 'Tiếng Anh, tự viết backpropagation từ con số 0 để hiểu tận gốc' }
    ],
    video: { id: 'IHZwWFHWa-w', title: 'Gradient descent, how neural networks learn | Deep Learning Chapter 2', channel: '3Blue1Brown', lang: 'en', minutes: 21 },
    updated: '2026-09'
  },

  /* ================================================================
   * T4-B3: Embedding: biến chữ thành số
   * ================================================================ */
  't4-b3': {
    duration: 14,
    summary: 'Embedding biến từ ngữ thành vector sao cho từ gần nghĩa nằm gần nhau, nền tảng của tìm kiếm ngữ nghĩa và mô hình ngôn ngữ lớn.',
    goals: [
      'Hiểu vì sao máy tính cần biến chữ thành vector số',
      'Giải thích được ý tưởng "từ gần nghĩa nằm gần nhau" và phép tính vua − đàn ông + phụ nữ ≈ nữ hoàng',
      'Biết cosine similarity và ứng dụng tìm kiếm ngữ nghĩa'
    ],
    blocks: [
      { type: 'h', text: 'Vì sao phải biến chữ thành số?' },
      { type: 'p', text: 'Mạng nơ-ron chỉ làm việc với con số: nhân, cộng, đưa qua hàm kích hoạt. Ảnh thì dễ, vì mỗi điểm ảnh vốn đã là số. Nhưng chữ thì sao? Từ "mèo" không có sẵn con số nào.' },
      { type: 'p', text: 'Cách ngây thơ nhất là đánh số: "mèo" = 1, "chó" = 2, "xe máy" = 3. Nhưng như vậy máy sẽ hiểu nhầm rằng "chó" nằm giữa "mèo" và "xe máy", hoặc "xe máy" gấp ba lần "mèo". Một cách khác là <strong>one-hot</strong>: mỗi từ là một vector dài bằng cả từ điển, toàn số 0 trừ một số 1. Cách này tránh được thứ tự giả, nhưng mọi từ đều cách đều nhau, "mèo" không gần "chó" hơn "xe máy". Vector lại dài cả trăm nghìn chiều, rất lãng phí.' },
      { type: 'p', text: '<strong>Embedding</strong> (vector nhúng) giải quyết cả hai vấn đề: mỗi từ được biểu diễn bằng một vector ngắn hơn nhiều, thường vài trăm đến vài nghìn con số, và các con số này được <em>học</em> sao cho từ có nghĩa gần nhau thì vector cũng gần nhau.' },
      { type: 'h', text: 'Không gian ý nghĩa: từ gần nghĩa ở gần nhau' },
      { type: 'analogy', text: 'Hãy tưởng tượng một tấm bản đồ khổng lồ của ngôn ngữ. Mỗi từ là một thành phố. "Mèo", "chó", "thỏ" tụ lại thành một vùng thú cưng; "Hà Nội", "Huế", "Đà Nẵng" tạo thành vùng thành phố; "vui", "hạnh phúc", "phấn khởi" nằm sát nhau. Embedding chính là tọa độ của mỗi thành phố, chỉ khác là bản đồ này có hàng trăm chiều thay vì hai chiều.' },
      { type: 'p', text: 'Máy học ra tấm bản đồ này bằng cách nào? Nhờ một ý tưởng ngôn ngữ học cũ: <em>"Bạn sẽ biết một từ qua những từ đi cùng nó"</em>. Các từ xuất hiện trong ngữ cảnh giống nhau thường có nghĩa giống nhau. "Con ___ kêu meo meo" và "con ___ đang ngủ trên sofa" có thể điền "mèo"; "chó" cũng hợp với câu thứ hai. Khi huấn luyện trên lượng văn bản lớn, mô hình như <strong>word2vec</strong> (Google, 2013) sẽ tự đẩy các từ có ngữ cảnh giống nhau lại gần nhau.' },
      { type: 'callout', tone: 'note', title: 'Không ai gán nghĩa cho từng chiều', text: 'Mỗi chiều trong embedding không có tên rõ ràng kiểu "độ dễ thương" hay "giới tính". Mô hình tự học ra các chiều này, và thường mỗi khái niệm được trải trên nhiều chiều cùng lúc. Chúng ta chỉ quan sát được các <em>quan hệ</em> giữa các vector.' },
      { type: 'h', text: 'Phép toán với ý nghĩa: vua − đàn ông + phụ nữ ≈ nữ hoàng' },
      { type: 'p', text: 'Điều gây kinh ngạc với word2vec là các <strong>hướng</strong> trong không gian embedding mang ý nghĩa. Hướng đi từ "đàn ông" sang "phụ nữ" gần giống hướng đi từ "vua" sang "nữ hoàng", hay từ "chú" sang "cô".' },
      { type: 'example', title: 'Phép tính nổi tiếng', text: 'Lấy vector "vua", trừ đi vector "đàn ông", cộng vector "phụ nữ". Vector thu được nằm gần nhất với vector "nữ hoàng". Tương tự: "Paris" − "Pháp" + "Việt Nam" cho kết quả gần "Hà Nội". Mô hình chưa bao giờ được dạy trực tiếp các quan hệ này, nó tự rút ra từ cách con người dùng từ.' },
      { type: 'callout', tone: 'warn', title: 'Embedding cũng học luôn thiên kiến', text: 'Vì học từ văn bản do con người viết, embedding có thể mang theo định kiến xã hội, ví dụ gắn nghề nghiệp nhất định với một giới tính. Các nghiên cứu đã chỉ ra hiện tượng này, và đây là lý do các hệ thống AI cần được kiểm tra thiên kiến cẩn thận. Ngoài ra, các phép tính kiểu "vua − đàn ông + phụ nữ" không phải lúc nào cũng cho kết quả gọn đẹp như ví dụ.' },
      { type: 'h', text: 'Đo độ gần: cosine similarity' },
      { type: 'p', text: 'Làm sao đo hai vector "gần" nhau? Cách phổ biến nhất là <strong>cosine similarity</strong> (độ tương đồng cosin): đo góc giữa hai vector. Hai vector cùng hướng thì cosine gần 1 (rất giống nhau), vuông góc thì gần 0 (không liên quan), ngược hướng thì gần −1.' },
      { type: 'code', lang: 'python', code: `import numpy as np

def cosine_similarity(a, b):
    return np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))

# Vector đồ chơi 3 chiều (vector thật có hàng trăm chiều)
meo    = np.array([0.9, 0.8, 0.1])
cho    = np.array([0.8, 0.9, 0.2])
xe_may = np.array([0.1, 0.2, 0.9])

print("mèo ~ chó   :", round(cosine_similarity(meo, cho), 3))     # gần 1
print("mèo ~ xe máy:", round(cosine_similarity(meo, xe_may), 3))  # nhỏ hơn nhiều`, caption: 'Cosine similarity: chia tích vô hướng cho tích độ dài hai vector. Số liệu ở đây là minh họa, không phải embedding thật.' },
      { type: 'p', text: 'Cosine chỉ quan tâm đến <em>hướng</em> chứ không quan tâm độ dài vector, nên hợp để so sánh ý nghĩa của văn bản dài ngắn khác nhau.' },
      { type: 'h', text: 'Ứng dụng: tìm kiếm ngữ nghĩa và hơn thế nữa' },
      { type: 'p', text: 'Ngày nay không chỉ từ, mà cả câu, đoạn văn, hình ảnh, sản phẩm đều có thể được nhúng thành vector. Điều này mở ra nhiều ứng dụng:' },
      { type: 'list', items: [
        '<strong>Tìm kiếm ngữ nghĩa (semantic search)</strong>: tìm "cách chữa mất ngủ" vẫn ra bài viết "mẹo để ngủ ngon hơn" dù không trùng từ khóa nào.',
        '<strong>Gợi ý</strong>: sản phẩm, bài hát, phim có vector gần với thứ bạn đã thích.',
        '<strong>RAG</strong> (Retrieval-Augmented Generation): chatbot tìm đoạn tài liệu liên quan bằng embedding, rồi đưa cho LLM để trả lời chính xác hơn.',
        '<strong>Phân nhóm và phát hiện trùng lặp</strong>: gom các phản hồi khách hàng có nội dung tương tự.'
      ] },
      { type: 'callout', tone: 'tip', title: 'Embedding bên trong LLM', text: 'Bước đầu tiên của mọi mô hình ngôn ngữ lớn là tra bảng embedding: mỗi token được đổi thành một vector. Khác với word2vec, trong Transformer các vector này còn được điều chỉnh theo ngữ cảnh, nên "đường" trong "đường phố" và "đường" trong "đường ăn" sẽ có biểu diễn khác nhau. Đó là chủ đề của bài tiếp theo.' }
    ],
    keyPoints: [
      'Embedding biểu diễn từ (hoặc câu, ảnh) bằng vector số mà máy xử lý được.',
      'Các vector được học từ ngữ cảnh, nên từ gần nghĩa nằm gần nhau.',
      'Hướng trong không gian embedding mang nghĩa: vua − đàn ông + phụ nữ ≈ nữ hoàng.',
      'Cosine similarity đo độ giống nhau qua góc giữa hai vector.',
      'Ứng dụng: tìm kiếm ngữ nghĩa, gợi ý, RAG; embedding cũng có thể mang thiên kiến từ dữ liệu.'
    ],
    quiz: [
      { q: 'Ưu điểm chính của embedding so với đánh số từ 1, 2, 3...?', options: ['Tốn ít bộ nhớ hơn một con số', 'Từ có nghĩa gần nhau sẽ có vector gần nhau', 'Không cần huấn luyện', 'Chỉ dùng được cho tiếng Anh'], answer: 1, explain: 'Embedding được học để phản ánh ý nghĩa, nên khoảng cách giữa các vector mang thông tin về độ giống nghĩa.' },
      { q: 'Cosine similarity của hai vector gần bằng 1 nghĩa là gì?', options: ['Hai vector vuông góc, không liên quan', 'Hai vector ngược nghĩa', 'Một trong hai vector bằng 0', 'Hai vector gần cùng hướng, rất giống nhau'], answer: 3, explain: 'Cosine đo góc: gần 1 là cùng hướng, gần 0 là vuông góc, gần −1 là ngược hướng.' },
      { q: 'Tìm kiếm ngữ nghĩa khác tìm kiếm từ khóa ở điểm nào?', options: ['Tìm theo ý nghĩa, có thể ra kết quả phù hợp dù không trùng từ nào', 'Chỉ tìm được hình ảnh', 'Luôn yêu cầu gõ đúng chính tả tuyệt đối', 'Không dùng máy tính'], answer: 0, explain: 'Câu truy vấn và tài liệu đều được nhúng thành vector; tài liệu có vector gần nhất được trả về dù dùng từ khác.' }
    ],
    resources: [
      { title: 'Google ML Crash Course — Embeddings', url: 'https://developers.google.com/machine-learning/crash-course/embeddings', note: 'Tiếng Anh, miễn phí' },
      { title: 'TensorFlow Embedding Projector', url: 'https://projector.tensorflow.org/', note: 'Công cụ trực quan: xoay và khám phá không gian embedding 3D' },
      { title: '3Blue1Brown — Transformers, the tech behind LLMs', url: 'https://www.3blue1brown.com/lessons/gpt', note: 'Tiếng Anh, có phần minh họa embedding và hướng mang nghĩa trong không gian vector' }
    ],
    video: { id: 'wjZofJX0v4M', title: 'Transformers, the tech behind LLMs | Deep Learning Chapter 5', channel: '3Blue1Brown', lang: 'en', minutes: 27 },
    updated: '2026-09'
  },

  /* ================================================================
   * T4-B4: Transformer và cơ chế attention
   * ================================================================ */
  't4-b4': {
    duration: 19,
    summary: 'Transformer đọc cả câu cùng lúc, dùng self-attention để mỗi từ "nhìn" các từ khác; nay được mở rộng với MoE, ngữ cảnh dài và đa phương thức.',
    goals: [
      'Hiểu token hóa là gì và vì sao LLM "đếm" bằng token',
      'Giải thích được vì sao RNN chậm và Transformer ra đời để khắc phục',
      'Hình dung được self-attention và positional encoding qua ví dụ tiếng Việt',
      'Nắm ở mức khái niệm các hướng mới: mixture-of-experts, ngữ cảnh dài, đa phương thức'
    ],
    blocks: [
      { type: 'h', text: 'Bước đầu tiên: token hóa' },
      { type: 'p', text: 'Trước khi xử lý văn bản, mô hình cắt nó thành các mảnh nhỏ gọi là <strong>token</strong>. Một token có thể là một từ, một phần của từ, một dấu câu hay một khoảng trắng. Quá trình này gọi là <strong>token hóa (tokenization)</strong>.' },
      { type: 'example', title: 'Cắt câu thành token', text: 'Câu "Tôi yêu Hà Nội" có thể được cắt thành các mảnh như "Tôi", " yêu", " Hà", " Nội". Một từ tiếng Anh hiếm như "unbelievably" có thể bị cắt thành "un", "believ", "ably". Cách cắt cụ thể tùy vào bộ token hóa của từng mô hình. Mỗi token sau đó được đổi thành một embedding, như bạn đã học ở bài trước.' },
      { type: 'callout', tone: 'tip', title: 'Vì sao nên biết về token?', text: 'Giới hạn độ dài ngữ cảnh (context window) và giá dùng API của LLM đều tính theo token. Với nhiều bộ token hóa, tiếng Việt có dấu thường tốn nhiều token hơn tiếng Anh cho cùng một nội dung, vì dữ liệu huấn luyện bộ token hóa chủ yếu là tiếng Anh.' },
      { type: 'h', text: 'Trước Transformer: RNN đọc từng chữ một' },
      { type: 'p', text: 'Trước năm 2017, cách phổ biến để xử lý ngôn ngữ là <strong>mạng nơ-ron hồi quy (RNN)</strong> và biến thể LSTM. RNN đọc câu <em>tuần tự</em>: từ thứ nhất, cập nhật "trí nhớ", rồi đến từ thứ hai, cập nhật tiếp, cứ thế đến hết câu.' },
      { type: 'list', items: [
        '<strong>Chậm</strong>: muốn xử lý từ thứ 100 phải chờ xong 99 từ trước. Không tận dụng được sức mạnh tính song song của GPU.',
        '<strong>Hay quên</strong>: thông tin ở đầu đoạn văn dài bị "nhòe" dần khi truyền qua hàng trăm bước.',
        '<strong>Khó mở rộng</strong>: vì chậm, rất khó huấn luyện trên lượng dữ liệu khổng lồ.'
      ] },
      { type: 'analogy', text: 'RNN giống như trò chơi "truyền tin": mỗi người chỉ nghe người trước thì thầm rồi truyền cho người sau. Đến cuối hàng, thông điệp đầu tiên đã sai lệch, và cả trò chơi không thể nhanh hơn tốc độ từng người nói. Transformer thì giống một cuộc họp nơi mọi người ngồi quanh bàn, ai cũng nhìn thấy và nghe được tất cả những người khác cùng lúc.' },
      { type: 'h', text: 'Self-attention: mỗi từ "nhìn" các từ khác' },
      { type: 'p', text: 'Năm 2017, nhóm nghiên cứu Google công bố bài báo <a href="https://arxiv.org/abs/1706.03762"><strong>"Attention Is All You Need"</strong></a>, giới thiệu kiến trúc <strong>Transformer</strong>. Ý tưởng cốt lõi là <strong>self-attention</strong> (tự chú ý): khi xử lý mỗi từ, mô hình cho phép từ đó "nhìn" tất cả các từ khác trong câu và quyết định nên chú ý vào từ nào nhiều nhất.' },
      { type: 'example', title: '"Nó" là ai?', text: 'Xét câu: "Con mèo không nhảy lên bàn vì <strong>nó</strong> quá mệt." Ở đây "nó" là con mèo. Đổi thành: "Con mèo không nhảy lên bàn vì <strong>nó</strong> quá cao." Lúc này "nó" lại là cái bàn. Để hiểu đúng, khi xử lý từ "nó", mô hình phải nhìn sang "mèo", "bàn" và cả "mệt" hay "cao". Self-attention làm chính xác việc đó: từ "nó" sẽ dồn nhiều "sự chú ý" vào "mèo" trong câu thứ nhất và vào "bàn" trong câu thứ hai, rồi trộn thông tin đó vào biểu diễn của chính mình.' },
      { type: 'p', text: 'Cơ chế hoạt động có thể hình dung qua ba vai trò mà mỗi token đảm nhận, thường được gọi là Query, Key và Value:' },
      { type: 'table', head: ['Vai trò', 'Câu hỏi trực quan', 'Ví dụ với từ "nó"'], rows: [
        ['Query (truy vấn)', 'Tôi đang tìm thông tin gì?', '"Tôi là đại từ, tôi cần tìm danh từ mình thay thế"'],
        ['Key (khóa)', 'Tôi có thể cung cấp thông tin gì?', '"mèo" và "bàn" đều báo: "Tôi là danh từ chỉ vật"'],
        ['Value (giá trị)', 'Nội dung tôi sẽ chia sẻ nếu được chú ý', '"mèo" chia sẻ ý nghĩa "con vật, có thể mệt"']
      ] },
      { type: 'p', text: 'Query của một token được so với Key của tất cả token khác để ra điểm chú ý; điểm càng cao thì Value của token đó càng được trộn vào nhiều. Tất cả phép so sánh này là phép nhân ma trận, nên có thể tính <strong>song song cho mọi token cùng lúc</strong> trên GPU. Đây chính là lý do Transformer huấn luyện nhanh hơn RNN rất nhiều và mở rộng được lên quy mô khổng lồ.' },
      { type: 'callout', tone: 'note', title: 'Nhiều "đầu" chú ý và nhiều lớp', text: 'Transformer dùng <strong>multi-head attention</strong>: nhiều cơ chế attention chạy song song, mỗi "đầu" có thể học chú ý đến một kiểu quan hệ khác nhau (ngữ pháp, đại từ, chủ đề...). Các khối attention được xếp chồng thành nhiều lớp, xen kẽ với các mạng nơ-ron thông thường như bạn đã học ở bài 1. Qua mỗi lớp, biểu diễn của từng token ngày càng giàu ngữ cảnh.' },
      { type: 'h', text: 'Positional encoding: giữ lại thứ tự' },
      { type: 'p', text: 'Có một vấn đề: vì self-attention nhìn tất cả token cùng lúc, bản thân nó không biết token nào đứng trước, token nào đứng sau. Nhưng thứ tự rất quan trọng: "chó cắn người" khác hẳn "người cắn chó".' },
      { type: 'p', text: 'Giải pháp là <strong>mã hóa vị trí (positional encoding)</strong>: trộn thêm vào embedding của mỗi token một tín hiệu cho biết vị trí của nó trong câu. Bài báo gốc dùng các sóng hình sin với tần số khác nhau; các mô hình sau này dùng nhiều biến thể khác. Ý chung là: mỗi token mang theo cả "nó là gì" lẫn "nó đứng ở đâu".' },
      { type: 'h', text: 'Transformer hôm nay: MoE, ngữ cảnh dài và đa phương thức' },
      { type: 'p', text: 'Từ bài báo năm 2017, Transformer đã trở thành kiến trúc nền tảng của hầu hết mô hình ngôn ngữ lớn như GPT, Claude, Gemini, Llama. Chữ "T" trong GPT chính là Transformer (Generative Pre-trained Transformer). Khung cơ bản (embedding, attention, mạng nơ-ron xen kẽ, nhiều lớp) vẫn giữ nguyên, nhưng các mô hình thế hệ 2025–2026 bổ sung thêm nhiều cải tiến. Ba hướng nổi bật:' },
      { type: 'table', head: ['Hướng phát triển', 'Ý tưởng chính', 'Đánh đổi'], rows: [
        ['Hỗn hợp chuyên gia (Mixture-of-Experts, MoE)', 'Thay một mạng nơ-ron lớn trong mỗi lớp bằng nhiều "chuyên gia" nhỏ; một bộ định tuyến (router) chọn vài chuyên gia phù hợp cho từng token', 'Tổng tham số rất lớn nhưng mỗi token chỉ tính qua một phần nhỏ, nên nhanh hơn; đổi lại vẫn phải nạp toàn bộ chuyên gia vào bộ nhớ'],
        ['Cửa sổ ngữ cảnh dài (long context)', 'Cải tiến cách tính attention, mã hóa vị trí và huấn luyện thêm với văn bản dài để mô hình đọc được cả cuốn sách hay cả kho mã nguồn một lượt', 'Tốn tính toán và bộ nhớ; đọc được nhiều không có nghĩa là dùng tốt mọi chỗ'],
        ['Đa phương thức (multimodal)', 'Ảnh, âm thanh, video cũng được cắt thành các "mảnh", đổi thành vector và đưa vào cùng Transformer như token chữ', 'Một mô hình vừa "đọc", vừa "nhìn", vừa "nghe"; cần dữ liệu huấn luyện đa dạng hơn']
      ] },
      { type: 'analogy', text: 'MoE giống một bệnh viện đa khoa. Bệnh viện có hàng chục bác sĩ chuyên khoa, nhưng mỗi bệnh nhân không cần gặp tất cả: quầy tiếp đón (router) chỉ chuyển bạn tới một hai khoa phù hợp. Bệnh viện "biết" rất nhiều, nhưng mỗi lượt khám chỉ tốn công của vài người. Tuy vậy, bệnh viện vẫn phải trả lương và có phòng cho tất cả bác sĩ, giống như MoE vẫn phải giữ mọi chuyên gia trong bộ nhớ.' },
      { type: 'example', title: 'Con số thật từ các mô hình mở', text: 'Với mô hình công bố trọng số, ta biết chính xác quy mô. Theo báo cáo kỹ thuật, <strong>DeepSeek-V3</strong> có 671 tỷ tham số, nhưng mỗi token chỉ kích hoạt 37 tỷ. Theo trang mô hình trên Hugging Face, <strong>gpt-oss-120b</strong> của OpenAI có khoảng 117 tỷ tham số, mỗi token chỉ dùng khoảng 5,1 tỷ. Meta cũng dùng MoE cho dòng Llama 4. Còn với phần lớn mô hình thương mại đóng, các công ty không công bố kiến trúc, nên đừng tin các con số đồn đoán.' },
      { type: 'callout', tone: 'note', title: 'Ngữ cảnh dài: đọc được nhiều chưa chắc đã nhớ hết', text: 'Tài liệu Gemini API của Google mô tả các cửa sổ ngữ cảnh từ 1 triệu token trở lên; Meta công bố Llama 4 Scout nhận tới 10 triệu token đầu vào. Nhưng chính tài liệu của Google lưu ý: khi cần tìm <em>nhiều</em> chi tiết cùng lúc trong văn bản dài, độ chính xác giảm. Nghiên cứu "Lost in the Middle" (2023) cũng cho thấy mô hình thường dùng thông tin ở đầu và cuối ngữ cảnh tốt hơn ở giữa. Mẹo thực tế: đặt chỉ dẫn và thông tin quan trọng nhất ở đầu hoặc cuối prompt.' },
      { type: 'p', text: 'Với đa phương thức, một số mô hình như Llama 4 dùng cách "hợp nhất sớm" (early fusion): token chữ và token ảnh đi chung một Transformer ngay từ đầu, được tiền huấn luyện cùng lúc trên chữ, ảnh và video, thay vì ghép một mô hình ảnh riêng vào sau.' },
      { type: 'callout', tone: 'warn', title: 'Lầm tưởng thường gặp', text: '"Attention" không có nghĩa là mô hình "chú ý" hay "tập trung" giống con người. Đó chỉ là cách tính trọng số để trộn thông tin giữa các token. Ngoài ra, attention cũng có chi phí: với cách tính gốc, số phép so sánh tăng theo bình phương độ dài đoạn văn. Đó là lý do ngữ cảnh rất dài vẫn tốn kém và là lĩnh vực được nghiên cứu cải tiến liên tục.' }
    ],
    keyPoints: [
      'Văn bản được cắt thành token, mỗi token đổi thành embedding trước khi vào mô hình.',
      'RNN đọc tuần tự nên chậm và hay quên; Transformer xử lý mọi token song song.',
      'Self-attention cho mỗi token "nhìn" các token khác để hiểu ngữ cảnh, ví dụ xác định "nó" là ai.',
      'Positional encoding bổ sung thông tin thứ tự mà attention tự thân không có.',
      'Transformer (2017) đứng sau GPT, Claude, Gemini; nay được mở rộng với MoE, ngữ cảnh dài và đa phương thức.'
    ],
    quiz: [
      { q: 'Lý do chính khiến Transformer huấn luyện nhanh hơn RNN là gì?', options: ['Transformer dùng ít dữ liệu hơn', 'Transformer không cần GPU', 'Transformer xử lý các token song song thay vì lần lượt từng token', 'Transformer không có trọng số'], answer: 2, explain: 'Self-attention là các phép nhân ma trận tính cho mọi token cùng lúc, tận dụng tối đa GPU. RNN phải chờ từng bước.' },
      { q: 'Trong câu "Con mèo không nhảy lên bàn vì nó quá cao", self-attention giúp mô hình làm gì?', options: ['Đếm số từ trong câu', 'Liên kết "nó" với "bàn" nhờ nhìn vào ngữ cảnh "quá cao"', 'Dịch câu sang tiếng Anh', 'Xóa các từ không quan trọng'], answer: 1, explain: 'Token "nó" chú ý đến các token khác và nhờ "cao" mà dồn trọng số chú ý vào "bàn".' },
      { q: 'Positional encoding dùng để làm gì?', options: ['Cho mô hình biết thứ tự, vị trí của từng token trong câu', 'Nén mô hình cho nhỏ lại', 'Kiểm tra chính tả', 'Chọn token tiếp theo'], answer: 0, explain: 'Attention tự thân không phân biệt thứ tự, nên cần thêm tín hiệu vị trí để "chó cắn người" khác "người cắn chó".' }
    ],
    resources: [
      { title: '3Blue1Brown — Attention in transformers, visually explained', url: 'https://www.3blue1brown.com/lessons/attention', note: 'Tiếng Anh, video trực quan' },
      { title: 'Jay Alammar — The Illustrated Transformer', url: 'https://jalammar.github.io/illustrated-transformer/', note: 'Tiếng Anh, giải thích Transformer bằng hình vẽ từng bước, rất phổ biến' },
      { title: 'Google ML Crash Course — LLMs: What\'s a Transformer?', url: 'https://developers.google.com/machine-learning/crash-course/llm/transformers', note: 'Tiếng Anh, miễn phí, thuộc module Intro to LLMs' },
      { title: 'Hugging Face — Mixture of Experts Explained', url: 'https://huggingface.co/blog/moe', note: 'Tiếng Anh, giải thích router, chuyên gia và đánh đổi bộ nhớ của MoE' }
    ],
    video: { id: 'eMlx5fFNoYc', title: 'Attention in transformers, step-by-step | Deep Learning Chapter 6', channel: '3Blue1Brown', lang: 'en', minutes: 26 },
    updated: '2026-09'
  },

  /* ================================================================
   * T4-B5: LLM được huấn luyện như thế nào
   * ================================================================ */
  't4-b5': {
    duration: 20,
    summary: 'Hành trình tạo ra một LLM: tiền huấn luyện, hậu huấn luyện (SFT, RLHF, RLAIF), học tăng cường cho mô hình suy luận, chưng cất, mô hình mở và lý do có ảo giác.',
    goals: [
      'Mô tả được hai giai đoạn lớn: tiền huấn luyện (pretraining) và hậu huấn luyện (post-training)',
      'Phân biệt RLHF, RLAIF/Constitutional AI và học tăng cường với phần thưởng kiểm chứng được',
      'Hiểu mô hình suy luận, test-time compute, chưng cất (distillation) và mô hình mở (open-weight)',
      'Giải thích vì sao LLM có thể "ảo giác" và cách hạn chế'
    ],
    blocks: [
      { type: 'h', text: 'Giai đoạn 1: Tiền huấn luyện — dự đoán token tiếp theo' },
      { type: 'p', text: 'Mô hình ngôn ngữ lớn (Large Language Model, LLM) bắt đầu từ một Transformer với hàng tỷ trọng số ngẫu nhiên. Nhiệm vụ huấn luyện đầu tiên nghe đơn giản đến bất ngờ: <strong>đọc một đoạn văn bản và đoán token tiếp theo</strong>.' },
      { type: 'example', title: 'Trò chơi đoán chữ', text: 'Cho câu "Thủ đô của Việt Nam là ___". Mô hình đưa ra xác suất cho mọi token có thể: " Hà" rất cao, " Huế" thấp hơn nhiều. Nếu đoán sai, loss lớn; backpropagation và gradient descent (bài 2) sẽ chỉnh trọng số để lần sau đoán tốt hơn. Lặp lại trên lượng văn bản khổng lồ đã được lọc kỹ: sách, trang web, bài báo khoa học, mã nguồn.' },
      { type: 'p', text: 'Giai đoạn này gọi là <strong>tiền huấn luyện (pretraining)</strong>. Nó không cần ai gán nhãn, vì đáp án chính là token tiếp theo có sẵn trong văn bản; đây là dạng <strong>học tự giám sát (self-supervised learning)</strong>. Để đoán tốt trên đủ loại văn bản, mô hình buộc phải học ngữ pháp, kiến thức thế giới, cách lập luận, cả cách lập trình. Kết quả là một <strong>mô hình nền (base model)</strong>. Khi trả lời, LLM cũng dùng đúng cơ chế đó: dự đoán một token, nối vào văn bản, rồi dự đoán token tiếp theo.' },
      { type: 'p', text: '<strong>Tham số (parameter)</strong> là tên gọi chung cho tất cả trọng số và bias. Mạng MNIST ở bài 1 có khoảng 13.000 tham số; các LLM mở hiện nay có từ vài tỷ đến hàng trăm tỷ tham số. Các nghiên cứu về <strong>quy luật mở rộng (scaling laws)</strong> cho thấy tăng đồng thời tham số, dữ liệu và sức tính toán thường cải thiện mô hình khá đều đặn. Nhưng chất lượng dữ liệu và kỹ thuật huấn luyện cũng quan trọng không kém. Nhiều công ty không công bố số tham số của mô hình thương mại, nên hãy cẩn thận với các con số đồn đoán.' },
      { type: 'h', text: 'Giai đoạn 2: Hậu huấn luyện — biến mô hình nền thành trợ lý' },
      { type: 'p', text: 'Mô hình nền giống một cỗ máy "viết tiếp văn bản" rất giỏi, nhưng chưa phải trợ lý. Hỏi nó "Làm sao nấu phở?" nó có thể viết tiếp thành một danh sách câu hỏi khác, vì trên mạng các câu hỏi hay đi thành chuỗi. Toàn bộ các bước sau pretraining được gọi chung là <strong>hậu huấn luyện (post-training)</strong>:' },
      { type: 'steps', items: [
        { title: 'Tinh chỉnh có giám sát (SFT, instruction tuning)', text: 'Huấn luyện tiếp trên các cặp "yêu cầu – câu trả lời mẫu" chất lượng cao, do con người viết hoặc duyệt, ngày càng nhiều cặp do chính AI tạo rồi được lọc. Mô hình học định dạng hội thoại: nhận yêu cầu, trả lời hữu ích.' },
        { title: 'Học tăng cường từ phản hồi của con người (RLHF)', text: 'Mô hình sinh nhiều câu trả lời cho cùng một câu hỏi; người đánh giá chọn câu nào tốt hơn. Từ đó huấn luyện một "mô hình chấm điểm" (reward model), rồi dùng học tăng cường để mô hình chính ưu tiên câu trả lời được chấm cao: hữu ích, trung thực, ít gây hại. Các kỹ thuật như DPO tối ưu trực tiếp từ dữ liệu so sánh cặp mà không cần mô hình chấm điểm riêng.' },
        { title: 'Phản hồi từ AI (RLAIF) và Constitutional AI', text: 'Thay vì con người chấm từng cặp, một mô hình AI chấm theo một bộ nguyên tắc viết sẵn. <strong>Constitutional AI</strong> do Anthropic đề xuất (2022) là ví dụ tiêu biểu: AI tự phê bình và sửa câu trả lời theo "hiến pháp", rồi phản hồi của AI được dùng để huấn luyện bằng học tăng cường. Cách này giảm lượng nhãn con người cần có và làm rõ các nguyên tắc mô hình tuân theo.' }
      ] },
      { type: 'analogy', text: 'Andrej Karpathy ví ba bước này với một cuốn sách giáo khoa. Pretraining giống đọc phần lý thuyết: tích lũy kiến thức nền. SFT giống xem các bài giải mẫu của chuyên gia và bắt chước. Học tăng cường giống tự làm bài tập cuối chương: tự thử nhiều cách, chỉ biết đáp số đúng hay sai, và dần tìm ra cách giải hiệu quả của riêng mình.' },
      { type: 'p', text: 'Mục tiêu chung của giai đoạn này là <strong>căn chỉnh (alignment)</strong>: làm cho hành vi của mô hình phù hợp với ý định và giá trị của con người.' },
      { type: 'h', text: 'Mô hình suy luận: học tăng cường với phần thưởng kiểm chứng được' },
      { type: 'p', text: 'Từ cuối 2024 đến 2025, một bước tiến lớn là <strong>mô hình suy luận (reasoning model)</strong>, như dòng o của OpenAI hay DeepSeek-R1. Chúng được huấn luyện để viết ra một chuỗi "suy nghĩ" trung gian trước khi đưa ra câu trả lời cuối.' },
      { type: 'p', text: 'Kỹ thuật chính là <strong>học tăng cường với phần thưởng kiểm chứng được (Reinforcement Learning with Verifiable Rewards, RLVR)</strong>. Với bài toán có đáp án rõ ràng, không cần người chấm: bài toán có thể so đáp số, đoạn code có thể chạy thử với bộ kiểm thử. Đúng thì thưởng, sai thì không. Mô hình tự thử hàng nghìn lời giải và dần tìm ra chiến lược tốt. Nhóm DeepSeek báo cáo (công bố trên Nature năm 2025) rằng chỉ bằng học tăng cường như vậy, mô hình tự phát triển các hành vi như tự kiểm tra lại, phát hiện lỗi và đổi hướng giải.' },
      { type: 'table', head: ['Kỹ thuật', 'Ai/cái gì chấm điểm', 'Hợp với'], rows: [
        ['RLHF', 'Mô hình chấm điểm học từ lựa chọn của con người', 'Tính hữu ích, giọng văn, an toàn: những thứ mang tính chủ quan'],
        ['RLAIF / Constitutional AI', 'Một mô hình AI chấm theo bộ nguyên tắc', 'Mở rộng việc căn chỉnh mà không cần gán nhãn từng trường hợp'],
        ['RLVR', 'Bộ kiểm tra tự động: so đáp số, chạy unit test', 'Toán, lập trình, bài toán có đáp án kiểm chứng được']
      ] },
      { type: 'p', text: 'Đi kèm là khái niệm <strong>tính toán lúc suy luận (test-time compute, inference-time scaling)</strong>: cho mô hình "nghĩ" lâu hơn, viết chuỗi lập luận dài hơn hoặc thử nhiều lời giải rồi chọn cái tốt nhất, thì kết quả với bài khó thường tốt hơn. Nhiều mô hình cho phép chọn mức "nỗ lực suy luận" thấp, vừa hay cao. Đổi lại: chậm hơn và tốn nhiều token hơn.' },
      { type: 'callout', tone: 'warn', title: 'Giới hạn của RLVR', text: 'Phần thưởng kiểm chứng được chỉ hoạt động tốt khi có đáp án đúng rõ ràng. Với viết sáng tác, tư vấn hay lập luận nhiều sắc thái, vẫn cần phản hồi từ con người hoặc AI. Ngoài ra, chuỗi "suy nghĩ" mô hình hiển thị không nhất thiết phản ánh chính xác cách nó thực sự tính ra đáp án.' },
      { type: 'h', text: 'Chưng cất và mô hình mở (open-weight)' },
      { type: 'p', text: '<strong>Chưng cất (distillation)</strong> là cách tạo mô hình nhỏ từ mô hình lớn: mô hình lớn ("thầy") sinh ra câu trả lời, lời giải cho rất nhiều ví dụ, rồi mô hình nhỏ ("trò") được huấn luyện trên dữ liệu đó. Theo Google ML Crash Course, mô hình chưng cất chạy nhanh hơn và tốn ít tài nguyên hơn, nhưng thường không tốt bằng mô hình gốc. DeepSeek cũng chưng cất khả năng suy luận của R1 sang các mô hình nhỏ hơn.' },
      { type: 'p', text: '<strong>Mô hình mở trọng số (open-weight)</strong> là mô hình được công bố file trọng số để ai cũng tải về, chạy trên máy riêng và tinh chỉnh, ví dụ các dòng Llama, Qwen, DeepSeek hay gpt-oss của OpenAI (giấy phép Apache 2.0). Lưu ý: "mở trọng số" không đồng nghĩa "mã nguồn mở hoàn toàn", vì dữ liệu và quy trình huấn luyện thường không được công bố đầy đủ, và mỗi mô hình có giấy phép riêng cần đọc kỹ.' },
      { type: 'callout', tone: 'tip', title: 'Muốn tự tay thử?', text: 'Chương "Open R1" trong Hugging Face LLM Course hướng dẫn huấn luyện một mô hình nhỏ biết suy luận bằng thuật toán GRPO, đúng ý tưởng RLVR vừa học. Muốn đọc sâu hơn về hậu huấn luyện, xem <a href="https://rlhfbook.com/">RLHF Book</a> của Nathan Lambert (miễn phí, tiếng Anh).' },
      { type: 'h', text: 'Vì sao LLM có ảo giác?' },
      { type: 'p', text: '<strong>Ảo giác (hallucination)</strong> là khi mô hình đưa ra thông tin sai nhưng trình bày rất tự tin: bịa trích dẫn, bịa số liệu, bịa tên sách. Nguyên nhân gốc rễ nằm ở chính cách nó được huấn luyện:' },
      { type: 'list', items: [
        'Mô hình được tối ưu để tạo ra văn bản <em>nghe hợp lý</em>, không phải để tra cứu sự thật trong một cơ sở dữ liệu.',
        'Kiến thức được "nén" vào tham số, không lưu nguyên văn; chi tiết hiếm gặp dễ bị nhớ sai hoặc trộn lẫn.',
        'Kiến thức dừng lại ở thời điểm thu thập dữ liệu (knowledge cutoff).',
        'Nếu quá trình huấn luyện vô tình khen thưởng việc "luôn trả lời" hơn là nói "tôi không chắc", mô hình sẽ có xu hướng đoán.'
      ] },
      { type: 'callout', tone: 'warn', title: 'Luôn kiểm chứng thông tin quan trọng', text: 'Với y tế, pháp lý, tài chính hay số liệu cần trích dẫn, hãy kiểm tra lại với nguồn gốc. Các kỹ thuật như RAG (cho mô hình đọc tài liệu thật trước khi trả lời), cho phép tìm kiếm web và yêu cầu trích nguồn giúp giảm ảo giác, nhưng không loại bỏ hoàn toàn. Mô hình suy luận cũng vẫn có thể ảo giác.' },
      { type: 'callout', tone: 'note', title: 'Nhìn lại cả Tầng 4', text: 'Bạn đã đi hết chặng đường: nơ-ron (bài 1) được huấn luyện bằng backprop (bài 2), chữ được biến thành vector (bài 3), Transformer dùng attention để hiểu ngữ cảnh (bài 4), và tất cả được tiền huấn luyện ở quy mô khổng lồ, rồi hậu huấn luyện để thành trợ lý, thành mô hình suy luận hay tác tử (agent) biết dùng công cụ mà bạn gặp hằng ngày (bài 5).' }
    ],
    keyPoints: [
      'Pretraining: dự đoán token tiếp theo trên lượng văn bản khổng lồ, tạo ra mô hình nền.',
      'Post-training: SFT dạy làm trợ lý; RLHF, RLAIF/Constitutional AI căn chỉnh hành vi theo giá trị con người.',
      'Mô hình suy luận được huấn luyện bằng RL với phần thưởng kiểm chứng được và "nghĩ" lâu hơn lúc trả lời (test-time compute).',
      'Chưng cất tạo mô hình nhỏ, nhanh từ mô hình lớn; mô hình open-weight công bố trọng số để ai cũng chạy được.',
      'Ảo giác xảy ra vì mô hình tối ưu cho văn bản nghe hợp lý, không phải tra cứu sự thật; luôn kiểm chứng.'
    ],
    quiz: [
      { q: 'Nhiệm vụ huấn luyện chính trong giai đoạn pretraining của LLM là gì?', options: ['Trả lời câu hỏi trắc nghiệm do con người soạn', 'Phân loại ảnh chó mèo', 'Chấm điểm các câu trả lời', 'Dự đoán token tiếp theo trong văn bản'], answer: 3, explain: 'Pretraining là tự giám sát: đáp án chính là token tiếp theo có sẵn trong văn bản.' },
      { q: 'Điểm khác biệt chính của học tăng cường với phần thưởng kiểm chứng được (RLVR) so với RLHF là gì?', options: ['RLVR không cần dữ liệu', 'RLVR chỉ dùng cho ảnh', 'Phần thưởng đến từ bộ kiểm tra tự động (so đáp số, chạy unit test) thay vì mô hình học từ lựa chọn của con người', 'RLVR diễn ra trước pretraining'], answer: 2, explain: 'Với toán và lập trình, đúng sai có thể kiểm tra tự động, nên không cần người chấm từng câu. RLHF hợp với tiêu chí chủ quan như tính hữu ích.' },
      { q: 'Nguyên nhân gốc rễ khiến LLM có thể ảo giác là gì?', options: ['Mô hình được tối ưu để sinh văn bản nghe hợp lý chứ không tra cứu sự thật trong cơ sở dữ liệu', 'Máy chủ bị quá tải', 'Người dùng gõ sai chính tả', 'Mô hình cố tình nói dối'], answer: 0, explain: 'LLM dự đoán token có xác suất cao; khi thiếu kiến thức chắc chắn, nó vẫn có thể tạo ra câu nghe rất thuyết phục nhưng sai.' }
    ],
    resources: [
      { title: 'Google ML Crash Course — LLMs: Fine-tuning, distillation, and prompt engineering', url: 'https://developers.google.com/machine-learning/crash-course/llm/tuning', note: 'Tiếng Anh, miễn phí, thuộc module Intro to LLMs' },
      { title: 'Andrej Karpathy — Deep Dive into LLMs like ChatGPT', url: 'https://www.youtube.com/watch?v=7xTGNNLPyMI', note: 'Tiếng Anh, video 3,5 giờ đi sâu toàn bộ quy trình huấn luyện LLM' },
      { title: 'Anthropic — Constitutional AI: Harmlessness from AI Feedback', url: 'https://www.anthropic.com/research/constitutional-ai-harmlessness-from-ai-feedback', note: 'Tiếng Anh, bài nghiên cứu gốc về RLAIF' },
      { title: 'Hugging Face LLM Course — Open R1 for Students', url: 'https://huggingface.co/learn/llm-course/chapter12/1', note: 'Tiếng Anh, miễn phí, thực hành học tăng cường (GRPO) cho mô hình suy luận' }
    ],
    video: { id: 'zjkBMFhNj_g', title: '[1hr Talk] Intro to Large Language Models', channel: 'Andrej Karpathy', lang: 'en', minutes: 60 },
    updated: '2026-09'
  }
};

export default lessons;
