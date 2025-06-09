// import { createServer } from 'node:http'

// // Executar o comando node --watch "nome do arquivo.js" serve como nodemon

// const server = createServer((request, response) => {
//     // console.log('Servidor criado.')
//     response.write('oi');

//     return response.end();
// })

// server.listen(8000)

import { fastify } from 'fastify'

const server = fastify()

server.get('/', () => {
    return 'Hello World'
})

server.get('/hello', () => {
    return 'Hello Rocketseat'
})

server.get('/node', () => {
    return 'Hello Node'
})

server.listen({
    port: 8000,
})
