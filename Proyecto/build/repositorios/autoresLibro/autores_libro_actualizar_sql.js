"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_AUTORES_LIBRO_ACTUALIZAR = void 0;
exports.SQL_AUTORES_LIBRO_ACTUALIZAR = {
    CONFIRMARAUTOR: "SELECT COUNT(a.id_autor) AS cantidad \
    FROM autor a \
    WHERE a.id_autor=$1",
    CONFIRMARLIBRO: "SELECT COUNT(l.id_libro) AS cantidad \
    FROM libro l \
    WHERE l.id_libro=$2",
    ACTUALIZAR: "UPDATE autores_libro SET id_autor=$1 ,id_libro=$2  \
    WHERE id_autorlibro=$3 \
    RETURNING id_autorlibro"
};
