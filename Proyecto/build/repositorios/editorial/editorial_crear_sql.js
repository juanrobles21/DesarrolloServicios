"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_EDITORIAL_CREAR = void 0;
exports.SQL_EDITORIAL_CREAR = {
    CONFIRMAR: "SELECT COUNT(e.id_editorial) AS cantidad \
    FROM editorial e \
    WHERE lower(e.nombre)=lower($1)",
    CREAR: "INSERT INTO editorial(nombre,pais,telefono) \
    values($1,$2,$3) RETURNING id_editorial"
};
