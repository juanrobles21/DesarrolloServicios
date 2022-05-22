"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ClienteControladorActualizar_1 = __importDefault(require("../../controladores/cliente/ClienteControladorActualizar"));
const ClienteControladorCrear_1 = __importDefault(require("../../controladores/cliente/ClienteControladorCrear"));
const ClienteControladorMostrar_1 = __importDefault(require("../../controladores/cliente/ClienteControladorMostrar"));
const ClienteControladorEliminar_1 = __importDefault(require("../../controladores/cliente/ClienteControladorEliminar"));
class ClienteRutas {
    constructor() {
        this.rutasClienteApi = (0, express_1.Router)();
        this.configuracion();
    }
    configuracion() {
        this.rutasClienteApi.get('/mostrar', ClienteControladorMostrar_1.default.demelasClientes);
        this.rutasClienteApi.post('/crear', ClienteControladorCrear_1.default.crearCliente);
        this.rutasClienteApi.put('/actualizar', ClienteControladorActualizar_1.default.actualizarCliente);
        this.rutasClienteApi.delete('/elminar/:elCodigo', ClienteControladorEliminar_1.default.eliminarCliente);
    }
}
const clienteRutas = new ClienteRutas();
exports.default = clienteRutas.rutasClienteApi;
