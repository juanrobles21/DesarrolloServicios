"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_PENSUM = void 0;
exports.SQL_PENSUM = {
    TODAS: "SELECT pe.cod_pensum, pr.nombre_programa, pe.nombre_pensum \
    FROM pensums pe \
    INNER JOIN programas pr \
    ON pe.cod_programa = pr.cod_programa"
};
