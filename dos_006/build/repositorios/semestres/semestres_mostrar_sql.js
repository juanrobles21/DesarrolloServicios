"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_SEMESTRES_MOSTRAR = void 0;
exports.SQL_SEMESTRES_MOSTRAR = {
    TODAS: "SELECT s.cod_semestre, s.nombre_semestre \
    FROM semestres s \
    ORDER BY p.cod_semestre"
};
