"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_AUTOR_MOSTRAR = void 0;
exports.SQL_AUTOR_MOSTRAR = {
    TODAS: "SELECT a.id_autor, a.nombre, a.apellido, a.nacionalidad,a.descripcion \
    FROM autor a \
    ORDER BY a.id_autor"
};
