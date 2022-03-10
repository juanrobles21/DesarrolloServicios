"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProgramasDaoMostrar_1 = __importDefault(require("../../daos/programas/ProgramasDaoMostrar"));
const progrma_mostrar_sql_1 = require("../../repositorios/programas/progrma_mostrar_sql");
class ProgramasControladorMostrar extends ProgramasDaoMostrar_1.default {
    mostrarProgramas(req, res) {
        ProgramasControladorMostrar.obtenerProgramas(progrma_mostrar_sql_1.SQL_PROGRAMAS_MOSTRAR.TODAS, [], res);
    }
}
const programasControladorMostrar = new ProgramasControladorMostrar();
exports.default = programasControladorMostrar;
