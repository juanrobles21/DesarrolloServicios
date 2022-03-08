import { Router } from "express";
import programasControlador from "../controladores/ProgramasControlador";

class ProgramasRutas {
    public rutasProgramasApi: Router;
    constructor() {
        this.rutasProgramasApi = Router();
        this.configuracion();
    }
    public configuracion() {
        this.rutasProgramasApi.get('/programas', programasControlador.demelosProgramas);
        this.rutasProgramasApi.post('/programas/crear', programasControlador.crearProgramas);
        this.rutasProgramasApi.get('/programas/buscar/:elCodigo', programasControlador.buscarProgramas);
        this.rutasProgramasApi.delete('/programas/elminar/:elCodigo', programasControlador.EliminarProgramas);

    }
}
const programasRutas = new ProgramasRutas();
export default programasRutas.rutasProgramasApi;