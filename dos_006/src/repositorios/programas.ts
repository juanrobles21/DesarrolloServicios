export const SQL_PROGRAMAS = {
    TODAS: "SELECT p.cod_programa, p.nombre_programa \
    FROM programas p",

    CONFIRMAR: "SELECT COUNT(p.cod_programa) AS cantidad \
    FROM programas p \
    WHERE lower(p.nombre_programa) = lower($1)",

    CREAR: "INSERT INTO programas(nombre_programa) \
    values($1) RETURNING cod_programa",

    CARGAR: "SELECT p.cod_programa, p.nombre_programa \
    FROM programas p \
    WHERE p.cod_programa=$1",

    ELMINAR: "DELETE FROM programas WHERE cod_programa = $1"
}