import { Router } from "express";
import materiasControladorActualizar from "../controladores/materias/MateriasControladorActualizar";
import materiasControladorBuscar from "../controladores/materias/MateriasControladorBuscar";
import materiasControladorCrear from "../controladores/materias/MateriasControladorCrear";
import materiasControladorEliminar from "../controladores/materias/MateriasControladorElminar";
import materiasControladorMostrar from "../controladores/materias/MateriasControladorMostrar";

class MateriasRutas {
    public rutasMateriasApi: Router;
    constructor() {
        this.rutasMateriasApi = Router();
        this.configuracion();
    }
    public configuracion() {

        this.rutasMateriasApi.get('/materias', materiasControladorMostrar.demelasMaterias);
        this.rutasMateriasApi.post('/materias/crear', materiasControladorCrear.crearMaterias);
        this.rutasMateriasApi.put('/materias/actualizar', materiasControladorActualizar.actualizarMaterias);
        this.rutasMateriasApi.get('/materias/buscar/:elCodigo', materiasControladorBuscar.buscarMaterias);
        this.rutasMateriasApi.delete('/materias/elminar/:elCodigo', materiasControladorEliminar.eliminarMaterias);



    }
}
const materiasRutas = new MateriasRutas();
export default materiasRutas.rutasMateriasApi;