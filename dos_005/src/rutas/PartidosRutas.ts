import { Router } from "express";
import partidosControlador from "../controladores/PartidosControlador";

class PartidosRutas {
    public rutasPartidosApi :Router;
    constructor(){
        this.rutasPartidosApi= Router();
        this.configuracion();
    }
    public configuracion(){
        this.rutasPartidosApi.get('/partidos',partidosControlador.demelosPartidos);

    }
}
const partidosRutas= new PartidosRutas();
export default partidosRutas.rutasPartidosApi;
