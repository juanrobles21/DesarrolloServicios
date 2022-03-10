"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const MateriasControladorActualizar_1 = __importDefault(require("../controladores/materias/MateriasControladorActualizar"));
const MateriasControladorBuscar_1 = __importDefault(require("../controladores/materias/MateriasControladorBuscar"));
const MateriasControladorCrear_1 = __importDefault(require("../controladores/materias/MateriasControladorCrear"));
const MateriasControladorElminar_1 = __importDefault(require("../controladores/materias/MateriasControladorElminar"));
const MateriasControladorMostrar_1 = __importDefault(require("../controladores/materias/MateriasControladorMostrar"));
class MateriasRutas {
    constructor() {
        this.rutasMateriasApi = (0, express_1.Router)();
        this.configuracion();
    }
    configuracion() {
        this.rutasMateriasApi.get('/materias', MateriasControladorMostrar_1.default.demelasMaterias);
        this.rutasMateriasApi.post('/materias/crear', MateriasControladorCrear_1.default.crearMaterias);
        this.rutasMateriasApi.put('/materias/actualizar', MateriasControladorActualizar_1.default.actualizarMaterias);
        this.rutasMateriasApi.get('/materias/buscar/:elCodigo', MateriasControladorBuscar_1.default.buscarMaterias);
        this.rutasMateriasApi.delete('/materias/elminar/:elCodigo', MateriasControladorElminar_1.default.eliminarMaterias);
    }
}
const materiasRutas = new MateriasRutas();
exports.default = materiasRutas.rutasMateriasApi;
