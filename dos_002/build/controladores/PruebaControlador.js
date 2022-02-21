"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PruebaDaos_1 = __importDefault(require("../daos/PruebaDaos"));
class PruebaControlador extends PruebaDaos_1.default {
    ataqueme1(req, res) {
        PruebaControlador.obtenerInfo1(req, res);
    }
    ataqueme2(req, res) {
        PruebaControlador.obtenerInfo2(req, res);
    }
    ataqueme3(req, res) {
        PruebaControlador.obtenerInfo3(req, res);
    }
}
const pruebaControlador = new PruebaControlador();
exports.default = pruebaControlador;
