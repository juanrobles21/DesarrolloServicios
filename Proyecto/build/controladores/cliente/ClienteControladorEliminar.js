"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ClienteDaoEliminar_1 = __importDefault(require("../../daos/cliente/ClienteDaoEliminar"));
const cliente_eliminar_sql_1 = require("../../repositorios/cliente/cliente_eliminar_sql");
class ClienteControladorEliminar extends ClienteDaoEliminar_1.default {
    eliminarCliente(req, res) {
        const id = req.params.elCodigo;
        const paramentro = [id];
        ClienteControladorEliminar.eliminarPorID(cliente_eliminar_sql_1.SQL_CLIENTE_ELIMINAR.ELIMINAR, paramentro, res);
    }
}
const clienteControladorEliminar = new ClienteControladorEliminar();
exports.default = clienteControladorEliminar;
