// Abrir .env, ler variaveis ambientes e salvar num process.env, onde tem cada uma das variáveis
import 'dotenv/config'

import postgres from "postgres";

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;
const URL = `postgres://${PGUSER}:${PGPASSWORD}@${PGDATABASE}?options=project%3D${ENDPOINT_ID}`;


export const sql = postgres(URL, { ssl: 'require'});