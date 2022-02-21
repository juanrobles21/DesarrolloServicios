"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PruebaControlador_1 = __importDefault(require("../controladores/PruebaControlador"));
class PruebaRuta {
    constructor() {
        this.rutasPruebaApi = (0, express_1.Router)();
        this.configuracion();
    }
    configuracion() {
        this.rutasPruebaApi.get('/info1', PruebaControlador_1.default.ataqueme1);
        this.rutasPruebaApi.get('/info2', PruebaControlador_1.default.ataqueme2);
        this.rutasPruebaApi.get('/info3', PruebaControlador_1.default.ataqueme3);
    }
}
const pruebaRuta = new PruebaRuta();
exports.default = pruebaRuta.rutasPruebaApi;
