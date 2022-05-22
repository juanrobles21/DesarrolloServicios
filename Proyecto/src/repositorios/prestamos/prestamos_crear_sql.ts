export const SQL_PRESTAMOS_CREAR = {

    CONFIRMAR: "SELECT COUNT(c.id_cliente) AS cantidad \
    FROM cliente c\
    WHERE c.id_cliente=$3",

    CREAR: "INSERT INTO prestamos(fecha_inicio,descripcion,id_cliente) \
    values($1,$2,$3) RETURNING id_prestamo"

}