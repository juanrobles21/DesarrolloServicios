"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SemestresDaoMostrar_1 = __importDefault(require("../../daos/semestres/SemestresDaoMostrar"));
const semestres_mostrar_sql_1 = require("../../repositorios/semestres/semestres_mostrar_sql");
class SemestresControladorMostrar extends SemestresDaoMostrar_1.default {
    mostrarSemestres(req, res) {
        SemestresControladorMostrar.obtenerSemestres(semestres_mostrar_sql_1.SQL_SEMESTRES_MOSTRAR.TODAS, [], res);
    }
}
const semestresControladorMostrar = new SemestresControladorMostrar();
exports.default = semestresControladorMostrar;
