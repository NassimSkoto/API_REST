import http from 'http'


const PORT = process.env.PORT || "3000"

const server = http.createServer((req, res)=>{
    res.end('Hello World dsds')
})

server.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})