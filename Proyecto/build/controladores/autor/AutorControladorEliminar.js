"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AutorDaoEliminar_1 = __importDefault(require("../../daos/autor/AutorDaoEliminar"));
const autor_eliminar_sql_1 = require("../../repositorios/autor/autor_eliminar_sql");
class AutorControladorEliminar extends AutorDaoEliminar_1.default {
    eliminarAutor(req, res) {
        const id = req.params.elCodigo;
        const paramentro = [id];
        AutorControladorEliminar.eliminarPorID(autor_eliminar_sql_1.SQL_AUTOR_ELIMINAR.ELIMINAR, paramentro, res);
    }
}
const autorControladorEliminar = new AutorControladorEliminar();
exports.default = autorControladorEliminar;
