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
Object.defineProperty(exports, "__esModule", { value: true });
class PruebaDaos {
    static obtenerInfo1(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const miJason1 = { estudiantes: 'Juan Robles', materia: 'Desarrollo Servicios', horarios: '4:00' };
            Promise.resolve(miJason1)
                .then((resultado) => {
                console.log('OK', resultado);
                res.status(200).json(miJason1);
            })
                .catch((err) => {
                console.log('Error', err);
                res.status(400).json({ respuesta: 'se revento esto' });
            });
        });
    }
    static obtenerInfo2(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const miJason2 = { estudiantes: 'Juan Robles', materia: 'Redes', horarios: '2:00' };
            Promise.resolve(miJason2)
                .then((resultado) => {
                console.log('OK', resultado);
                res.status(200).json(miJason2);
            })
                .catch((err) => {
                console.log('Error', err);
                res.status(400).json({ respuesta: 'se revento esto' });
            });
        });
    }
    static obtenerInfo3(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const miJason3 = { estudiantes: 'Juan Robles', materia: 'Optimizacion', horarios: '11:00' };
            Promise.resolve(miJason3)
                .then((resultado) => {
                console.log('OK', resultado);
                res.status(200).json(miJason3);
            })
                .catch((err) => {
                console.log('Error', err);
                res.status(400).json({ respuesta: 'se revento esto' });
            });
        });
    }
}
exports.default = PruebaDaos;
