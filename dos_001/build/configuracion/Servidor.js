"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const express_1 = __importDefault(require("express"));
const PruebaRutas_1 = __importDefault(require("../rutas/PruebaRutas"));
class Servidor {
    constructor() {
        this.app = (0, express_1.default)();
        this.iniciarConfiguarion();
        this.activarRutas();
    }
    iniciarConfiguarion() {
        this.app.set('PORT', 8088);
        this.app.use((0, cors_1.default)());
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use(express_1.default.json({ limit: '100mb' }));
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
    activarRutas() {
        this.app.use('/api/nolocreo', PruebaRutas_1.default);
    }
    iniciarServidor() {
        this.app.listen(this.app.get('PORT'), () => {
            console.log('YA SIRVEEEE!', this.app.get('PORT'));
        });
    }
}
exports.default = Servidor;
