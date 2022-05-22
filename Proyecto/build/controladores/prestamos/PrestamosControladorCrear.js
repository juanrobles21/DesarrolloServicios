"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PrestamosDaoCrear_1 = __importDefault(require("../../daos/prestamos/PrestamosDaoCrear"));
const prestamos_crear_sql_1 = require("../../repositorios/prestamos/prestamos_crear_sql");
class PrestamosControladorCrear extends PrestamosDaoCrear_1.default {
    crearPrestamos(req, res) {
        const fechaInicio = req.body.fechaInicio;
        const descripcion = req.body.descripcion;
        const idCliente = req.body.idCliente;
        const parametro = [fechaInicio, descripcion, idCliente,];
        PrestamosControladorCrear.crearPrestamos(prestamos_crear_sql_1.SQL_PRESTAMOS_CREAR.CONFIRMAR, prestamos_crear_sql_1.SQL_PRESTAMOS_CREAR.CREAR, parametro, res);
    }
}
const prestamosControladorCrear = new PrestamosControladorCrear();
exports.default = prestamosControladorCrear;
