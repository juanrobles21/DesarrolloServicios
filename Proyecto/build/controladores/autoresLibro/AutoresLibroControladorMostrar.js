"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AutoresLibroDaoMostrar_1 = __importDefault(require("../../daos/autoresLibro/AutoresLibroDaoMostrar"));
const autores_libro_mostrar_sql_1 = require("../../repositorios/autoresLibro/autores_libro_mostrar_sql");
class AutoresLibroControladorMostrar extends AutoresLibroDaoMostrar_1.default {
    demelasAutoresLibro(req, res) {
        AutoresLibroControladorMostrar.obtenerAutoresLibro(autores_libro_mostrar_sql_1.SQL_AUTORES_LIBRO_MOSTRAR.TODAS, [], res);
    }
}
const autoresLibroControladorMostrar = new AutoresLibroControladorMostrar();
exports.default = autoresLibroControladorMostrar;
