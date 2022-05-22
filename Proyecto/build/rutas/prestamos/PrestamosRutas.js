"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PrestamosControladorActualizar_1 = __importDefault(require("../../controladores/prestamos/PrestamosControladorActualizar"));
const PrestamosControladorCrear_1 = __importDefault(require("../../controladores/prestamos/PrestamosControladorCrear"));
const PrestamosControladorMostrar_1 = __importDefault(require("../../controladores/prestamos/PrestamosControladorMostrar"));
const PrestamosControladorEliminar_1 = __importDefault(require("../../controladores/prestamos/PrestamosControladorEliminar"));
class PrestamosRutas {
    constructor() {
        this.rutasPrestamosApi = (0, express_1.Router)();
        this.configuracion();
    }
    configuracion() {
        this.rutasPrestamosApi.get('/mostrar', PrestamosControladorMostrar_1.default.demelasPrestamos);
        this.rutasPrestamosApi.post('/crear', PrestamosControladorCrear_1.default.crearPrestamos);
        this.rutasPrestamosApi.put('/actualizar', PrestamosControladorActualizar_1.default.actualizarPrestamos);
        this.rutasPrestamosApi.delete('/elminar/:elCodigo', PrestamosControladorEliminar_1.default.eliminarPrestamos);
    }
}
const prestamosRutas = new PrestamosRutas();
exports.default = prestamosRutas.rutasPrestamosApi;
