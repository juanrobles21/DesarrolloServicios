export const SQL_ACCESOS_VALIDAR = {
    VALIDAR: "SELECT us.nombres_usuario, us.apellidos_usuario, ro.nombre_rol \
    FROM accesos acc \
    INNER JOIN usuarios us \
    ON us.cod_usuario = acc.cod_usuario \
    RIGHT JOIN roles ro \
    ON ro.cod_rol = us.cod_rol \
    WHERE acc.correo_acceso= $1 \
    AND acc.clave_acceso=$2"
}