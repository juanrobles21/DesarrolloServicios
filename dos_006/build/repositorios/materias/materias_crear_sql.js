"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_MATERIAS_CREAR = void 0;
exports.SQL_MATERIAS_CREAR = {
    CONFIRMAR: "SELECT COUNT(m.cod_materia) AS cantidad \
    FROM materias m \
    WHERE lower(m.nombre_materia)=lower($1)",
    CREAR: "INSERT INTO materias(nombre_materia,referencia_materia) \
    values($1,$2) RETURNING cod_materia"
};
