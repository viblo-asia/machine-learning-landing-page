export const metaTag = (name, content, attribute = 'name') => ({
  hid: name,
  [attribute]: name,
  content
})

export const defaultSEOData = {
  title: 'Viblo Machine Learning',
  description: 'Nơi công bố các dịch vụ trí tuệ nhân tạo mới nhất, đang được sử dụng của Viblo.',
  keywords: 'viblo, machine learning, deep learning, programming language detection, spam detection, tag compare, auto tagging, language detection'
}

export const pageSEO = (pageSEOData = {}) => {
  const { title, description, keywords } = Object.assign({}, defaultSEOData, pageSEOData)

  return [
    metaTag('description', description),
    metaTag('keywords', keywords),

    // Open graph meta tags:
    metaTag('og:url', 'https://machine-learning.viblo.asia/', 'property'),
    metaTag('og:type', 'website', 'property'),
    metaTag('og:title', title, 'property'),
    metaTag('og:image', 'https://machine-learning.viblo.asia/images/hero/slider.png', 'property'),
    metaTag('og:description', description, 'property'),

    // Twitter:
    metaTag('twitter:card', 'summary_large_image'),
  ]
}
