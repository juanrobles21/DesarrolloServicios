"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const express_1 = __importDefault(require("express"));
const ClienteRutas_1 = __importDefault(require("../../rutas/cliente/ClienteRutas"));
const EditorialRutas_1 = __importDefault(require("../../rutas/editorial/EditorialRutas"));
const AutorRutas_1 = __importDefault(require("../../rutas/autor/AutorRutas"));
const PrestamosRutas_1 = __importDefault(require("../../rutas/prestamos/PrestamosRutas"));
const LibroRutas_1 = __importDefault(require("../../rutas/libro/LibroRutas"));
const AutoresLibroRutas_1 = __importDefault(require("../../rutas/autoresLibro/AutoresLibroRutas"));
const DetallePrestamosRutas_1 = __importDefault(require("../../rutas/detallePrestamos/DetallePrestamosRutas"));
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
        this.app.use('/api/Libreria/Cliente', ClienteRutas_1.default);
        this.app.use('/api/Libreria/Editorial', EditorialRutas_1.default);
        this.app.use('/api/Libreria/Autor', AutorRutas_1.default);
        this.app.use('/api/Libreria/Prestamos', PrestamosRutas_1.default);
        this.app.use('/api/Libreria/Libro', LibroRutas_1.default);
        this.app.use('/api/Libreria/AutoresLibro', AutoresLibroRutas_1.default);
        this.app.use('/api/Libreria/DetallePrestamos', DetallePrestamosRutas_1.default);
    }
    iniciarSerividor() {
        this.app.listen(this.app.get('PORT'), () => {
            console.log('YA SIRVEEEE!', this.app.get('PORT'));
        });
    }
}
exports.default = Servidor;
