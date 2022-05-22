import cors from 'cors';
import morgan from 'morgan';
import express from 'express';
import rutasClienteApi from '../../rutas/cliente/ClienteRutas';
import rutasEditorialApi from '../../rutas/editorial/EditorialRutas';
import rutasAutorApi from '../../rutas/autor/AutorRutas';
import rutasPrestamosApi from '../../rutas/prestamos/PrestamosRutas';
import rutasLibroApi from '../../rutas/libro/LibroRutas';
import rutasAutoresLibroApi from '../../rutas/autoresLibro/AutoresLibroRutas';
import rutasDetallePrestamosApi from '../../rutas/detallePrestamos/DetallePrestamosRutas';

class Servidor {
    public app: express.Application;


    constructor() {
        this.app = express();
        this.iniciarConfiguracion();
        this.activarRutas();

    }
    public iniciarConfiguracion(): void {
        this.app.set('PORT', 8088);
        this.app.use(cors());
        this.app.use(morgan('dev'));
        this.app.use(express.json({ limit: '100mb' }));
        this.app.use(express.urlencoded({ extended: true }));


    }
    public activarRutas(): void {
        this.app.use('/api/Libreria/Cliente', rutasClienteApi);
        this.app.use('/api/Libreria/Editorial', rutasEditorialApi);
        this.app.use('/api/Libreria/Autor', rutasAutorApi);
        this.app.use('/api/Libreria/Prestamos', rutasPrestamosApi);
        this.app.use('/api/Libreria/Libro', rutasLibroApi);
        this.app.use('/api/Libreria/AutoresLibro', rutasAutoresLibroApi);
        this.app.use('/api/Libreria/DetallePrestamos', rutasDetallePrestamosApi);

    }
    public iniciarSerividor(): void {
        this.app.listen(this.app.get('PORT'), () => {
            console.log('YA SIRVEEEE!',
                this.app.get('PORT'));
        });
    }
}
export default Servidor;