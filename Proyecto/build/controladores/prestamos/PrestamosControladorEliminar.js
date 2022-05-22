"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PrestamosDaoEliminar_1 = __importDefault(require("../../daos/prestamos/PrestamosDaoEliminar"));
const prestamos_eliminar_sql_1 = require("../../repositorios/prestamos/prestamos_eliminar_sql");
class PrestamosControladorEliminar extends PrestamosDaoEliminar_1.default {
    eliminarPrestamos(req, res) {
        const id = req.params.elCodigo;
        const paramentro = [id];
        PrestamosControladorEliminar.eliminarPorID(prestamos_eliminar_sql_1.SQL_PRESTAMOS_ELIMINAR.ELIMINAR, paramentro, res);
    }
}
const prestamosControladorEliminar = new PrestamosControladorEliminar();
exports.default = prestamosControladorEliminar;
