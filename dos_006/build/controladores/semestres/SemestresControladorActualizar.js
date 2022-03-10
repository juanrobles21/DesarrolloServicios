"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SemestresDaoActualizar_1 = __importDefault(require("../../daos/semestres/SemestresDaoActualizar"));
const semestres_actualizar_sql_1 = require("../../repositorios/semestres/semestres_actualizar_sql");
class SemestresControladorActualizar extends SemestresDaoActualizar_1.default {
    actualizarSemestres(req, res) {
        const cod = req.body.cod;
        const nombre = req.body.nombreSemestre;
        const parametro = [nombre, cod];
        SemestresControladorActualizar.actualizarSemestre(semestres_actualizar_sql_1.SQL_SEMESTRES_ACTUALIZAR.CONFIRMAR, semestres_actualizar_sql_1.SQL_SEMESTRES_ACTUALIZAR.ACTUALIZAR, parametro, res);
    }
}
const semestresControladorActualizar = new SemestresControladorActualizar();
exports.default = semestresControladorActualizar;
