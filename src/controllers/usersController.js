export const getAllusers = (req, res)=>{
    res.status(200).send([{
        message:"voici la liste de tous le users"
    }
])
}