import axios from 'axios'

export const fetchPost = (hashId, params) => axios.get(`/__/p/${hashId}`, { params })
