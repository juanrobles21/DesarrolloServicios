import cors from 'cors';
import morgan from 'morgan';
import express from 'express';
import rutaFacultadApi from '../../rutas/FacultadRutas';
import rutaDocentesApi from '../../rutas/DocentesRutas';


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
        this.app.use('/api/Facultades', rutaFacultadApi);
        this.app.use('/api/Docentes', rutaDocentesApi);
    }
    public iniciarSerividor(): void {
        this.app.listen(this.app.get('PORT'), () => {
            console.log('YA SIRVEEEE!',
                this.app.get('PORT'));
        });
    }
}
export default Servidor;