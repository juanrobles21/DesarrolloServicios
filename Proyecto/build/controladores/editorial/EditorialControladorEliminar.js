"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EditorialDaoElminar_1 = __importDefault(require("../../daos/editorial/EditorialDaoElminar"));
const editorial_eliminar_sql_1 = require("../../repositorios/editorial/editorial_eliminar_sql");
class EditorialControladorEliminar extends EditorialDaoElminar_1.default {
    eliminarEditorial(req, res) {
        const id = req.params.elCodigo;
        const paramentro = [id];
        EditorialControladorEliminar.eliminarPorID(editorial_eliminar_sql_1.SQL_EDITORIAL_ELIMINAR.ELIMINAR, paramentro, res);
    }
}
const editorialControladorEliminar = new EditorialControladorEliminar();
exports.default = editorialControladorEliminar;
