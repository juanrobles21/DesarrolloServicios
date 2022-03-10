"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MateriasDaoCrear_1 = __importDefault(require("../../daos/materias/MateriasDaoCrear"));
const materias_crear_sql_1 = require("../../repositorios/materias/materias_crear_sql");
class MateriasControladorCrear extends MateriasDaoCrear_1.default {
    crearMaterias(req, res) {
        const nombre = req.body.nombreMateria;
        const referencia = req.body.referenciaMateria;
        const parametro = [nombre, referencia];
        MateriasControladorCrear.crearMaterias(materias_crear_sql_1.SQL_MATERIAS_CREAR.CONFIRMAR, materias_crear_sql_1.SQL_MATERIAS_CREAR.CREAR, parametro, res);
    }
}
const materiasControladorCrear = new MateriasControladorCrear();
exports.default = materiasControladorCrear;
