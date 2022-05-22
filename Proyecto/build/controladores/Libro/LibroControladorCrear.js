"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LibroDaoCrear_1 = __importDefault(require("../../daos/libro/LibroDaoCrear"));
const libro_crear_sql_1 = require("../../repositorios/libro/libro_crear_sql");
class LibroControladorCrear extends LibroDaoCrear_1.default {
    crearLibro(req, res) {
        const titulo = req.body.titulo;
        const fechaPublicacion = req.body.fechaPublicacion;
        const codigo = req.body.codigo;
        const isbn = req.body.isbn;
        const idEditorial = req.body.idEditorial;
        const parametro = [titulo, fechaPublicacion, codigo, isbn, idEditorial];
        LibroControladorCrear.crearLibro(libro_crear_sql_1.SQL_LIBRO_CREAR.CONFIRMAR, libro_crear_sql_1.SQL_LIBRO_CREAR.CONFIRMAREDITORIAL, libro_crear_sql_1.SQL_LIBRO_CREAR.CREAR, parametro, res);
    }
}
const libroControladorCrear = new LibroControladorCrear();
exports.default = libroControladorCrear;
