import { Router } from 'express';
import facultadControlador from '../controladores/FacultadControlador';

class FacultadRutas {
    public rutaFacultadApi: Router;
    constructor() {
        this.rutaFacultadApi = Router();
        this.configuracion();
    }
    public configuracion() {
        this.rutaFacultadApi.get('/demelos', facultadControlador.demelasFacultades);
    }

}
const facultadRutas = new FacultadRutas();
export default facultadRutas.rutaFacultadApi;