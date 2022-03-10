"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProgramaDaoBuscar_1 = __importDefault(require("../../daos/programas/ProgramaDaoBuscar"));
const programa_cargar_sql_1 = require("../../repositorios/programas/programa_cargar_sql");
class ProgramasControladorBuscar extends ProgramaDaoBuscar_1.default {
    buscarProgramas(req, res) {
        const id = req.params.elCodigo;
        const paramentro = [id];
        ProgramasControladorBuscar.encontrarPorID(programa_cargar_sql_1.SQL_PROGRAMAS_CARGAR.CARGAR, paramentro, res);
    }
}
const programasControladorBuscar = new ProgramasControladorBuscar();
exports.default = programasControladorBuscar;
