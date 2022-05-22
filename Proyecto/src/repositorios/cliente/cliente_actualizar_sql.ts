export const SQL_CLIENTE_ACTUALIZAR = {

    CONFIRMAR: "SELECT COUNT(c.id_cliente) AS cantidad \
    FROM cliente c \
    WHERE lower(c.identificacion) = lower($1)",

    ACTUALIZAR: "UPDATE cliente SET identificacion=$1 ,nombre=$2, apellido=$3, direccion=$4, telefono=$5 \
    WHERE id_cliente=$6 \
    RETURNING id_cliente"
}