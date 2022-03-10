"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProgramasDaoCrear_1 = __importDefault(require("../../daos/programas/ProgramasDaoCrear"));
const programa_crear_sql_1 = require("../../repositorios/programas/programa_crear_sql");
class ProgramasControladorCrear extends ProgramasDaoCrear_1.default {
    crearProgramas(req, res) {
        const nombre = req.body.nombrePrograma;
        const parametro = [nombre];
        ProgramasControladorCrear.crearProgramas(programa_crear_sql_1.SQL_PROGRAMAS_CREAR.CONFIRMAR, programa_crear_sql_1.SQL_PROGRAMAS_CREAR.CREAR, parametro, res);
    }
}
const programasControladorCrear = new ProgramasControladorCrear();
exports.default = programasControladorCrear;
