export const SQL_DOCENTES ={
    TODAS: 'SELECT f.nombre_facultad, d.nombre_docente, d.apellidos_docentes, d.tipo_docente \
    FROM docentes d \
    INNER JOIN facultades f \
    ON d.cod_facultad = f.cod_facultad'
}