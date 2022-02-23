"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FacultadDAO_1 = __importDefault(require("../daos/FacultadDAO"));
const facultad_sql_1 = require("../repositorios/facultad_sql");
class FacultadControlador extends FacultadDAO_1.default {
    demelasFacultades(req, res) {
        FacultadControlador.obtenerFacul(facultad_sql_1.SQL_FACULTAD.TODAS, [], res);
    }
}
const facultadControlador = new FacultadControlador();
exports.default = facultadControlador;
