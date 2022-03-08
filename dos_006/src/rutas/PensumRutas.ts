import { Router } from "express";
import pensumControlador from "../controladores/PensumControlador";

class PensumRutas {
    public rutaPensumApi: Router;
    constructor() {
        this.rutaPensumApi = Router();
        this.configuracion();
    }
    public configuracion() {
        this.rutaPensumApi.get('/pensum', pensumControlador.demelosPensum);

    }
}
const pensumRutas = new PensumRutas();
export default pensumRutas.rutaPensumApi;
