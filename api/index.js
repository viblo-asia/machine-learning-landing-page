import axios from '~/plugins/axios'

export const detectCode = data => axios.post('/programming_language_detect', data)
export const detectSpam = data => axios.post('/spam_detect', data)
export const tagCompare = data => axios.post('/tag_compare', data)
export const autoTagging = data => axios.post('/auto_tagging', data)
export const detectLanguage = data => axios.post('language_detect', data)
