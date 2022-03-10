"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProgramasDAO_1 = __importDefault(require("../daos/programas/ProgramasDAO"));
const programas_1 = require("../repositorios/programas/programas");
class ProgramasControlador extends ProgramasDAO_1.default {
    demelosProgramas(req, res) {
        ProgramasControlador.obtenerProgramas(programas_1.SQL_PROGRAMAS.TODAS, [], res);
    }
    crearProgramas(req, res) {
        const nombre = req.body.nombrePrograma;
        const parametro = [nombre];
        ProgramasControlador.crearProgramas(programas_1.SQL_PROGRAMAS.CONFIRMAR, programas_1.SQL_PROGRAMAS.CREAR, parametro, res);
    }
    buscarProgramas(req, res) {
        const id = req.params.elCodigo;
        const paramentro = [id];
        ProgramasControlador.encontrarPorID(programas_1.SQL_PROGRAMAS.CARGAR, paramentro, res);
    }
    EliminarProgramas(req, res) {
        const id = req.params.elCodigo;
        const paramentro = [id];
        ProgramasControlador.eliminarPorID(programas_1.SQL_PROGRAMAS.ELMINAR, paramentro, res);
    }
}
const programasControlador = new ProgramasControlador();
exports.default = programasControlador;
