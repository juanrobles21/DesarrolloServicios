"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PensumDAO_1 = __importDefault(require("../daos/PensumDAO"));
const pensum_1 = require("../repositorios/pensum/pensum");
class PensumControlador extends PensumDAO_1.default {
    demelosPensum(req, res) {
        PensumControlador.obtenerPensums(pensum_1.SQL_PENSUM.TODAS, [], res);
    }
}
const pensumControlador = new PensumControlador();
exports.default = pensumControlador;
