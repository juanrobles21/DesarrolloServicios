"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_DOCENTES = void 0;
exports.SQL_DOCENTES = {
    TODAS: "SELECT  d.cod_docentes, d.documento_docente, d.nombre_docente, d.apellidos_docentes, f.nombre_facultad, \
    CASE d.tipo_docente \
    WHEN 1 THEN 'Decano' \
    WHEN 2 THEN 'Docente Titular' \
    WHEN 3 THEN 'Docente Asociado' \
    WHEN 4 THEN 'Docente Asistente' \
    WHEN 5 THEN 'Docente Auxiliar' \
    WHEN 6 THEN 'Otro' \
    END  AS TipoDocente\
    FROM docentes d \
    INNER JOIN facultades f \
    ON f.cod_facultad = d.cod_facultad"
};
