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
class LibroDaoCrear {
    static crearLibro(sqlConfirmar, sqlConfirmarEditorial, sqlCrear, paramentros, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield conexionBD_1.default
                .task((consulta) => __awaiter(this, void 0, void 0, function* () {
                //Aca vamos hacer las consultas
                const dato = yield consulta.one(sqlConfirmar, paramentros);
                const editorial = yield consulta.one(sqlConfirmarEditorial, paramentros);
                if (dato.cantidad == 0 && editorial.cantidad == 1) {
                    return yield consulta.one(sqlCrear, paramentros);
                }
                else {
                    return { id_libro: 0 };
                }
            }))
                .then((respuesta) => {
                //Aca va si todo esta bien
                if (respuesta.id_libro != 0) {
                    res.status(200).json({ respuesta: 'Libro creado', nuevoCodigo: respuesta.id_libro });
                }
                else {
                    console.log(respuesta);
                    res.status(402).json({ respuesta: 'Error, el titulo del libro ya existe o los datos de la editorial no son correctos', nuevoCodigo: respuesta.id_libro });
                }
            })
                .catch((miError) => {
                console.log('Error, consulta no se realizo con exito', miError);
                res.status(400).json({ respuestas: 'Error en la consulta' });
            });
        });
    }
}
exports.default = LibroDaoCrear;
