import axios from 'axios'

export const detectSpam = data => axios.post('/_/viblo-lang-and-spam-detection/', data)
export const detectCode = data => axios.post('/_/viblo-programming-language-detection/', data)
export const tagCompare = data => axios.post('/_/tag_compare', data)
export const autoTagging = data => axios.post('/_/auto_tagging', data)
export const detectLanguage = data => axios.post('/_/language_detect', data)
export const detectPlagiarism = data => axios.post('/_/plagiarism_detect', data)
