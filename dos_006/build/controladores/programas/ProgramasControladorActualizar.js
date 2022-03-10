"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProgramaDaoActualizar_1 = __importDefault(require("../../daos/programas/ProgramaDaoActualizar"));
const programa_actualizar_sql_1 = require("../../repositorios/programas/programa_actualizar_sql");
class ProgramasControladorActualizar extends ProgramaDaoActualizar_1.default {
    ActualizarProgramas(req, res) {
        const cod = req.body.cod;
        const nombre = req.body.nombrePrograma;
        const parametro = [nombre, cod];
        ProgramasControladorActualizar.actualizarPrograma(programa_actualizar_sql_1.SQL_PROGRAMAS_ACTUALIZAR.ACTUALIZAR, parametro, res);
    }
}
const programasControladorActualizar = new ProgramasControladorActualizar();
exports.default = programasControladorActualizar;
