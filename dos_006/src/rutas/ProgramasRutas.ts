import { Router } from "express";
import programasControladorActualizar from "../controladores/programas/ProgramasControladorActualizar";
import programasControladorBuscar from "../controladores/programas/ProgramasControladorBuscar";
import programasControladorMostrar from "../controladores/programas/ProgramasControladorMostrar";
import programasControladorEliminar from "../controladores/programas/ProgramasControladorEliminar";
import programasControladorCrear from "../controladores/programas/ProgramasControladorCrear";


class ProgramasRutas {
    public rutasProgramasApi: Router;
    constructor() {
        this.rutasProgramasApi = Router();
        this.configuracion();
    }
    public configuracion() {
        this.rutasProgramasApi.get('/programas', programasControladorMostrar.mostrarProgramas);
        this.rutasProgramasApi.post('/programas/crear', programasControladorCrear.crearProgramas);
        this.rutasProgramasApi.put('/programas/actualizar', programasControladorActualizar.ActualizarProgramas);
        this.rutasProgramasApi.get('/programas/buscar/:elCodigo', programasControladorBuscar.buscarProgramas);
        this.rutasProgramasApi.delete('/programas/elminar/:elCodigo', programasControladorEliminar.EliminarProgramas);

    }
}
const programasRutas = new ProgramasRutas();
export default programasRutas.rutasProgramasApi;