"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const express_1 = __importDefault(require("express"));
const ProgramasRutas_1 = __importDefault(require("../../rutas/ProgramasRutas"));
const MateriasRutas_1 = __importDefault(require("../../rutas/MateriasRutas"));
const SemestresRutas_1 = __importDefault(require("../../rutas/SemestresRutas"));
const PensumRutas_1 = __importDefault(require("../../rutas/PensumRutas"));
const MateriaPensumRutas_1 = __importDefault(require("../../rutas/MateriaPensumRutas"));
class Servidor {
    constructor() {
        this.app = (0, express_1.default)();
        this.iniciarConfiguracion();
        this.activarRutas();
    }
    iniciarConfiguracion() {
        this.app.set('PORT', 8088);
        this.app.use((0, cors_1.default)());
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use(express_1.default.json({ limit: '100mb' }));
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
    activarRutas() {
        this.app.use('/api/Universidad', ProgramasRutas_1.default);
        this.app.use('/api/Universidad', MateriasRutas_1.default);
        this.app.use('/api/Universidad', SemestresRutas_1.default);
        this.app.use('/api/Universidad', PensumRutas_1.default);
        this.app.use('/api/Universidad', MateriaPensumRutas_1.default);
    }
    iniciarSerividor() {
        this.app.listen(this.app.get('PORT'), () => {
            console.log('YA SIRVEEEE!', this.app.get('PORT'));
        });
    }
}
exports.default = Servidor;
