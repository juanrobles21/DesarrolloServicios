"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const DetallePrestamosControladorActualizar_1 = __importDefault(require("../../controladores/detallePrestamos/DetallePrestamosControladorActualizar"));
const DetallePrestamosControladorCrear_1 = __importDefault(require("../../controladores/detallePrestamos/DetallePrestamosControladorCrear"));
const DetallePrestamosControladorMostrar_1 = __importDefault(require("../../controladores/detallePrestamos/DetallePrestamosControladorMostrar"));
const DetallePrestamosControladorEliminar_1 = __importDefault(require("../../controladores/detallePrestamos/DetallePrestamosControladorEliminar"));
class DetallePrestamosRutas {
    constructor() {
        this.rutasDetallePrestamosApi = (0, express_1.Router)();
        this.configuracion();
    }
    configuracion() {
        this.rutasDetallePrestamosApi.get('/mostrar', DetallePrestamosControladorMostrar_1.default.demelasDetallePrestamos);
        this.rutasDetallePrestamosApi.post('/crear', DetallePrestamosControladorCrear_1.default.crearDetallePrestamos);
        this.rutasDetallePrestamosApi.put('/actualizar', DetallePrestamosControladorActualizar_1.default.actualizarDetallePrestamos);
        this.rutasDetallePrestamosApi.delete('/elminar/:elCodigo', DetallePrestamosControladorEliminar_1.default.eliminarDetallePrestamos);
    }
}
const detallePrestamosRutas = new DetallePrestamosRutas();
exports.default = detallePrestamosRutas.rutasDetallePrestamosApi;
