import { Router } from "express";
import pruebaControlador from "../controladores/PruebaControlador";

class PruebaRuta {
    public rutaPruebaAPI;
    constructor() {
        this.rutaPruebaAPI = Router();
        this.configuracion();
    }
    public configuracion() {
        this.rutaPruebaAPI.get('/demelos', pruebaControlador.ataquenme);


    }
}
const pruebaRuta = new PruebaRuta();
export default pruebaRuta.rutaPruebaAPI;