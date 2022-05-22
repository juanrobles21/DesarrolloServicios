"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AutoresLibroDaoActualizar_1 = __importDefault(require("../../daos/autoresLibro/AutoresLibroDaoActualizar"));
const autores_libro_actualizar_sql_1 = require("../../repositorios/autoresLibro/autores_libro_actualizar_sql");
class AutoresLibroControladorActualizar extends AutoresLibroDaoActualizar_1.default {
    actualizarAutoresLibro(req, res) {
        const cod = req.body.cod;
        const idAutor = req.body.idAutor;
        const idLibro = req.body.idLibro;
        const parametro = [idAutor, idLibro, cod];
        AutoresLibroControladorActualizar.actualizarAutoresLibro(autores_libro_actualizar_sql_1.SQL_AUTORES_LIBRO_ACTUALIZAR.CONFIRMARAUTOR, autores_libro_actualizar_sql_1.SQL_AUTORES_LIBRO_ACTUALIZAR.CONFIRMARLIBRO, autores_libro_actualizar_sql_1.SQL_AUTORES_LIBRO_ACTUALIZAR.ACTUALIZAR, parametro, res);
    }
}
const autoresLibroControladorActualizar = new AutoresLibroControladorActualizar();
exports.default = autoresLibroControladorActualizar;
