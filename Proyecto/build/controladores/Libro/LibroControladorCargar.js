"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LibroDaoCargar_1 = __importDefault(require("../../daos/libro/LibroDaoCargar"));
const libro_cargar_sql_1 = require("../../repositorios/libro/libro_cargar_sql");
class LibroControladorCargar extends LibroDaoCargar_1.default {
    buscarLibroIdDetallePrestamos(req, res) {
        const id = req.params.elCodigo;
        const paramentro = [id];
        LibroControladorCargar.encontrarPorID(libro_cargar_sql_1.SQL_LIBRO_CARGAR.CARGAR, paramentro, res);
    }
}
const libroControladorCargar = new LibroControladorCargar();
exports.default = libroControladorCargar;
