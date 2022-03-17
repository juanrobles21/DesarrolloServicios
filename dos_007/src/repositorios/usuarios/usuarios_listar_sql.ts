export const SQL_USUARIOS_LISTAR={
    LISTAR:"SELECT us.nombres_usuario,us.apellidos_usuario,COUNT(ing.cod_ingreso) AS Ingreaso_Sistema \
    FROM usuarios us \
    INNER JOIN accesos acc \
    ON acc.cod_usuario = us.cod_usuario \
    RIGHT JOIN ingresos ing \
    ON ing.cod_usuario = acc.cod_usuario \
    GROUP BY us.cod_usuario"
}