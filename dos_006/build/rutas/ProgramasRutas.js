"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProgramasControlador_1 = __importDefault(require("../controladores/ProgramasControlador"));
class ProgramasRutas {
    constructor() {
        this.rutasProgramasApi = (0, express_1.Router)();
        this.configuracion();
    }
    configuracion() {
        this.rutasProgramasApi.get('/programas', ProgramasControlador_1.default.demelosProgramas);
        this.rutasProgramasApi.post('/programas/crear', ProgramasControlador_1.default.crearProgramas);
    }
}
const programasRutas = new ProgramasRutas();
exports.default = programasRutas.rutasProgramasApi;
