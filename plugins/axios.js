import axios from 'axios'
import { convertFromObject } from '~/utils/form-data'

const instance = axios.create({
  baseURL: 'https://machine-learning.viblo.asia/api',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'multipart/form-data',
  }
})

instance.interceptors.request.use(config => {
  config.data = convertFromObject(config.data)
  return config
})

export default instance
