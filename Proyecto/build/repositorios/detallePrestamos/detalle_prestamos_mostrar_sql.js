"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_DETALLE_PRESTAMOS_MOSTRAR = void 0;
exports.SQL_DETALLE_PRESTAMOS_MOSTRAR = {
    TODAS: "SELECT dp.id_detalleprestamo, p.fecha_inicio, c.identificacion,c.nombre,c.apellido, l.titulo, dp.fecha_devolucion, dp.dias_mora, dp.descripcion, dp.fecha_entrega \
	FROM detalle_prestamos dp \
	INNER JOIN prestamos p \
	ON p.id_prestamo = dp.id_prestamo \
	INNER JOIN cliente c \
	ON c.id_cliente = p.id_cliente \
	INNER JOIN libro l \
	ON l.id_libro = dp.id_libro \
	ORDER BY dp.id_detalleprestamo"
};
