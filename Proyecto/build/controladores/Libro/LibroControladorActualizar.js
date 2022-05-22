"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LibroDaoActualizar_1 = __importDefault(require("../../daos/libro/LibroDaoActualizar"));
const libro_actualizar_sql_1 = require("../../repositorios/libro/libro_actualizar_sql");
class LibroControladorActualizar extends LibroDaoActualizar_1.default {
    actualizarLibro(req, res) {
        const cod = req.body.cod;
        const titulo = req.body.titulo;
        const fechaPublicacion = req.body.fechaPublicacion;
        const codigo = req.body.codigo;
        const isbn = req.body.isbn;
        const idEditorial = req.body.idEditorial;
        const parametro = [titulo, fechaPublicacion, codigo, isbn, idEditorial, cod];
        LibroControladorActualizar.actualizarLibro(libro_actualizar_sql_1.SQL_LIBRO_ACTUALIZAR.CONFIRMAR, libro_actualizar_sql_1.SQL_LIBRO_ACTUALIZAR.CONFIRMAREDITORIAL, libro_actualizar_sql_1.SQL_LIBRO_ACTUALIZAR.ACTUALIZAR, parametro, res);
    }
}
const libroControladorActualizar = new LibroControladorActualizar();
exports.default = libroControladorActualizar;
