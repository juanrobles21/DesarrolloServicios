export const SQL_PROGRAMAS_ACTUALIZAR = {
    CONFIRMAR: "SELECT COUNT(p.cod_programa) AS cantidad \
    FROM programas p \
    WHERE lower(p.nombre_programa) = lower($1)",

    ACTUALIZAR: "UPDATE programas SET nombre_programa = $1 \
    WHERE cod_programa=$2 \
    RETURNING cod_programa"

}