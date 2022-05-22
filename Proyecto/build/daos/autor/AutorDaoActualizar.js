"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const conexionBD_1 = __importDefault(require("../../configuracion/conexion/conexionBD"));
class AutorDaoActualizar {
    static actualizarAutor(sqlActualizar, paramentros, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield conexionBD_1.default.task((consulta) => __awaiter(this, void 0, void 0, function* () {
                return yield consulta.one(sqlActualizar, paramentros);
            }))
                .then((respuesta) => {
                if (respuesta.id_autor != 0) {
                    console.log(respuesta);
                    res.status(200).json({ respuesta: 'Autor actualizado', });
                }
                else {
                    console.log(respuesta);
                    res.status(402).json({ respuesta: 'Error, no es posible actualizar la materia. El nombre de la materia ya existe' });
                }
            })
                .catch((miError) => {
                console.log(miError);
                res.status(400).json({ respuestas: 'Error en actualizar Autor' });
            });
        });
    }
}
exports.default = AutorDaoActualizar;
