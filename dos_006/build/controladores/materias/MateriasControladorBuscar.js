"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MateriasDaoBuscar_1 = __importDefault(require("../../daos/materias/MateriasDaoBuscar"));
const materias_cargar_sql_1 = require("../../repositorios/materias/materias_cargar_sql");
class MateriasControladorBuscar extends MateriasDaoBuscar_1.default {
    buscarMaterias(req, res) {
        const id = req.params.elCodigo;
        const paramentro = [id];
        MateriasControladorBuscar.encontrarPorID(materias_cargar_sql_1.SQL_MATERIAS_CARGAR.CARGAR, paramentro, res);
    }
}
const materiasControladorBuscar = new MateriasControladorBuscar();
exports.default = materiasControladorBuscar;
