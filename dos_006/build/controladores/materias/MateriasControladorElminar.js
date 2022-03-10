"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MateriasDaoEliminar_1 = __importDefault(require("../../daos/materias/MateriasDaoEliminar"));
const materias_eliminar_sql_1 = require("../../repositorios/materias/materias_eliminar_sql");
class MateriasControladorEliminar extends MateriasDaoEliminar_1.default {
    eliminarMaterias(req, res) {
        const id = req.params.elCodigo;
        const paramentro = [id];
        MateriasControladorEliminar.eliminarPorID(materias_eliminar_sql_1.SQL_MATERIAS_ELIMINAR.ELIMINAR, paramentro, res);
    }
}
const materiasControladorEliminar = new MateriasControladorEliminar();
exports.default = materiasControladorEliminar;
