"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UsuariosControladorListar_1 = __importDefault(require("../controladores/usuarios/UsuariosControladorListar"));
class UsuariosRutas {
    constructor() {
        this.rutasUsuariosApi = (0, express_1.Router)();
        this.configuracion();
    }
    configuracion() {
        this.rutasUsuariosApi.get('/listar', UsuariosControladorListar_1.default.listarUsuarios);
    }
}
const usuariosRutas = new UsuariosRutas();
exports.default = usuariosRutas.rutasUsuariosApi;
