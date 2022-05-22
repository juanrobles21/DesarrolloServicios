"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AutorDaoMostrar_1 = __importDefault(require("../../daos/autor/AutorDaoMostrar"));
const autor_mostrar_sql_1 = require("../../repositorios/autor/autor_mostrar_sql");
class AutorControladorMostrar extends AutorDaoMostrar_1.default {
    demelasAutor(req, res) {
        AutorControladorMostrar.obtenerAutor(autor_mostrar_sql_1.SQL_AUTOR_MOSTRAR.TODAS, [], res);
    }
}
const autorControladorMostrar = new AutorControladorMostrar();
exports.default = autorControladorMostrar;
