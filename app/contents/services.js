import _map from 'lodash.map'

const services = [
  'programming_language_detection',
  'spam_detection',
  'tag_compare',
  'auto_tagging',
  'language_detection',
  'recommendation_system',
  'plagiarism_detection',
  'google_translate_detection',
]

export const getServiceItem = (app, item) => {
  return {
    key: item,
    trialEnabled: item !== 'recommendation_system',
    name: app.$t(`services.${item}.name`),
    description: app.$t(`services.${item}.description`),
    contents: app.$t(`services.${item}.contents`),
  }
}

export const getServices = (app) => _map(services, (item) => getServiceItem(app, item))

export default services
