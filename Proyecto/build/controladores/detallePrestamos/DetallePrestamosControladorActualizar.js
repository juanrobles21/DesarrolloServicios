"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DetallePrestamoDaoActualizar_1 = __importDefault(require("../../daos/detallePrestamos/DetallePrestamoDaoActualizar"));
const detalle_prestamos_actualizar_sql_1 = require("../../repositorios/detallePrestamos/detalle_prestamos_actualizar_sql");
class DetallePrestamosControladorActualizar extends DetallePrestamoDaoActualizar_1.default {
    actualizarDetallePrestamos(req, res) {
        const cod = req.body.cod;
        const idPrestamo = req.body.idPrestamo;
        const idLibro = req.body.idLibro;
        const fechaDevolucion = req.body.fechaDevolucion;
        const diasMora = req.body.diasMora;
        const descripcion = req.body.descripcion;
        const fechaEntrega = req.body.fechaEntrega;
        const parametro = [idPrestamo, idLibro, fechaDevolucion, diasMora, descripcion, fechaEntrega, cod];
        DetallePrestamosControladorActualizar.actualizarDetallePrestamos(detalle_prestamos_actualizar_sql_1.SQL_DETALLE_PRESTAMOS_ACTUALIZAR.CONFIRMARPRESTAMO, detalle_prestamos_actualizar_sql_1.SQL_DETALLE_PRESTAMOS_ACTUALIZAR.CONFIRMARLIBRO, detalle_prestamos_actualizar_sql_1.SQL_DETALLE_PRESTAMOS_ACTUALIZAR.ACTUALIZAR, parametro, res);
    }
}
const detallePrestamosControladorActualizar = new DetallePrestamosControladorActualizar();
exports.default = detallePrestamosControladorActualizar;
