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
class AutoresLibroDaoActualizar {
    static actualizarAutoresLibro(sqlConfirmarAutor, sqlConfirmarLibro, sqlActualizar, paramentros, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield conexionBD_1.default.task((consulta) => __awaiter(this, void 0, void 0, function* () {
                //Aca vamos hacer las consultas
                const autor = yield consulta.one(sqlConfirmarAutor, paramentros);
                const libro = yield consulta.one(sqlConfirmarLibro, paramentros);
                if (autor.cantidad == 1 && libro.cantidad == 1) {
                    return yield consulta.one(sqlActualizar, paramentros);
                }
                else {
                    return { id_autorLibro: 0 };
                }
            }))
                .then((respuesta) => {
                if (respuesta.id_autorLibro != 0) {
                    console.log(respuesta);
                    res.status(200).json({ respuesta: 'Autor libro actualizado', });
                }
                else {
                    console.log(respuesta);
                    res.status(402).json({ respuesta: 'Error, no es posible actualizar el Autor libro. los datos de autor o de libro no son correctos' });
                }
            })
                .catch((miError) => {
                console.log(miError);
                res.status(400).json({ respuestas: 'Error en actualizar Autor Libro' });
            });
        });
    }
}
exports.default = AutoresLibroDaoActualizar;
