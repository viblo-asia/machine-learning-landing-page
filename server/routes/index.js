import { Router } from 'express'
import machineLearning from './machine-learning'
import contents from './contents'

const router = Router()

router.use(machineLearning())
router.use(contents)

export default router
