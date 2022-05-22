"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_EDITORIAL_MOSTRAR = void 0;
exports.SQL_EDITORIAL_MOSTRAR = {
    TODAS: "SELECT e.id_editorial, e.nombre, e.pais, e.telefono \
    FROM editorial e \
    ORDER BY e.id_editorial"
};
