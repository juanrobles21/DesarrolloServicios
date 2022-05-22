"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ClienteDaoCrear_1 = __importDefault(require("../../daos/cliente/ClienteDaoCrear"));
const cliente_crear_sql_1 = require("../../repositorios/cliente/cliente_crear_sql");
class ClienteControladorCrear extends ClienteDaoCrear_1.default {
    crearCliente(req, res) {
        const identificacion = req.body.identificacion;
        const nombre = req.body.nombre;
        const apellido = req.body.apellido;
        const direccion = req.body.direccion;
        const telefono = req.body.telefono;
        const parametro = [identificacion, nombre, apellido, direccion, telefono];
        ClienteControladorCrear.crearCliente(cliente_crear_sql_1.SQL_CLIENTE_CREAR.CONFIRMAR, cliente_crear_sql_1.SQL_CLIENTE_CREAR.CREAR, parametro, res);
    }
}
const clienteControladorCrear = new ClienteControladorCrear();
exports.default = clienteControladorCrear;
