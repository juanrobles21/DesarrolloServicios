"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProgramasDaoEliminar_1 = __importDefault(require("../../daos/programas/ProgramasDaoEliminar"));
const programa_eliminar_sql_1 = require("../../repositorios/programas/programa_eliminar_sql");
class ProgramasControladorEliminar extends ProgramasDaoEliminar_1.default {
    EliminarProgramas(req, res) {
        const id = req.params.elCodigo;
        const paramentro = [id];
        ProgramasControladorEliminar.eliminarPorID(programa_eliminar_sql_1.SQL_PROGRAMAS_ELIMINAR.ELIMINAR, paramentro, res);
    }
}
const programasControladorEliminar = new ProgramasControladorEliminar();
exports.default = programasControladorEliminar;
