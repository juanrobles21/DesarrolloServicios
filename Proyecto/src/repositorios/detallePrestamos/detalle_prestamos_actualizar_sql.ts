export const SQL_DETALLE_PRESTAMOS_ACTUALIZAR = {

    CONFIRMARPRESTAMO: "SELECT COUNT(p.id_prestamo) AS cantidad \
    FROM prestamos p \
    WHERE p.id_prestamo=$1",

    CONFIRMARLIBRO: "SELECT COUNT(l.id_libro) AS cantidad \
    FROM libro l \
    WHERE l.id_libro=$2",

    ACTUALIZAR: "UPDATE detalle_prestamos SET id_prestamo=$1 ,id_libro=$2, fecha_devolucion=$3, dias_mora=$4, descripcion=$5, fecha_entrega=$6  \
    WHERE id_detalleprestamo=$7 \
    RETURNING id_detalleprestamo"
}