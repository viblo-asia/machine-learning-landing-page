import axios from 'axios'

export const detectCode = data => axios.post('/_/programming_language_detect', data)
export const detectSpam = data => axios.post('/_/viblo-lang-and-spam-detection/', data)
export const autoTagging = data => axios.post('/_/viblo-tag-generation/', data)
export const detectLanguage = data => axios.post('/_/language_detect', data)
export const detectPlagiarism = data => axios.post('/_/plagiarism_detect', data)
