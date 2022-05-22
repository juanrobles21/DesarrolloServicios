"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_PRESTAMOS_ACTUALIZAR = void 0;
exports.SQL_PRESTAMOS_ACTUALIZAR = {
    CONFIRMAR: "SELECT COUNT(c.id_cliente) AS cantidad \
    FROM cliente c\
    WHERE c.id_cliente=$3",
    ACTUALIZAR: "UPDATE prestamos SET fecha_inicio=$1 ,descripcion=$2 ,id_cliente=$3 \
    WHERE id_prestamo=$4 \
    RETURNING id_prestamo"
};
