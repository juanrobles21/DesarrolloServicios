"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const SemestresControladorActualizar_1 = __importDefault(require("../controladores/semestres/SemestresControladorActualizar"));
const SemestresControladorBuscar_1 = __importDefault(require("../controladores/semestres/SemestresControladorBuscar"));
const SemestresControladorCrear_1 = __importDefault(require("../controladores/semestres/SemestresControladorCrear"));
const SemestresControladorEliminar_1 = __importDefault(require("../controladores/semestres/SemestresControladorEliminar"));
const SemestresControladorMostrar_1 = __importDefault(require("../controladores/semestres/SemestresControladorMostrar"));
class SemestresRutas {
    constructor() {
        this.rutasSemestresApi = (0, express_1.Router)();
        this.configuracion();
    }
    configuracion() {
        this.rutasSemestresApi.get('/semestres', SemestresControladorMostrar_1.default.mostrarSemestres);
        this.rutasSemestresApi.post('/semestres/crear', SemestresControladorCrear_1.default.crearSemestres);
        this.rutasSemestresApi.put('/semestres/actualizar', SemestresControladorActualizar_1.default.actualizarSemestres);
        this.rutasSemestresApi.get('/semestres/buscar/:elCodigo', SemestresControladorBuscar_1.default.buscarSemestres);
        this.rutasSemestresApi.delete('/semestres/elminar/:elCodigo', SemestresControladorEliminar_1.default.eliminarSemestres);
    }
}
const semestresRutas = new SemestresRutas();
exports.default = semestresRutas.rutasSemestresApi;
