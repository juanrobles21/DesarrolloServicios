"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const MateriasControlador_1 = __importDefault(require("../controladores/MateriasControlador"));
class MateriasRutas {
    constructor() {
        this.rutasMateriasApi = (0, express_1.Router)();
        this.configuracion();
    }
    configuracion() {
        this.rutasMateriasApi.get('/materias', MateriasControlador_1.default.demelasMaterias);
        this.rutasMateriasApi.get('/materias/buscar/:elCodigo', MateriasControlador_1.default.buscarMaterias);
    }
}
const materiasRutas = new MateriasRutas();
exports.default = materiasRutas.rutasMateriasApi;
