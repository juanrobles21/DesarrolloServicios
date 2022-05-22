"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AutorDaoActualizar_1 = __importDefault(require("../../daos/autor/AutorDaoActualizar"));
const autor_actualizar_sql_1 = require("../../repositorios/autor/autor_actualizar_sql");
class AutorControladorActualizar extends AutorDaoActualizar_1.default {
    actualizarAutor(req, res) {
        const cod = req.body.cod;
        const nombre = req.body.nombre;
        const apellido = req.body.apellido;
        const nacionalidad = req.body.nacionalidad;
        const descripcion = req.body.descripcion;
        const parametro = [nombre, apellido, nacionalidad, descripcion, cod];
        AutorControladorActualizar.actualizarAutor(autor_actualizar_sql_1.SQL_AUTOR_ACTUALIZAR.ACTUALIZAR, parametro, res);
    }
}
const autorControladorActualizar = new AutorControladorActualizar();
exports.default = autorControladorActualizar;
