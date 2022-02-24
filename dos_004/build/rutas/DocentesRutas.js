"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const DocentesControlador_1 = __importDefault(require("../controladores/DocentesControlador"));
class DocentesRutas {
    constructor() {
        this.rutaDocentesApi = (0, express_1.Router)();
        this.configuracion();
    }
    configuracion() {
        this.rutaDocentesApi.get('/docentes', DocentesControlador_1.default.demelosDocentes);
    }
}
const docentesRustas = new DocentesRutas();
exports.default = docentesRustas.rutaDocentesApi;
