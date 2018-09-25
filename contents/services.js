const services = [
  'programming_language_detection',
  'spam_detection',
  'tag_compare',
  'auto_tagging',
  'language_detection',
]

export const getServiceItem = (app, item) => ({
  key: item,
  name: app.$t(`services.${item}.name`),
  description: app.$t(`services.${item}.description`),
  contents: app.$t(`services.${item}.contents`),
  image: `/images/our-services/${item}.png`,
  url: item.replace(/\_/g, '-'),
})

export const getServices = (app) => services.map((item) => getServiceItem(app, item))

export default services
