"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_AUTOR_CREAR = void 0;
exports.SQL_AUTOR_CREAR = {
    CREAR: "INSERT INTO autor(nombre,apellido,nacionalidad,descripcion) \
    values($1,$2,$3,$4) RETURNING id_autor"
};
