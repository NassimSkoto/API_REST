export const getAllQuestions = router.get('/',(req, res)=>{
    res.status(200).send([{
        id: "1",
        question:'Quelle est la capitale de la france ?',
        answer:'Paris',
    }
])
})


export const createQuestion = (req,res)=>{
    const {question, answer} = req.body
    if(!question || !answer){
        return res.status(400).send({error:'Invalid request'})
    }
    res.status(201).send({message:'Question inseré'})
}

export const deleteQuestion = (req, res)=>{
    const{id} = req.params
    res.status(200).send({message:`question ${id} deleted`})
}