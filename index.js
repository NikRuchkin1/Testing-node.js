const http = require('http')
const pid = process.pid

http.createServer((res, req) => {
    for (let i=0; i<1E7; i++) {}
    res.end('Hello from Node.js! \n')
})
.listen(8800, ()=>{
    console.log(`Server started ${pid}`)
}) 