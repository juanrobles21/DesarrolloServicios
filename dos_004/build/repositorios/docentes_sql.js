"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_DOCENTES = void 0;
exports.SQL_DOCENTES = {
    TODAS: 'SELECT tp.nombre_tipodocente, d.cod_docentes, d.documento_docente,d.nombre_docente, d.apellidos_docentes, f.nombre_facultad \
    FROM docentes d \
    INNER JOIN facultades f \
    ON d.cod_facultad = f.cod_facultad \
	INNER JOIN tipo_docente tp \
	ON tp.cod_tipodocente = d.tipo_docente \
    ORDER BY d.cod_docentes'
};
