"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AutoresLibroDaoEliminar_1 = __importDefault(require("../../daos/autoresLibro/AutoresLibroDaoEliminar"));
const autores_libro_eliminar_sql_1 = require("../../repositorios/autoresLibro/autores_libro_eliminar_sql");
class AutoresLibroControladorEliminar extends AutoresLibroDaoEliminar_1.default {
    eliminarAutoresLibro(req, res) {
        const id = req.params.elCodigo;
        const paramentro = [id];
        AutoresLibroControladorEliminar.eliminarPorID(autores_libro_eliminar_sql_1.SQL_AUTORES_LIBRO_ELIMINAR.ELIMINAR, paramentro, res);
    }
}
const autoresLibroControladorEliminar = new AutoresLibroControladorEliminar();
exports.default = autoresLibroControladorEliminar;
