"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PrestamosDaoMostrar_1 = __importDefault(require("../../daos/prestamos/PrestamosDaoMostrar"));
const prestamos_mostrar_sql_1 = require("../../repositorios/prestamos/prestamos_mostrar_sql");
class PrestamosControladorMostrar extends PrestamosDaoMostrar_1.default {
    demelasPrestamos(req, res) {
        PrestamosControladorMostrar.obtenerPrestamos(prestamos_mostrar_sql_1.SQL_PRESTAMOS_MOSTRAR.TODAS, [], res);
    }
}
const prestamosControladorMostrar = new PrestamosControladorMostrar();
exports.default = prestamosControladorMostrar;
