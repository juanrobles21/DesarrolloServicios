"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProgramasDAO_1 = __importDefault(require("../daos/ProgramasDAO"));
const programas_1 = require("../repositorios/programas");
class ProgramasControlador extends ProgramasDAO_1.default {
    demelosProgramas(req, res) {
        ProgramasControlador.obtenerProgramas(programas_1.SQL_PROGRAMAS.TODAS, [], res);
    }
    crearProgramas(req, res) {
        const nombre = req.body.nombrePrograma;
        const parametro = [nombre];
        ProgramasControlador.crearProgramas(programas_1.SQL_PROGRAMAS.CONFIRMAR, programas_1.SQL_PROGRAMAS.CREAR, parametro, res);
    }
}
const programasControlador = new ProgramasControlador();
exports.default = programasControlador;
