"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EditorialDaoMostrar_1 = __importDefault(require("../../daos/editorial/EditorialDaoMostrar"));
const editorial_mostrar_sql_1 = require("../../repositorios/editorial/editorial_mostrar_sql");
class EditorialControladorMostrar extends EditorialDaoMostrar_1.default {
    demelasEditorial(req, res) {
        EditorialControladorMostrar.obtenerEditorial(editorial_mostrar_sql_1.SQL_EDITORIAL_MOSTRAR.TODAS, [], res);
    }
}
const editorialControladorMostrar = new EditorialControladorMostrar();
exports.default = editorialControladorMostrar;
