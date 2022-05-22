"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AutorDaoCrear_1 = __importDefault(require("../../daos/autor/AutorDaoCrear"));
const autor_crear_sql_1 = require("../../repositorios/autor/autor_crear_sql");
class AutorControladorCrear extends AutorDaoCrear_1.default {
    crearAutor(req, res) {
        const nombre = req.body.nombre;
        const apellido = req.body.apellido;
        const nacionalidad = req.body.nacionalidad;
        const descripcion = req.body.descripcion;
        const parametro = [nombre, apellido, nacionalidad, descripcion];
        AutorControladorCrear.crearAutor(autor_crear_sql_1.SQL_AUTOR_CREAR.CREAR, parametro, res);
    }
}
const autorControladorCrear = new AutorControladorCrear();
exports.default = autorControladorCrear;
