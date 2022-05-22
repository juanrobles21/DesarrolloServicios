"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DetallePrestamoDaoEliminar_1 = __importDefault(require("../../daos/detallePrestamos/DetallePrestamoDaoEliminar"));
const detalle_prestamos_eliminar_sql_1 = require("../../repositorios/detallePrestamos/detalle_prestamos_eliminar_sql");
class DetallePrestamosControladorEliminar extends DetallePrestamoDaoEliminar_1.default {
    eliminarDetallePrestamos(req, res) {
        const id = req.params.elCodigo;
        const paramentro = [id];
        DetallePrestamosControladorEliminar.eliminarPorID(detalle_prestamos_eliminar_sql_1.SQL_DETALLE_PRESTAMOS_ELIMINAR.ELIMINAR, paramentro, res);
    }
}
const detallePrestamosControladorEliminar = new DetallePrestamosControladorEliminar();
exports.default = detallePrestamosControladorEliminar;
