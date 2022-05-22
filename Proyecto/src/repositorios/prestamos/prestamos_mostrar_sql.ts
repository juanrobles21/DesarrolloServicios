export const SQL_PRESTAMOS_MOSTRAR = {
    TODAS: "SELECT p.id_prestamo, p.fecha_inicio, p.descripcion, c.identificacion, c.nombre, c.apellido \
    FROM prestamos p \
    INNER JOIN cliente c \
    ON p.id_cliente=c.id_cliente \
    ORDER BY p.id_prestamo"
}