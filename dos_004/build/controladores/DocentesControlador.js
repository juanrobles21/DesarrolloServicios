"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DocentesDAO_1 = __importDefault(require("../daos/DocentesDAO"));
const docentes_sql_1 = require("../repositorios/docentes_sql");
class DocentesCotrolador extends DocentesDAO_1.default {
    demelosDocentes(req, res) {
        DocentesCotrolador.obtenerDocentes(docentes_sql_1.SQL_DOCENTES.TODAS, [], res);
    }
}
const docentesCotrolador = new DocentesCotrolador();
exports.default = docentesCotrolador;
