"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ClienteDaoActualizar_1 = __importDefault(require("../../daos/cliente/ClienteDaoActualizar"));
const cliente_actualizar_sql_1 = require("../../repositorios/cliente/cliente_actualizar_sql");
class ClienteControladorActualizar extends ClienteDaoActualizar_1.default {
    actualizarCliente(req, res) {
        const cod = req.body.cod;
        const identificacion = req.body.identificacion;
        const nombre = req.body.nombre;
        const apellido = req.body.apellido;
        const direccion = req.body.direccion;
        const telefono = req.body.telefono;
        const parametro = [identificacion, nombre, apellido, direccion, telefono, cod];
        ClienteControladorActualizar.actualizarCliente(cliente_actualizar_sql_1.SQL_CLIENTE_ACTUALIZAR.CONFIRMAR, cliente_actualizar_sql_1.SQL_CLIENTE_ACTUALIZAR.ACTUALIZAR, parametro, res);
    }
}
const clienteControladorActualizar = new ClienteControladorActualizar();
exports.default = clienteControladorActualizar;
