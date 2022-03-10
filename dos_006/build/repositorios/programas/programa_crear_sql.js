"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_PROGRAMAS_CREAR = void 0;
exports.SQL_PROGRAMAS_CREAR = {
    CONFIRMAR: "SELECT COUNT(p.cod_programa) AS cantidad \
    FROM programas p \
    WHERE lower(p.nombre_programa) = lower($1)",
    CREAR: "INSERT INTO programas(nombre_programa) \
    values($1) RETURNING cod_programa"
};
