import { Router } from "express";
import semestresControlador from "../controladores/semestres/SemestresControlador";

class SemestresRutas {
    public rutasSemestresApi: Router;
    constructor() {
        this.rutasSemestresApi = Router();
        this.configuracion();
    }
    public configuracion() {
        this.rutasSemestresApi.get('/semestres', semestresControlador.demelosSemestres);

    }
}
const semestresRutas = new SemestresRutas();
export default semestresRutas.rutasSemestresApi;