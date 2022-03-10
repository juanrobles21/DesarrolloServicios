"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const MateriaPensumControlador_1 = __importDefault(require("../controladores/materiapensum/MateriaPensumControlador"));
class MateriaPensumRutas {
    constructor() {
        this.rutasMateriaPensumApi = (0, express_1.Router)();
        this.configuracion();
    }
    configuracion() {
        this.rutasMateriaPensumApi.get('/materiasPensum', MateriaPensumControlador_1.default.demelasMateriaPensum);
    }
}
const materiaPensumRutas = new MateriaPensumRutas();
exports.default = materiaPensumRutas.rutasMateriaPensumApi;
