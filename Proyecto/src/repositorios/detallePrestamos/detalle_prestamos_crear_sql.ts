export const SQL_DETALLE_PRESTAMOS_CREAR = {

    CONFIRMARPRESTAMO: "SELECT COUNT(p.id_prestamo) AS cantidad \
    FROM prestamos p \
    WHERE p.id_prestamo=$1",

    CONFIRMARLIBRO: "SELECT COUNT(l.id_libro) AS cantidad \
    FROM libro l \
    WHERE l.id_libro=$2",

    CREAR: "INSERT INTO detalle_prestamos(id_prestamo,id_libro,fecha_devolucion,dias_mora,descripcion,fecha_entrega) \
    values($1,$2,$3,$4,$5,$6) RETURNING id_detalleprestamo"

}