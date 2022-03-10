import { Router } from "express";
import semestresControladorActualizar from "../controladores/semestres/SemestresControladorActualizar";
import semestresControladorBuscar from "../controladores/semestres/SemestresControladorBuscar";
import semestresControladorCrear from "../controladores/semestres/SemestresControladorCrear";
import semestresControladorEliminar from "../controladores/semestres/SemestresControladorEliminar";
import semestresControladorMostrar from "../controladores/semestres/SemestresControladorMostrar";

class SemestresRutas {
    public rutasSemestresApi: Router;
    constructor() {
        this.rutasSemestresApi = Router();
        this.configuracion();
    }
    public configuracion() {
        this.rutasSemestresApi.get('/semestres', semestresControladorMostrar.mostrarSemestres);
        this.rutasSemestresApi.post('/semestres/crear', semestresControladorCrear.crearSemestres);
        this.rutasSemestresApi.put('/semestres/actualizar', semestresControladorActualizar.actualizarSemestres);
        this.rutasSemestresApi.get('/semestres/buscar/:elCodigo', semestresControladorBuscar.buscarSemestres);
        this.rutasSemestresApi.delete('/semestres/elminar/:elCodigo', semestresControladorEliminar.eliminarSemestres);

    }
}
const semestresRutas = new SemestresRutas();
export default semestresRutas.rutasSemestresApi;