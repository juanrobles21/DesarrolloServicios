"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PruebaDAO_1 = __importDefault(require("../daos/PruebaDAO"));
class PruebaControlador extends PruebaDAO_1.default {
    ataquenme(req, res) {
        PruebaControlador.obtenerInfo(req, res);
    }
}
const pruebaControlador = new PruebaControlador();
exports.default = pruebaControlador;
