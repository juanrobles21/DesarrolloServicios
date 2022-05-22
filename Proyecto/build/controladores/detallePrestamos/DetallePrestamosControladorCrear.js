"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DetallePrestamosDaoCrear_1 = __importDefault(require("../../daos/detallePrestamos/DetallePrestamosDaoCrear"));
const detalle_prestamos_crear_sql_1 = require("../../repositorios/detallePrestamos/detalle_prestamos_crear_sql");
class DetallePrestamosControladorCrear extends DetallePrestamosDaoCrear_1.default {
    crearDetallePrestamos(req, res) {
        const idPrestamo = req.body.idPrestamo;
        const idLibro = req.body.idLibro;
        const fechaDevolucion = req.body.fechaDevolucion;
        const diasMora = req.body.diasMora;
        const descripcion = req.body.descripcion;
        const fechaEntrega = req.body.fechaEntrega;
        const parametro = [idPrestamo, idLibro, fechaDevolucion, diasMora, descripcion, fechaEntrega];
        DetallePrestamosControladorCrear.crearDetallePrestamos(detalle_prestamos_crear_sql_1.SQL_DETALLE_PRESTAMOS_CREAR.CONFIRMARPRESTAMO, detalle_prestamos_crear_sql_1.SQL_DETALLE_PRESTAMOS_CREAR.CONFIRMARLIBRO, detalle_prestamos_crear_sql_1.SQL_DETALLE_PRESTAMOS_CREAR.CREAR, parametro, res);
    }
}
const detallePrestamosControladorCrear = new DetallePrestamosControladorCrear();
exports.default = detallePrestamosControladorCrear;
