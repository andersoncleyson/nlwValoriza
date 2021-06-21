import express from 'express';

const app = express();

/**
 * GET => Buscar uma informação
 * POST => Inserir uma informação
 * PUT => Alterar uma informação
 * DELETE => Apagar uma informação
 * PATCH => Alterar uma informação específica
 */


app.get("/test", (request, response) => {
    // Request => Entrando
    // Response => Saindo
    return response.send("Hello, friend")
});

app.post("/test-post", (request, response) => {
    return response.send("Hello world")
})

app.listen(3000, () => console.log("Server is running..."))