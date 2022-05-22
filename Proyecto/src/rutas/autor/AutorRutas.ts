import { Router } from "express";
import autorControladorActualizar from "../../controladores/autor/AutorControladorActualizar";
import autorControladorCrear from "../../controladores/autor/AutorControladorCrear";
import autorControladorMostrar from "../../controladores/autor/AutorControladorMostrar";
import autorControladorEliminar from "../../controladores/autor/AutorControladorEliminar";
class AutorRutas {
    public rutasAutorApi: Router;
    constructor() {
        this.rutasAutorApi = Router();
        this.configuracion();
    }
    public configuracion() {

        this.rutasAutorApi.get('/mostrar', autorControladorMostrar.demelasAutor);
        this.rutasAutorApi.post('/crear', autorControladorCrear.crearAutor);
        this.rutasAutorApi.put('/actualizar', autorControladorActualizar.actualizarAutor);
        this.rutasAutorApi.delete('/elminar/:elCodigo', autorControladorEliminar.eliminarAutor);



    }
}
const autorRutas = new AutorRutas();
export default autorRutas.rutasAutorApi;