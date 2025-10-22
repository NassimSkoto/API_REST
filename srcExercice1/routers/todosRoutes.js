import {Router} from "express"
import {createPost} from "../controllers/todosController.js"


const router = Router()

router.post('/',createPost)

export default router