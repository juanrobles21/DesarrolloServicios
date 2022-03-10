"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MateriasDAO_1 = __importDefault(require("../daos/MateriasDAO"));
const materias_1 = require("../repositorios/materias/materias");
class MateriasControlador extends MateriasDAO_1.default {
    demelasMaterias(req, res) {
        MateriasControlador.obtenerMaterias(materias_1.SQL_MATERIAS.TODAS, [], res);
    }
    crearMaterias(req, res) {
        const nombre = req.body.nombreMateria;
        const referencia = req.body.referenciaMateria;
        const parametro = [nombre, referencia];
        MateriasControlador.crearMaterias(materias_1.SQL_MATERIAS.CONFIRMAR, materias_1.SQL_MATERIAS.CREAR, parametro, res);
    }
    buscarMaterias(req, res) {
        const id = req.params.elCodigo;
        const paramentro = [id];
        MateriasControlador.encontrarPorID(materias_1.SQL_MATERIAS.CARGAR, paramentro, res);
    }
}
const materiasControlador = new MateriasControlador();
exports.default = materiasControlador;
