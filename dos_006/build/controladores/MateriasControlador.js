"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MateriasDAO_1 = __importDefault(require("../daos/MateriasDAO"));
const materias_1 = require("../repositorios/materias");
class MateriasControlador extends MateriasDAO_1.default {
    demelasMaterias(req, res) {
        MateriasControlador.obtenerMaterias(materias_1.SQL_MATERIAS.TODAS, [], res);
    }
}
const materiasControlador = new MateriasControlador();
exports.default = materiasControlador;
