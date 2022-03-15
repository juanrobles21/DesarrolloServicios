"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AccesosControladorValidar_1 = __importDefault(require("../controladores/accesos/AccesosControladorValidar"));
class AccesosRutas {
    constructor() {
        this.rutasAccesoApi = (0, express_1.Router)();
        this.configuracion();
    }
    configuracion() {
        this.rutasAccesoApi.post('/acceso/validar', AccesosControladorValidar_1.default.validarAcceso);
    }
}
const accesosRutas = new AccesosRutas();
exports.default = accesosRutas.rutasAccesoApi;
