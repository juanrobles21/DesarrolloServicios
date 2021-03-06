"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PensumControlador_1 = __importDefault(require("../controladores/pensum/PensumControlador"));
class PensumRutas {
    constructor() {
        this.rutaPensumApi = (0, express_1.Router)();
        this.configuracion();
    }
    configuracion() {
        this.rutaPensumApi.get('/pensum', PensumControlador_1.default.demelosPensum);
    }
}
const pensumRutas = new PensumRutas();
exports.default = pensumRutas.rutaPensumApi;
