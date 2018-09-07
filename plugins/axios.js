import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://machine-learning.viblo.asia/api',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'multipart/form-data',
  }
})

export default instance
