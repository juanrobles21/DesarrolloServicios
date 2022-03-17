import { Router } from "express";
import accesoControladorValidar from "../controladores/accesos/AccesosControladorValidar";


class AccesosRutas {
    public rutasAccesoApi: Router;
    constructor() {
        this.rutasAccesoApi = Router();
        this.configuracion();
    }
    public configuracion() {

        this.rutasAccesoApi.post('/validar', accesoControladorValidar.validarAcceso);

    }
}
const accesosRutas = new AccesosRutas();
export default accesosRutas.rutasAccesoApi;