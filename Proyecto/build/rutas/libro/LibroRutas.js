"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const LibroControladorActualizar_1 = __importDefault(require("../../controladores/Libro/LibroControladorActualizar"));
const LibroControladorCrear_1 = __importDefault(require("../../controladores/Libro/LibroControladorCrear"));
const LibroControladorMostrar_1 = __importDefault(require("../../controladores/Libro/LibroControladorMostrar"));
const LibroControladorEliminar_1 = __importDefault(require("../../controladores/Libro/LibroControladorEliminar"));
const LibroControladorCargar_1 = __importDefault(require("../../controladores/Libro/LibroControladorCargar"));
class LibroRutas {
    constructor() {
        this.rutasLibroApi = (0, express_1.Router)();
        this.configuracion();
    }
    configuracion() {
        this.rutasLibroApi.get('/mostrar', LibroControladorMostrar_1.default.demelasLibro);
        this.rutasLibroApi.post('/crear', LibroControladorCrear_1.default.crearLibro);
        this.rutasLibroApi.put('/actualizar', LibroControladorActualizar_1.default.actualizarLibro);
        this.rutasLibroApi.delete('/elminar/:elCodigo', LibroControladorEliminar_1.default.eliminarLibro);
        this.rutasLibroApi.get('/buscar/:elCodigo', LibroControladorCargar_1.default.buscarLibroIdDetallePrestamos);
    }
}
const libroRutas = new LibroRutas();
exports.default = libroRutas.rutasLibroApi;
