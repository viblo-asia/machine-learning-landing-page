import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://machine-learning.viblo.asia/api',
  headers: {
    'Accept': 'application/json',
  }
})

export default instance
