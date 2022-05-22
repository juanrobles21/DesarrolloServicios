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
class LibroDaoActualizar {
    static actualizarLibro(sqlConfirmar, sqlConfirmarEditorial, sqlActualizar, paramentros, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield conexionBD_1.default.task((consulta) => __awaiter(this, void 0, void 0, function* () {
                //Aca vamos hacer las consultas
                const dato = yield consulta.one(sqlConfirmar, sqlConfirmarEditorial, paramentros);
                const editorial = yield consulta.one(sqlConfirmarEditorial, paramentros);
                if (dato.cantidad == 0 && editorial.cantidad == 1) {
                    return yield consulta.one(sqlActualizar, paramentros);
                }
                else {
                    return { id_libro: 0 };
                }
            }))
                .then((respuesta) => {
                if (respuesta.id_libro != 0) {
                    console.log(respuesta);
                    res.status(200).json({ respuesta: 'Libro actualizado', });
                }
                else {
                    console.log(respuesta);
                    res.status(402).json({ respuesta: 'Error, no es posible actualizar el Libro. El nombre de la Libro ya existe o los datos ingresados de la editorial no son validos' });
                }
            })
                .catch((miError) => {
                console.log(miError);
                res.status(400).json({ respuestas: 'Error en actualizar Libro' });
            });
        });
    }
}
exports.default = LibroDaoActualizar;
