"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EditorialDaoCargar_1 = __importDefault(require("../../daos/editorial/EditorialDaoCargar"));
const editorial_cargar_sql_1 = require("../../repositorios/editorial/editorial_cargar_sql");
class EditorialControladorCargar extends EditorialDaoCargar_1.default {
    buscarEditorialIdLibro(req, res) {
        const id = req.params.elCodigo;
        const paramentro = [id];
        EditorialControladorCargar.encontrarPorID(editorial_cargar_sql_1.SQL_EDITORIAL_CARGAR.CARGAR, paramentro, res);
    }
}
const editorialControladorCargar = new EditorialControladorCargar();
exports.default = editorialControladorCargar;
