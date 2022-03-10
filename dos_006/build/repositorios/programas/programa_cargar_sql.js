"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_PROGRAMAS_CARGAR = void 0;
exports.SQL_PROGRAMAS_CARGAR = {
    CARGAR: "SELECT p.cod_programa, p.nombre_programa \
    FROM programas p \
    WHERE p.cod_programa=$1"
};
