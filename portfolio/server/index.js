const file = require('fs')
const http = require('http')
const url = require('url')
// import { unlink } from 'node:fs/promises'
// const fileContent = file.readFileSync("./file.txt", 'utf-8')
// console.log(fileContent)
// let textout = `the New is being created using nodejs is this and the code we are putting from one text file to other \n${fileContent}`
// const fileWrite = file.writeFileSync('./writefile.txt', textout)

// file asyncronous 
// file.readFile("./writefile.txt", "utf-8", (err, data) => {
// if (err) {
//     throw err
// }
//     file.writeFile('./firstfil.txt', `${data}`, 'utf-8', (err) => {
//         console.log(err)
//     })
//     console.log(data, "11..")

// })
// file.unlink("./file.txt")
const server = http.createServer((req, res) => {
    let path = req.url
    if (path === '/route1') {
        res.end("Route1")
    }
    else if (path === '/apijson' || path == '/') {
        let dataObject = file.readFileSync(`${__dirname}/jsonFile.json`, 'utf-8')
        res.writeHead(200, {
            'Content-type': 'application/json'
        })
        // dataObject = parsejSON(dataObject)
        res.end(`${dataObject}`)

    }
    else {

        res.writeHead(404, {
            'Content-type': 'text/html',
            'my-own-header': 'Page Not Found'
        });
        res.end("<h1>Page Not Found !</h1>")
    }
})
server.listen(8888, "127.0.0.4", () => {
    console.log("server is listening")
})
console.log("14....")