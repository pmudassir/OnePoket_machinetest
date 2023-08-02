// Task 1: Basic Node.js Server
// Create a simple Node.js server that listens on port 3000 and responds with "Hello, World!" for all incoming HTTP requests. 
// You can use any library or framework of your choice.

const http = require("http")

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'text/plain' })
    res.end("Hello, World!")
})

server.listen(3000, ()=>{
    console.log("Server is running on http://localhost:3000/");
})