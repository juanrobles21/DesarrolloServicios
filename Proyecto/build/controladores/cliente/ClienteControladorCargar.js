"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ClienteDaoCargar_1 = __importDefault(require("../../daos/cliente/ClienteDaoCargar"));
const cliente_cargar_sql_1 = require("../../repositorios/cliente/cliente_cargar_sql");
class ClienteControladorCargar extends ClienteDaoCargar_1.default {
    buscarClienteIdPrestamo(req, res) {
        const id = req.params.elCodigo;
        const paramentro = [id];
        ClienteControladorCargar.encontrarPorID(cliente_cargar_sql_1.SQL_CLIENTE_CARGAR.CARGAR, paramentro, res);
    }
}
const clienteControladorCargar = new ClienteControladorCargar();
exports.default = clienteControladorCargar;
