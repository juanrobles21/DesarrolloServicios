"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AccesosDaoValidar_1 = __importDefault(require("../../daos/accesos/AccesosDaoValidar"));
const accesos_validar_sql_1 = require("../../repositorios/accesos/accesos_validar_sql");
class AccesosControladorValidar extends AccesosDaoValidar_1.default {
    validarAcceso(req, res) {
        const correo = req.body.correo;
        const clave = req.body.clave;
        const parametro = [correo, clave];
        AccesosControladorValidar.validarAcceso(accesos_validar_sql_1.SQL_ACCESOS_VALIDAR.VALIDAR, parametro, res);
    }
}
const accesoControladorValidar = new AccesosControladorValidar();
exports.default = accesoControladorValidar;
