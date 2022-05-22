"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_AUTORES_LIBRO_CREAR = void 0;
exports.SQL_AUTORES_LIBRO_CREAR = {
    CONFIRMARAUTOR: "SELECT COUNT(a.id_autor) AS cantidad \
    FROM autor a \
    WHERE a.id_autor=$1",
    CONFIRMARLIBRO: "SELECT COUNT(l.id_libro) AS cantidad \
    FROM libro l \
    WHERE l.id_libro=$2",
    CREAR: "INSERT INTO autores_libro(id_autor,id_libro) \
    values($1,$2) RETURNING id_autorlibro"
};
