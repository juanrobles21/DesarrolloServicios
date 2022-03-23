import cors from 'cors';
import morgan from 'morgan';
import express from 'express';
import validacion from '../../middleware/Validacion';
import rutasProgramasApi from '../../rutas/ProgramasRutas';
import rutasMateriasApi from '../../rutas/MateriasRutas';
import rutasSemestresApi from '../../rutas/SemestresRutas';
import rutasPensumApi from '../../rutas/PensumRutas';
import rutasMateriaPensumApi from '../../rutas/MateriaPensumRutas';
import rutasAccesoApi from '../../rutas/AcceosRutas';

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
        this.app.use('/api/Universidad', rutasProgramasApi);
        this.app.use('/api/Universidad', rutasMateriasApi);

        this.app.use('/api/privada', validacion.delToken, rutasMateriasApi);
        this.app.use('/api/Universidad', rutasSemestresApi);
        this.app.use('/api/Universidad', rutasPensumApi);
        this.app.use('/api/Universidad', rutasMateriaPensumApi);
        this.app.use('/api/Universidad', rutasAccesoApi);

    }
    public iniciarSerividor(): void {
        this.app.listen(this.app.get('PORT'), () => {
            console.log('YA SIRVEEEE!',
                this.app.get('PORT'));
        });
    }
}
export default Servidor;