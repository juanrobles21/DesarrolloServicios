export const SQL_ACCESOS_VALIDAR = {
    VALIDAR: "SELECT a.cod_acceso , r.nombre_rol \
    FROM accesos a \
    INNER JOIN roles r \
    ON a.cod_rol=r.cod_rol \
    WHERE a.correo_acceso = $1 \
    AND a.clave_acceso= $2"
}