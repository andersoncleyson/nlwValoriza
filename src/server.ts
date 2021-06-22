import express from 'express';
import "reflect-metadata";
import { router } from "./routes";
import "./database";

const app = express();

app.use(express.json())

app.use(router);

/**
 * GET => Buscar uma informação
 * POST => Inserir uma informação
 * PUT => Alterar uma informação
 * DELETE => Apagar uma informação
 * PATCH => Alterar uma informação específica
 */

/**
 * Tipos de parâmetros
 * Routes Params => http:/localhost:3000/produtos/423423423
 * Query Parmas => http://localhost:3000/produtos?name=teclado&description=tecladobom
 * 
 * Body Params => {
 *  "name": "teclado",
 * "description": "teclado bom"
 * 
 * }
 */

app.listen(3000, () => console.log("Server is running..."))

//50:18 - Entidades