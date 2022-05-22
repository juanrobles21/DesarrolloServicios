"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LibroDaoEliminar_1 = __importDefault(require("../../daos/libro/LibroDaoEliminar"));
const libro_eliminar_sql_1 = require("../../repositorios/libro/libro_eliminar_sql");
class LibroControladorEliminar extends LibroDaoEliminar_1.default {
    eliminarLibro(req, res) {
        const id = req.params.elCodigo;
        const paramentro = [id];
        LibroControladorEliminar.eliminarPorID(libro_eliminar_sql_1.SQL_LIBRO_ELIMINAR.ELIMINAR, paramentro, res);
    }
}
const libroControladorEliminar = new LibroControladorEliminar();
exports.default = libroControladorEliminar;
