"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PartidosControlador_1 = __importDefault(require("../controladores/PartidosControlador"));
class PartidosRutas {
    constructor() {
        this.rutasPartidosApi = (0, express_1.Router)();
        this.configuracion();
    }
    configuracion() {
        this.rutasPartidosApi.get('/partidos', PartidosControlador_1.default.demelosPartidos);
        this.rutasPartidosApi.post('/partidos/crear', PartidosControlador_1.default.crearPartidos);
    }
}
const partidosRutas = new PartidosRutas();
exports.default = partidosRutas.rutasPartidosApi;
