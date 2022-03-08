"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Materiaspensum_1 = __importDefault(require("../daos/Materiaspensum"));
const materiapensum_1 = require("../repositorios/materiapensum");
class MateriaPensumControlador extends Materiaspensum_1.default {
    demelasMateriaPensum(req, res) {
        MateriaPensumControlador.obtenerMateriPensum(materiapensum_1.SQL_MATERIAPENSUM.TODAS, [], res);
    }
}
const materiaPensumControlador = new MateriaPensumControlador();
exports.default = materiaPensumControlador;
