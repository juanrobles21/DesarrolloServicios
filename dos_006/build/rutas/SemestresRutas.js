"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const SemestresControlador_1 = __importDefault(require("../controladores/SemestresControlador"));
class SemestresRutas {
    constructor() {
        this.rutasSemestresApi = (0, express_1.Router)();
        this.configuracion();
    }
    configuracion() {
        this.rutasSemestresApi.get('/semestres', SemestresControlador_1.default.demelosSemestres);
    }
}
const semestresRutas = new SemestresRutas();
exports.default = semestresRutas.rutasSemestresApi;
