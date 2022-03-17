export const SQL_USUARIOS_LISTAR={
    LISTAR:"SELECT us.nombres_usuario,us.apellidos_usuario,ro.nombre_rol,COUNT(ing.cod_ingreso) AS Ingreaso_Sistema \
    FROM usuarios us \
    RIGHT JOIN roles ro \
    ON ro.cod_rol = us.cod_rol\
    LEFT JOIN accesos acc \
    ON acc.cod_usuario = us.cod_usuario \
    INNER JOIN ingresos ing \
    ON ing.cod_usuario = acc.cod_usuario \
    GROUP BY us.cod_usuario, ro.nombre_rol"
}