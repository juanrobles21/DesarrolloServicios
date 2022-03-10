"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SemestresDaoCrear_1 = __importDefault(require("../../daos/semestres/SemestresDaoCrear"));
const semestres_crear_sql_1 = require("../../repositorios/semestres/semestres_crear_sql");
class SemestresControladorCrear extends SemestresDaoCrear_1.default {
    crearSemestres(req, res) {
        const nombre = req.body.nombreSemestre;
        const parametro = [nombre];
        SemestresControladorCrear.crearSemestres(semestres_crear_sql_1.SQL_SEMESTRES_CREAR.CONFIRMAR, semestres_crear_sql_1.SQL_SEMESTRES_CREAR.CREAR, parametro, res);
    }
}
const semestresControladorCrear = new SemestresControladorCrear();
exports.default = semestresControladorCrear;
