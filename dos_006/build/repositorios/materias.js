"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_MATERIAS = void 0;
exports.SQL_MATERIAS = {
    TODAS: "SELECT m.cod_materia, m.nombre_materia, m.referencia_materia \
    FROM materias m",
    CARGAR: "SELECT m.cod_materia, m.nombre_materia, m.referencia_materia \
    FROM materias m \
    WHERE m.cod_materia=$1"
};
