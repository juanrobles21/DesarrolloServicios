import { Router } from "express";
import autoresLibroControladorActualizar from "../../controladores/autoresLibro/AutoresLibroControladorActualizar";
import autoresLibroControladorCrear from "../../controladores/autoresLibro/AutoresLibroControladorCrear";
import autoresLibroControladorMostrar from "../../controladores/autoresLibro/AutoresLibroControladorMostrar";
import autoresLibroControladorEliminar from "../../controladores/autoresLibro/AutoresLibroControladorEliminar";

class AutoresLibroRutas {
    public rutasAutoresLibroApi: Router;
    constructor() {
        this.rutasAutoresLibroApi = Router();
        this.configuracion();
    }
    public configuracion() {

        this.rutasAutoresLibroApi.get('/mostrar', autoresLibroControladorMostrar.demelasAutoresLibro);
        this.rutasAutoresLibroApi.post('/crear', autoresLibroControladorCrear.crearAutoresLibro);
        this.rutasAutoresLibroApi.put('/actualizar', autoresLibroControladorActualizar.actualizarAutoresLibro);
        this.rutasAutoresLibroApi.delete('/elminar/:elCodigo', autoresLibroControladorEliminar.eliminarAutoresLibro);



    }
}
const autoresLibroRutas = new AutoresLibroRutas();
export default autoresLibroRutas.rutasAutoresLibroApi;