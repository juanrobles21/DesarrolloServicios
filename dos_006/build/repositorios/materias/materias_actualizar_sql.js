"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_MATERIAS_ACTUALIZAR = void 0;
exports.SQL_MATERIAS_ACTUALIZAR = {
    CONFIRMAR: "SELECT COUNT(m.cod_materia) AS cantidad \
    FROM materias m \
    WHERE lower(m.nombre_materia) = lower($1)",
    ACTUALIZAR: "UPDATE materias SET nombre_materia=$1 ,referencia_materia=$2 \
    WHERE cod_materia=$3 \
    RETURNING cod_materia"
};
