"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PartidosDAO_1 = __importDefault(require("../daos/PartidosDAO"));
const partidos_1 = require("../repositorios/partidos");
class PartidosControlador extends PartidosDAO_1.default {
    demelosPartidos(req, res) {
        PartidosControlador.obtenerPartidos(partidos_1.SQL_PARTIDOS.TODAS, [], res);
    }
}
const partidosControlador = new PartidosControlador();
exports.default = partidosControlador;
