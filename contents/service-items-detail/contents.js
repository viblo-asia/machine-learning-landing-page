export const langCodeDetect = `<p>
  Hệ thống giúp xác định những phần chứa mã nguồn (code) trong bài viết được viết theo ngôn ngữ lập trình nào.
  Từ đó dễ dàng hơn cho hệ thống để xử lý, highlight code trong bài viết...
</p>`

export const spamDetect = `<p>
  Hệ thống trí tuệ nhân tạo được training trên gần <strong>15,000 bài viết</strong>
  về công nghệ hiện có trên Viblo cũng như các bài báo, quảng cáo khác
  giúp xác định được đâu là bài đăng có nội dung không liên quan tới lĩnh vực công nghệ
  với độ chính xác rất cao <strong>(99,7%)</strong> trong khoảng thời gian không để kể (ms).
</p>`

export const languageDetect = `<p>
  Sử dụng <strong>giải thuật Đồ thị N-Gram (Graph-based N-Gram)</strong>
  và các kĩ thuật <strong>xử lý dữ liệu dạng kí tự Unicode</strong>
  để đưa ra giải thuật giúp định nghĩa ngôn ngữ xuất hiện trong văn bản
  và có khả năng huấn luyện thêm các ngôn ngữ khác nếu có một tập dữ liệu đủ tốt.
</p>

<p>
  Ứng dụng trong việc hỗ trợ cho người dùng lựa chọn ngôn ngữ cho bài viết của mình,
  trợ giúp đắc lực cho việc tìm kiếm bằng Elasticsearch được chính xác hơn.
</p>`

export const autoTagging = `<p>
  Mô hình được huấn luyện trên các bài viết có nội dung về công nghê, chứa nhiều
  từ vựng và từ khóa về các chủ đề công nghệ hiện nay. Từ đó có thể đưa ra được
  những tag hợp lý dựa trên nội dung bài viết trong thời gian không đáng kể.
</p>`

export const tagCompare = `<p>
  Training mô hình trên các tag có sẵn hiện có trên Viblo, đồng thời huấn luyện
  với các bài viết chứa các tag này. Mô hình giúp lấy ra những tag gần nhất
  (kể cả về mặt từ ngữ - words, lẫn về mặt ngữ nghĩa - meaning).
</p>`

export default [
  langCodeDetect,
  spamDetect,
  tagCompare,
  autoTagging,
  languageDetect,
]
