"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_LIBRO_ACTUALIZAR = void 0;
exports.SQL_LIBRO_ACTUALIZAR = {
    CONFIRMAR: "SELECT COUNT(l.id_libro) AS cantidad \
    FROM libro l \
    WHERE lower(l.titulo)=lower($1)",
    CONFIRMAREDITORIAL: "SELECT COUNT(e.id_editorial) AS cantidad \
    FROM editorial e \
    WHERE e.id_editorial=$5",
    ACTUALIZAR: "UPDATE libro SET titulo=$1 ,fecha_publicacion=$2 ,codigo=$3, isbn=$4, id_editorial=$5 \
    WHERE id_libro=$6 \
    RETURNING id_libro"
};
