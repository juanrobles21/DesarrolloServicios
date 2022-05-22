"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DetallePrestamosDaoMostrar_1 = __importDefault(require("../../daos/detallePrestamos/DetallePrestamosDaoMostrar"));
const detalle_prestamos_mostrar_sql_1 = require("../../repositorios/detallePrestamos/detalle_prestamos_mostrar_sql");
class DetallePrestamosControladorMostrar extends DetallePrestamosDaoMostrar_1.default {
    demelasDetallePrestamos(req, res) {
        DetallePrestamosControladorMostrar.obtenerDetallePrestamos(detalle_prestamos_mostrar_sql_1.SQL_DETALLE_PRESTAMOS_MOSTRAR.TODAS, [], res);
    }
}
const detallePrestamosControladorMostrar = new DetallePrestamosControladorMostrar();
exports.default = detallePrestamosControladorMostrar;
