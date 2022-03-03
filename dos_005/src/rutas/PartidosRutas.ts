import { Router } from "express";
import partidosControlador from "../controladores/PartidosControlador";

class PartidosRutas {
    public rutasPartidosApi: Router;
    constructor() {
        this.rutasPartidosApi = Router();
        this.configuracion();
    }
    public configuracion() {
        this.rutasPartidosApi.get('/partidos', partidosControlador.demelosPartidos);
        this.rutasPartidosApi.post('/partidos/crear', partidosControlador.crearPartidos);

    }
}
const partidosRutas = new PartidosRutas();
export default partidosRutas.rutasPartidosApi;
