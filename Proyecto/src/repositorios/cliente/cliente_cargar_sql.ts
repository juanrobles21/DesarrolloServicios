export const SQL_CLIENTE_CARGAR = {
    CARGAR: "SELECT c.id_cliente, c.nombre, c.apellido, c.direccion, c.telefono \
    FROM cliente c \
    INNER JOIN prestamos p \
    ON p.id_cliente = c.id_cliente \
    WHERE p.id_prestamo=$1"
}