"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SemestresDAO_1 = __importDefault(require("../daos/SemestresDAO"));
const semestres_1 = require("../repositorios/semestres/semestres");
class SemestresControlador extends SemestresDAO_1.default {
    demelosSemestres(req, res) {
        SemestresControlador.obtenerSemestres(semestres_1.SQL_SEMESTRES.TODAS, [], res);
    }
}
const semestresControlador = new SemestresControlador();
exports.default = semestresControlador;
