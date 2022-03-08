export const SQL_MATERIAS = {
    TODAS: "SELECT m.cod_materia, m.nombre_materia, m.referencia_materia \
    FROM materias m",

    CARGAR: "SELECT m.cod_materia, m.nombre_materia, m.referencia_materia \
    FROM materias m \
    WHERE m.cod_materia=$1"
}