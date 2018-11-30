import axios from 'axios'

export const fetchPost = (hashId, params) => axios.get(`/api/p/${hashId}`, { params })
