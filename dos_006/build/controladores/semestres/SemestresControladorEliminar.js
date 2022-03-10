"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SemestresDaoEliminar_1 = __importDefault(require("../../daos/semestres/SemestresDaoEliminar"));
const semestres_eliminar_sql_1 = require("../../repositorios/semestres/semestres_eliminar_sql");
class SemestresControladorEliminar extends SemestresDaoEliminar_1.default {
    eliminarSemestres(req, res) {
        const id = req.params.elCodigo;
        const paramentro = [id];
        SemestresControladorEliminar.eliminarPorID(semestres_eliminar_sql_1.SQL_SEMESTRES_ELIMINAR.ELIMINAR, paramentro, res);
    }
}
const semestresControladorEliminar = new SemestresControladorEliminar();
exports.default = semestresControladorEliminar;
