import { Router } from 'express'
import { createQuestion, deleteQuestion, getAllQuestions } from '../controllers/questionsController.js'

const PORT = process.env.PORT || "3000"

const router = Router()
router.use(express.json())

router.get('/',getAllQuestions)
router.post('/',createQuestion)
router.delete('/:id',deleteQuestion)


export default router