"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MateriasDaoMostrar_1 = __importDefault(require("../../daos/materias/MateriasDaoMostrar"));
const materias_mostrar_sql_1 = require("../../repositorios/materias/materias_mostrar_sql");
class MateriasControladorMostrar extends MateriasDaoMostrar_1.default {
    demelasMaterias(req, res) {
        MateriasControladorMostrar.obtenerMaterias(materias_mostrar_sql_1.SQL_MATERIAS_MOSTRAR.TODAS, [], res);
    }
}
const materiasControladorMostrar = new MateriasControladorMostrar();
exports.default = materiasControladorMostrar;
