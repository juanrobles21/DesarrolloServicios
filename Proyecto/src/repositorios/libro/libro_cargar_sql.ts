export const SQL_LIBRO_CARGAR = {
    CARGAR: "SELECT l.titulo, l.fecha_publicacion, l.codigo, l.isbn, p.fecha_inicio, c.nombre, c.apellido \
    FROM libro l \
    INNER JOIN detalle_prestamos dp \
    ON l.id_libro = dp.id_libro \
    INNER JOIN prestamos p \
    ON p.id_prestamo = dp.id_prestamo \
    INNER JOIN cliente c \
    ON c.id_cliente = p.id_cliente \
    WHERE dp.id_detalleprestamo=$1"
}