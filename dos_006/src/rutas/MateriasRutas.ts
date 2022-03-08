import { Router } from "express";
import materiasControlador from "../controladores/MateriasControlador";

class MateriasRutas {
    public rutasMateriasApi: Router;
    constructor() {
        this.rutasMateriasApi = Router();
        this.configuracion();
    }
    public configuracion() {
        this.rutasMateriasApi.get('/materias', materiasControlador.demelasMaterias);

    }
}
const materiasRutas = new MateriasRutas();
export default materiasRutas.rutasMateriasApi;