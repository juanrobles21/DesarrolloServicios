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
class AutorDaoCrear {
    static crearAutor(sqlCrear, paramentros, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield conexionBD_1.default
                .task((consulta) => __awaiter(this, void 0, void 0, function* () {
                //Aca vamos hacer las consultas
                return yield consulta.one(sqlCrear, paramentros);
            }))
                .then((respuesta) => {
                //Aca va si todo esta bien
                if (respuesta.id_autor != 0) {
                    res.status(200).json({ respuesta: 'Autor creado', nuevoCodigo: respuesta.id_autor });
                }
                else {
                    res.status(402).json({ respuesta: 'Error, Autor ya esta creado', nuevoCodigo: respuesta.id_autor });
                }
            })
                .catch((miError) => {
                console.log('Error, consulta no se realizo con exito', miError);
                res.status(400).json({ respuestas: 'Error en la consulta' });
            });
        });
    }
}
exports.default = AutorDaoCrear;
