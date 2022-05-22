"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PrestamosDaoActualizar_1 = __importDefault(require("../../daos/prestamos/PrestamosDaoActualizar"));
const prestamos_actualizar_sql_1 = require("../../repositorios/prestamos/prestamos_actualizar_sql");
class PrestamosControladorActualizar extends PrestamosDaoActualizar_1.default {
    actualizarPrestamos(req, res) {
        const cod = req.body.cod;
        const fechaInicio = req.body.fechaInicio;
        const descripcion = req.body.descripcion;
        const idCliente = req.body.idCliente;
        const parametro = [fechaInicio, descripcion, idCliente, cod];
        PrestamosControladorActualizar.actualizarPrestamos(prestamos_actualizar_sql_1.SQL_PRESTAMOS_ACTUALIZAR.CONFIRMAR, prestamos_actualizar_sql_1.SQL_PRESTAMOS_ACTUALIZAR.ACTUALIZAR, parametro, res);
    }
}
const prestamosControladorActualizar = new PrestamosControladorActualizar();
exports.default = prestamosControladorActualizar;
