export const SQL_CLIENTE_CREAR={
    CONFIRMAR: "SELECT COUNT(c.id_cliente) AS cantidad \
    FROM cliente c \
    WHERE lower(c.identificacion) = lower($1)",

    CREAR: "INSERT INTO cliente(identificacion,nombre,apellido,direccion,telefono) \
    values($1,$2,$3,$4,$5) RETURNING id_cliente"
}