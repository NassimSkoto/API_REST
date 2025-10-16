import {Router} from 'express'
import { getAllusers } from '../controllers/usersController.js'

const PORT = process.env.PORT || "3000"

const router = Router()
router.use(express.json())

router.get('/',getAllusers)

export default router