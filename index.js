const http = require('http')
const fs = require('fs')

const PORT = 8080

const server = http.createServer((request, response) => {
    const path = (request.url === '/') ? `/public/html/index.html` : request.url
    console.log(request.url);
    fs.readFile(`.${path}`, (err, data) => {
        if (err) {
            response.write('<h1>Error 404: File not found </h1>')
        } else {
            response.write(data)
        }
        response.end()
    })
})

server.listen(PORT)