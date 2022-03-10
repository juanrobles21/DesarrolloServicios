"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SemestresDaoBuscar_1 = __importDefault(require("../../daos/semestres/SemestresDaoBuscar"));
const semestres_cargar_sql_1 = require("../../repositorios/semestres/semestres_cargar_sql");
class SemestresControladorBuscar extends SemestresDaoBuscar_1.default {
    buscarSemestres(req, res) {
        const id = req.params.elCodigo;
        const paramentro = [id];
        SemestresControladorBuscar.encontrarPorID(semestres_cargar_sql_1.SQL_SEMESTRES_CARGAR.CARGAR, paramentro, res);
    }
}
const semestresControladorBuscar = new SemestresControladorBuscar();
exports.default = semestresControladorBuscar;
