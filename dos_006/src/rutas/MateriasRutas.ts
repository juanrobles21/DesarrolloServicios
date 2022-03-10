import { Router } from "express";
import materiasControlador from "../controladores/materias/MateriasControlador";

class MateriasRutas {
    public rutasMateriasApi: Router;
    constructor() {
        this.rutasMateriasApi = Router();
        this.configuracion();
    }
    public configuracion() {
        this.rutasMateriasApi.get('/materias', materiasControlador.demelasMaterias);
        this.rutasMateriasApi.post('/materias/crear', materiasControlador.crearMaterias);
        this.rutasMateriasApi.get('/materias/buscar/:elCodigo', materiasControlador.buscarMaterias);

    }
}
const materiasRutas = new MateriasRutas();
export default materiasRutas.rutasMateriasApi;