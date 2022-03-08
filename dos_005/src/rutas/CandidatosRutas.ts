import { Router } from "express";
import candidatosControlador from "../controladores/CandidatosControlador";

class CandidatosRutas {
    public rutaCandidatosApi: Router;
    constructor() {
        this.rutaCandidatosApi = Router();
        this.configuracion();
    }
    public configuracion() {
        this.rutaCandidatosApi.get('/candidatos', candidatosControlador.demelosCandidatos);
        this.rutaCandidatosApi.post('/candidatos/crear', candidatosControlador.crearCandidatos);
    }
}
const candidatosRutas = new CandidatosRutas();
export default candidatosRutas.rutaCandidatosApi;
