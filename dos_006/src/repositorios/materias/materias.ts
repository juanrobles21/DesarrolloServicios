export const SQL_MATERIAS = {
    TODAS: "SELECT m.cod_materia, m.nombre_materia, m.referencia_materia \
    FROM materias m",

    CONFIRMAR: "SELECT COUNT(m.cod_materia) AS cantidad \
    FROM materias m \
    WHERE lower(m.nombre_materia)=lower($1)",

    CREAR: "INSERT INTO materias(nombre_materia,referencia_materia) \
    values($1,$2) RETURNING cod_materia",

    CARGAR: "SELECT m.cod_materia, m.nombre_materia, m.referencia_materia \
    FROM materias m \
    WHERE m.cod_materia=$1",

    ELIMINAR: "DELETE FROM materias WHERE cod_materia = $1"
}