"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_EDITORIAL_ACTUALIZAR = void 0;
exports.SQL_EDITORIAL_ACTUALIZAR = {
    CONFIRMAR: "SELECT COUNT(e.id_editorial) AS cantidad \
    FROM editorial e \
    WHERE lower(e.nombre)=lower($1)",
    ACTUALIZAR: "UPDATE editorial SET nombre=$1 ,pais=$2 ,telefono=$3 \
    WHERE id_editorial=$4 \
    RETURNING id_editorial"
};
