"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const EditorialControladorActualizar_1 = __importDefault(require("../../controladores/editorial/EditorialControladorActualizar"));
const EditorialControladorCrear_1 = __importDefault(require("../../controladores/editorial/EditorialControladorCrear"));
const EditorialControladorMostrar_1 = __importDefault(require("../../controladores/editorial/EditorialControladorMostrar"));
const EditorialControladorEliminar_1 = __importDefault(require("../../controladores/editorial/EditorialControladorEliminar"));
class EditorialRutas {
    constructor() {
        this.rutasEditorialApi = (0, express_1.Router)();
        this.configuracion();
    }
    configuracion() {
        this.rutasEditorialApi.get('/mostrar', EditorialControladorMostrar_1.default.demelasEditorial);
        this.rutasEditorialApi.post('/crear', EditorialControladorCrear_1.default.crearEditorial);
        this.rutasEditorialApi.put('/actualizar', EditorialControladorActualizar_1.default.actualizarEditorial);
        this.rutasEditorialApi.delete('/elminar/:elCodigo', EditorialControladorEliminar_1.default.eliminarEditorial);
    }
}
const editorialRutas = new EditorialRutas();
exports.default = editorialRutas.rutasEditorialApi;
