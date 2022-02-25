import { Router } from "express";
import docentesCotrolador from "../controladores/DocentesControlador";

class DocentesRutas {
    public rutaDocentesApi: Router;
    constructor() {
        this.rutaDocentesApi = Router();
        this.configuracion();
    }
    public configuracion() {
        this.rutaDocentesApi.get('/demelos', docentesCotrolador.demelosDocentes);
    }
}
const docentesRustas = new DocentesRutas();
export default docentesRustas.rutaDocentesApi;
