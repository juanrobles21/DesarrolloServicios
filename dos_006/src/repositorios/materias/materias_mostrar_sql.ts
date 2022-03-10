export const SQL_MATERIAS_MOSTRAR = {
    TODAS: "SELECT m.cod_materia, m.nombre_materia, m.referencia_materia \
    FROM materias m \
    ORDER BY m.cod_materia"
}