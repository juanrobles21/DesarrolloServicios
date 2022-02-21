"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PruebaControlador_1 = __importDefault(require("../controladores/PruebaControlador"));
class PruebaRuta {
    constructor() {
        this.rutaPruebaAPI = (0, express_1.Router)();
        this.configuracion();
    }
    configuracion() {
        this.rutaPruebaAPI.get('/demelos', PruebaControlador_1.default.ataquenme);
    }
}
const pruebaRuta = new PruebaRuta();
exports.default = pruebaRuta.rutaPruebaAPI;
