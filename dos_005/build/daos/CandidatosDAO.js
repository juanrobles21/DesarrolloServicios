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
const conexionBD_1 = __importDefault(require("../configuracion/conexion/conexionBD"));
class CandidatosDAO {
    static obtenerCandidatos(sqlConsulta, parametros, res) {
        return __awaiter(this, void 0, void 0, function* () {
            conexionBD_1.default.result(sqlConsulta, parametros)
                .then((resultado) => {
                res.status(200).json(resultado.rows);
            })
                .catch((miError) => {
                console.log('Error manp', miError);
                res.status(400).json({ respuesta: 'Ayyyy, no sirvio, mano ' });
            });
        });
    }
    static crearCandidatos(sqlConfirmar, sqlCrear, paramentros, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield conexionBD_1.default
                .task((consulta) => __awaiter(this, void 0, void 0, function* () {
                const dato = yield consulta.one(sqlConfirmar, paramentros);
                if (dato.cantidad != 0) {
                    return yield consulta.one(sqlCrear, paramentros);
                }
                else {
                    return { id_candidato: 0 };
                }
            }))
                .then((respuesta) => {
                if (respuesta.id_candidato != 0) {
                    res.status(200).json({ respuesta: 'Candidato Creado', nuevoCodigo: respuesta.nombre_partido });
                }
                else {
                    res.status(402).json({ respuesta: 'Error, el ID del partido no esta creado', nuevoCodigo: respuesta.nombre_partido });
                }
            })
                .catch((miError) => {
                console.log('Error, consulta no se realizo con exito', miError);
                res.status(400).json({ respuesta: 'Error en la consulta' });
            });
        });
    }
}
exports.default = CandidatosDAO;
