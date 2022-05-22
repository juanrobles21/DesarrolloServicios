"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AutorControladorActualizar_1 = __importDefault(require("../../controladores/autor/AutorControladorActualizar"));
const AutorControladorCrear_1 = __importDefault(require("../../controladores/autor/AutorControladorCrear"));
const AutorControladorMostrar_1 = __importDefault(require("../../controladores/autor/AutorControladorMostrar"));
const AutorControladorEliminar_1 = __importDefault(require("../../controladores/autor/AutorControladorEliminar"));
class AutorRutas {
    constructor() {
        this.rutasAutorApi = (0, express_1.Router)();
        this.configuracion();
    }
    configuracion() {
        this.rutasAutorApi.get('/mostrar', AutorControladorMostrar_1.default.demelasAutor);
        this.rutasAutorApi.post('/crear', AutorControladorCrear_1.default.crearAutor);
        this.rutasAutorApi.put('/actualizar', AutorControladorActualizar_1.default.actualizarAutor);
        this.rutasAutorApi.delete('/elminar/:elCodigo', AutorControladorEliminar_1.default.eliminarAutor);
    }
}
const autorRutas = new AutorRutas();
exports.default = autorRutas.rutasAutorApi;
