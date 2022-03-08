export const SQL_PROGRAMAS = {
    TODAS: "SELECT p.cod_programa, p.nombre_programa \
    FROM programas p",

    CONFIRMAR: "SELECT COUNT(p.cod_programa) AS cantidad \
    FROM programas p \
    WHERE lower(p.nombre_programa) = lower($1)",

    CREAR: "INSERT INTO programas(nombre_programa) \
    values($1) RETURNING cod_programa"
}