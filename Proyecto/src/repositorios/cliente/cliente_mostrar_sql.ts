export const SQL_CLIENTE_MOSTRAR={
    TODAS: "SELECT c.id_cliente, c.identificacion, c.nombre,c.apellido,c.direccion,c.telefono \
    FROM cliente c \
    ORDER BY c.id_cliente"
}