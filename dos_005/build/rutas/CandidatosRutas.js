"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CandidatosControlador_1 = __importDefault(require("../controladores/CandidatosControlador"));
class CandidatosRutas {
    constructor() {
        this.rutaCandidatosApi = (0, express_1.Router)();
        this.configuracion();
    }
    configuracion() {
        this.rutaCandidatosApi.get('/candidatos', CandidatosControlador_1.default.demelosCandidatos);
    }
}
const candidatosRutas = new CandidatosRutas();
exports.default = candidatosRutas.rutaCandidatosApi;
