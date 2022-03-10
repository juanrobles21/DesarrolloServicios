"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MateriasDaoActualizar_1 = __importDefault(require("../../daos/materias/MateriasDaoActualizar"));
const materias_actualizar_sql_1 = require("../../repositorios/materias/materias_actualizar_sql");
class MateriasControladorActualizar extends MateriasDaoActualizar_1.default {
    actualizarMaterias(req, res) {
        const cod = req.body.cod;
        const nombre_materia = req.body.nombreMateria;
        const referencia_materia = req.body.referenciaMateria;
        const parametro = [nombre_materia, referencia_materia, cod];
        MateriasControladorActualizar.actualizarMateria(materias_actualizar_sql_1.SQL_MATERIAS_ACTUALIZAR.ACTUALIZAR, parametro, res);
    }
}
const materiasControladorActualizar = new MateriasControladorActualizar();
exports.default = materiasControladorActualizar;
