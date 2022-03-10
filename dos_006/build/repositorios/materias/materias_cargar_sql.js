"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_MATERIAS_CARGAR = void 0;
exports.SQL_MATERIAS_CARGAR = {
    CARGAR: "SELECT m.cod_materia, m.nombre_materia, m.referencia_materia \
    FROM materias m \
    WHERE m.cod_materia=$1"
};
