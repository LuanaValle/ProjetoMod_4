/*
Esse arquivo deve ser executado apenas uma vez para que a o banco seja criado e populado
*/
import sqlite3 from 'sqlite3'
sqlite3.verbose()
// Serve para fixar um caminho do meu database
import { dirname } from'path'
import { fileURLToPath } from 'url'
const filePath = dirname(fileURLToPath(import.meta.url)) + '/database.db'

// Criando o arquivo e/ou abrindo a "conexão" do meu database
const db = new sqlite3.Database('./database.db');

// Status Entrega
const STATUS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "ENTREGA" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "STATUS" varchar(64),
  );`;

const ADD_ENTREGA_DATA = `
INSERT INTO ENTREGA (ID, LOCALIZACAO)
VALUES 
??
`

function criaTabelaStatus() {
    db.run(STATUS_SCHEMA, (error)=> {
       if (error) console.log("Erro ao localizar entrega");
    });
}


function populaTabelaStatus() {
    db.run(ADD_ENTREGA_DATA, (error)=> {
       if (error) console.log("Erro ao localizar entrega");
    });
}