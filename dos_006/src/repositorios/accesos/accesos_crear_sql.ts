export const SQL_ACCESOS_VALIDAR = {
    VALIDAR: "SELECT a.cod_acceso \
    FROM accesos a \
    WHERE a.correo_acceso = $1 \
    AND a.clave_acceso= $2"
}