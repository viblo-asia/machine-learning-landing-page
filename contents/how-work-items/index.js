import services from '../service-items'
import {
  postSummarization,
  postAutoTagging,
  languageDetection,
  tagDuplicatesDetection,
  copyPasteChecker
} from './contents'

const descriptions = [
  'Trích xuất các nội dung chính trong bài viết Viblo, từ đó giúp người dùng nắm được những nội dung quan trọng nhất về bài viết Viblo trong chỉ vài gạch đầu dòng.',
  'Tự động phát hiện ra các tag tương ứng và phù hợp với bài viết để gợi ý cho người dùng khi viết bài trên Viblo.',
  'Tự động phát hiện ra các ngôn ngữ hiện tại đang được sử dụng trong bài viết của người dùng từ đó đưa ra tỷ lệ phần trăm dự đoán cho các ngôn ngữ xuất hiện trong văn bản.',
  'Kiểm tra các tag trùng hoặc gần tương tự nhau để loại bỏ những tag dư thừa.',
  'So sánh hai văn bản đầu vào để tìm ra các các thao tác cần thực hiện (thêm, sửa, xóa) nhằm biến đổi văn bản thứ nhất thành văn bản thứ hai.',
]

const images = [
  '/images/thumb/parallax-15.jpg',
  '/images/thumb/parallax-16.jpg',
  '/images/thumb/parallax-17.jpg',
  '/images/thumb/parallax-18.jpg',
  '/images/thumb/parallax-20.jpg',
]

const articles = [
  postSummarization,
  postAutoTagging,
  languageDetection,
  tagDuplicatesDetection,
  copyPasteChecker
]

const items = services.reduce((services, item, index) => {
  if (!item.url) return services

  const service = Object.assign({}, item, {
    description: descriptions[index],
    image: images[index],
    contents: articles[index]
  })

  services.push(service)

  return services
}, [])

export default items
