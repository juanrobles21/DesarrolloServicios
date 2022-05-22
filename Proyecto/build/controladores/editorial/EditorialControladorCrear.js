"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EditorialDaoCrear_1 = __importDefault(require("../../daos/editorial/EditorialDaoCrear"));
const editorial_crear_sql_1 = require("../../repositorios/editorial/editorial_crear_sql");
class EditorialControladorCrear extends EditorialDaoCrear_1.default {
    crearEditorial(req, res) {
        const nombre = req.body.nombre;
        const pais = req.body.pais;
        const telefono = req.body.telefono;
        const parametro = [nombre, pais, telefono,];
        EditorialControladorCrear.crearEditorial(editorial_crear_sql_1.SQL_EDITORIAL_CREAR.CONFIRMAR, editorial_crear_sql_1.SQL_EDITORIAL_CREAR.CREAR, parametro, res);
    }
}
const editorialControladorCrear = new EditorialControladorCrear();
exports.default = editorialControladorCrear;
