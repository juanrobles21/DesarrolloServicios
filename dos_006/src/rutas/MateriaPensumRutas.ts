import { Router } from "express";
import materiaPensumControlador from "../controladores/MateriaPensumControlador";

class MateriaPensumRutas {
    public rutasMateriaPensumApi: Router;
    constructor() {
        this.rutasMateriaPensumApi = Router();
        this.configuracion();
    }
    public configuracion() {
        this.rutasMateriaPensumApi.get('/materiasPensum', materiaPensumControlador.demelasMateriaPensum);

    }
}
const materiaPensumRutas = new MateriaPensumRutas();
export default materiaPensumRutas.rutasMateriaPensumApi;