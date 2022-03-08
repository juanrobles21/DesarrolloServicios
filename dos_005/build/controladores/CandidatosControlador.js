"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CandidatosDAO_1 = __importDefault(require("../daos/CandidatosDAO"));
const candidatos_1 = require("../repositorios/candidatos");
class CandidatosControlador extends CandidatosDAO_1.default {
    demelosCandidatos(req, res) {
        CandidatosControlador.obtenerCandidatos(candidatos_1.SQL_CANDIDATOS.TODAS, [], res);
    }
    crearCandidatos(req, res) {
        const nombre = req.body.nombreCandidato;
        const fecha = req.body.fechaCanditato;
        const evalC = req.body.evalCandidato;
        const partido = req.body.idPartido;
        const parametro = [nombre, fecha, evalC, partido];
        CandidatosControlador.crearCandidatos(candidatos_1.SQL_CANDIDATOS.CONFIRMAR, candidatos_1.SQL_CANDIDATOS.CREAR, parametro, res);
    }
}
const candidatosControlador = new CandidatosControlador();
exports.default = candidatosControlador;
