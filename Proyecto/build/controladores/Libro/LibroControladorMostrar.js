"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LibroDaoMostrar_1 = __importDefault(require("../../daos/libro/LibroDaoMostrar"));
const libro_mostrar_sql_1 = require("../../repositorios/libro/libro_mostrar_sql");
class LibroControladorMostrar extends LibroDaoMostrar_1.default {
    demelasLibro(req, res) {
        LibroControladorMostrar.obtenerLibro(libro_mostrar_sql_1.SQL_LIBRO_MOSTRAR.TODAS, [], res);
    }
}
const libroControladorMostrar = new LibroControladorMostrar();
exports.default = libroControladorMostrar;
