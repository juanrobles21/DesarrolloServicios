"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const FacultadControlador_1 = __importDefault(require("../controladores/FacultadControlador"));
class FacultadRutas {
    constructor() {
        this.rutaFacultadApi = (0, express_1.Router)();
        this.configuracion();
    }
    configuracion() {
        this.rutaFacultadApi.get('/lasquieroya', FacultadControlador_1.default.demelasFacultades);
    }
}
const facultadRutas = new FacultadRutas();
exports.default = facultadRutas.rutaFacultadApi;
