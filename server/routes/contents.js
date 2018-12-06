import { resolve } from 'path'
import { Router } from 'express'
import { VIBLO_API_URL } from '../env'
import Axios from 'axios'

const router = Router()

const axios = Axios.create({
  baseURL: VIBLO_API_URL || 'https://api.viblo.asia',
  headers: {
    'Accept': 'application/json',
  }
})

router.get('/__/p/:hashId', async (req, res) => {
  try {
    const { data } = await axios.get(`/p/${req.params.hashId}`)
    res.json(data)
  } catch (e) {
    res.send(404)
  }
})

export default router
