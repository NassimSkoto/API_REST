import { randomUUID } from 'crypto'
import {readFile, writeFile} from 'fs/promises'

const readTodos = async ()=>{
    try{
        const content = await readFile('./srcExercice1/todos.json','utf-8')
        return JSON.parse(content)
    }catch(error){
        if(error.code ==='ENOENT'){
            return []
        }
    }
}

export const createPost = async (req,res)=>{
    try{
        const{text,completed = false} = req.body
        
        if(!text.trim()||typeof completed !== 'boolean'){
            return res.status(400).send({
                error:'Invalid body',
            })
        }

    
    const todos = await readTodos()
    todos.push({
        id: randomUUID(),
        text: text.trim(),
        completed
    })

    await writeFile('./srcExercice1/todos.json', JSON.stringify(todos, null, 2))
    res.status(200)

    }catch{
        res.status(500).send(error)
    }
}