import { Router } from "express";
import pruebaControlador from "../controladores/PruebaControlador";

class PruebaRuta{
    public rutasPruebaApi;
    constructor(){
        this.rutasPruebaApi=Router();
        this.configuracion();
    }
    public configuracion(){
        this.rutasPruebaApi.get('/info1',pruebaControlador.ataqueme1);
        this.rutasPruebaApi.get('/info2',pruebaControlador.ataqueme2);
        this.rutasPruebaApi.get('/info3',pruebaControlador.ataqueme3);
    }

}
const pruebaRuta=new PruebaRuta();
export default pruebaRuta.rutasPruebaApi;