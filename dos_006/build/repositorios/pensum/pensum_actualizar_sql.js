"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_PENSUMS_ACTUALIZAR = void 0;
exports.SQL_PENSUMS_ACTUALIZAR = {
    CONFIRMAR: "SELECT COUNT(p.cod_programa) AS cantidad \
    FROM programas p \
    WHERE p.cod_programa = $1",
    ACTUALIZAR: "UPDATE pensums SET cod_programa=$1 ,nombre_pensum=$2 \
    WHERE cod_pensum=$3 \
    RETURNING cod_pensum"
};
