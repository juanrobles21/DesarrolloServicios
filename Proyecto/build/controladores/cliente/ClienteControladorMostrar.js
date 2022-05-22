"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ClienteDaoMostrar_1 = __importDefault(require("../../daos/cliente/ClienteDaoMostrar"));
const cliente_mostrar_sql_1 = require("../../repositorios/cliente/cliente_mostrar_sql");
class ClienteControladorMostrar extends ClienteDaoMostrar_1.default {
    demelasClientes(req, res) {
        ClienteControladorMostrar.obtenerClientes(cliente_mostrar_sql_1.SQL_CLIENTE_MOSTRAR.TODAS, [], res);
    }
}
const clienteControladorMostrar = new ClienteControladorMostrar();
exports.default = clienteControladorMostrar;
