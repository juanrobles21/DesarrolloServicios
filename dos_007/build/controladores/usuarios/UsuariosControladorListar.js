"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UsuariosDaoListar_1 = __importDefault(require("../../daos/usuarios/UsuariosDaoListar"));
const usuarios_listar_sql_1 = require("../../repositorios/usuarios/usuarios_listar_sql");
class UsuariosControladorListar extends UsuariosDaoListar_1.default {
    listarUsuarios(req, res) {
        UsuariosControladorListar.listarUsuarios(usuarios_listar_sql_1.SQL_USUARIOS_LISTAR.LISTAR, [], res);
    }
}
const usuariosControladorListar = new UsuariosControladorListar();
exports.default = usuariosControladorListar;
