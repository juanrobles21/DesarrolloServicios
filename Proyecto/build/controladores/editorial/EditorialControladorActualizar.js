"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EditorialDaoActualizar_1 = __importDefault(require("../../daos/editorial/EditorialDaoActualizar"));
const editorial_actualizar_sql_1 = require("../../repositorios/editorial/editorial_actualizar_sql");
class EditorialControladorActualizar extends EditorialDaoActualizar_1.default {
    actualizarEditorial(req, res) {
        const cod = req.body.cod;
        const nombre = req.body.nombre;
        const pais = req.body.pais;
        const telefono = req.body.telefono;
        const parametro = [nombre, pais, telefono, cod];
        EditorialControladorActualizar.actualizarEditorial(editorial_actualizar_sql_1.SQL_EDITORIAL_ACTUALIZAR.CONFIRMAR, editorial_actualizar_sql_1.SQL_EDITORIAL_ACTUALIZAR.ACTUALIZAR, parametro, res);
    }
}
const editorialControladorActualizar = new EditorialControladorActualizar();
exports.default = editorialControladorActualizar;
