"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProgramasControladorActualizar_1 = __importDefault(require("../controladores/programas/ProgramasControladorActualizar"));
const ProgramasControladorBuscar_1 = __importDefault(require("../controladores/programas/ProgramasControladorBuscar"));
const ProgramasControladorMostrar_1 = __importDefault(require("../controladores/programas/ProgramasControladorMostrar"));
const ProgramasControladorEliminar_1 = __importDefault(require("../controladores/programas/ProgramasControladorEliminar"));
const ProgramasControladorCrear_1 = __importDefault(require("../controladores/programas/ProgramasControladorCrear"));
class ProgramasRutas {
    constructor() {
        this.rutasProgramasApi = (0, express_1.Router)();
        this.configuracion();
    }
    configuracion() {
        this.rutasProgramasApi.get('/programas', ProgramasControladorMostrar_1.default.mostrarProgramas);
        this.rutasProgramasApi.post('/programas/crear', ProgramasControladorCrear_1.default.crearProgramas);
        this.rutasProgramasApi.put('/programas/actualizar', ProgramasControladorActualizar_1.default.ActualizarProgramas);
        this.rutasProgramasApi.get('/programas/buscar/:elCodigo', ProgramasControladorBuscar_1.default.buscarProgramas);
        this.rutasProgramasApi.delete('/programas/elminar/:elCodigo', ProgramasControladorEliminar_1.default.EliminarProgramas);
    }
}
const programasRutas = new ProgramasRutas();
exports.default = programasRutas.rutasProgramasApi;
