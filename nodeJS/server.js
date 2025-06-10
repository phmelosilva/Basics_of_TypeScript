// import { createServer } from 'node:http'

// // Executar o comando node --watch "nome do arquivo.js" serve como nodemon

// const server = createServer((request, response) => {
//     // console.log('Servidor criado.')
//     response.write('oi');

//     return response.end();
// })

// server.listen(8000)

import { fastify } from 'fastify'
// import { DatabaseMemory } from './database-memory.js' 
import { DatabasePostgres } from './database-postgres.js'

// GET, POST, PUT, DELETE

const server = fastify()

// const database = new DatabaseMemory();
const database = new DatabasePostgres();

// POST http://localhost:8000/videos
// PUT http://localhost:8000/videos/:id

// Request Body

server.post('/videos', async (request, reply) => {
    const { title, description, duration } = request.body

    await database.create({
        title,
        description,
        duration,
    })

    console.log(database.list())

    // status -Retorna Status HTTP como 400, 404, 200, etc...
    // send - envia o status informado, neste caso 201 - criado com sucesso
    return reply.status(201).send(); 
})

server.get('/videos', async (request) => {
    const search = request.query.search;

    const videos = await database.list(search)

    // return reply.status(); -> Fastify entende o return abaixo igual esse
    return videos;
})

server.put('/videos/:id', async (request, reply) => {
    // dentro de params acessamos todos os parâmetros em :
    const videoId = request.params.id;
    const { title, description, duration } = request.body

    // Parecido com POST, vai receber as informações para atualizar
    await database.update(videoId, {
        title,
        description,
        duration,
    })

    // 204 - Sucesso mas não tem conteúdo na resposta
    return reply.status(204).send(); 
})

server.delete('/videos/:id', async (request, reply) => {
    const videoId = request.params.id;

    console.log(videoId);
    
    await database.delete(videoId);

    return reply.status(204).send();
})

server.listen({
    port: 8000,
})
