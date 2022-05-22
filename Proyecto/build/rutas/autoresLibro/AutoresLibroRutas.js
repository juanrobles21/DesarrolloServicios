"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AutoresLibroControladorActualizar_1 = __importDefault(require("../../controladores/autoresLibro/AutoresLibroControladorActualizar"));
const AutoresLibroControladorCrear_1 = __importDefault(require("../../controladores/autoresLibro/AutoresLibroControladorCrear"));
const AutoresLibroControladorMostrar_1 = __importDefault(require("../../controladores/autoresLibro/AutoresLibroControladorMostrar"));
const AutoresLibroControladorEliminar_1 = __importDefault(require("../../controladores/autoresLibro/AutoresLibroControladorEliminar"));
class AutoresLibroRutas {
    constructor() {
        this.rutasAutoresLibroApi = (0, express_1.Router)();
        this.configuracion();
    }
    configuracion() {
        this.rutasAutoresLibroApi.get('/mostrar', AutoresLibroControladorMostrar_1.default.demelasAutoresLibro);
        this.rutasAutoresLibroApi.post('/crear', AutoresLibroControladorCrear_1.default.crearAutoresLibro);
        this.rutasAutoresLibroApi.put('/actualizar', AutoresLibroControladorActualizar_1.default.actualizarAutoresLibro);
        this.rutasAutoresLibroApi.delete('/elminar/:elCodigo', AutoresLibroControladorEliminar_1.default.eliminarAutoresLibro);
    }
}
const autoresLibroRutas = new AutoresLibroRutas();
exports.default = autoresLibroRutas.rutasAutoresLibroApi;
