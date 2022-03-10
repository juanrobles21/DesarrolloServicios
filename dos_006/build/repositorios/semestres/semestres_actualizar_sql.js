"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_SEMESTRES_ACTUALIZAR = void 0;
exports.SQL_SEMESTRES_ACTUALIZAR = {
    CONFIRMAR: "SELECT COUNT(s.cod_semestre) AS cantidad \
    FROM  semestres s \
    WHERE lower(s.nombre_semestre) = lower($1)",
    ACTUALIZAR: "UPDATE semestres SET nombre_semestre = $1 \
    WHERE cod_semestre=$2 \
    RETURNING cod_semestre"
};
