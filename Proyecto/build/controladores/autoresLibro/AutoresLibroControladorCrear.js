"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AutoresLibroDaoCrear_1 = __importDefault(require("../../daos/autoresLibro/AutoresLibroDaoCrear"));
const autores_libro_crear_sql_1 = require("../../repositorios/autoresLibro/autores_libro_crear_sql");
class AutoresLibroControladorCrear extends AutoresLibroDaoCrear_1.default {
    crearAutoresLibro(req, res) {
        const idAutor = req.body.idAutor;
        const idLibro = req.body.idLibro;
        const parametro = [idAutor, idLibro];
        AutoresLibroControladorCrear.crearAutoresLibro(autores_libro_crear_sql_1.SQL_AUTORES_LIBRO_CREAR.CONFIRMARAUTOR, autores_libro_crear_sql_1.SQL_AUTORES_LIBRO_CREAR.CONFIRMARLIBRO, autores_libro_crear_sql_1.SQL_AUTORES_LIBRO_CREAR.CREAR, parametro, res);
    }
}
const autoresLibroControladorCrear = new AutoresLibroControladorCrear();
exports.default = autoresLibroControladorCrear;
