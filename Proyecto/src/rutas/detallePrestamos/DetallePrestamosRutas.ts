import { Router } from "express";
import detallePrestamosControladorActualizar from "../../controladores/detallePrestamos/DetallePrestamosControladorActualizar";
import detallePrestamosControladorCrear from "../../controladores/detallePrestamos/DetallePrestamosControladorCrear";
import detallePrestamosControladorMostrar from "../../controladores/detallePrestamos/DetallePrestamosControladorMostrar";
import detallePrestamosControladorEliminar from "../../controladores/detallePrestamos/DetallePrestamosControladorEliminar";

class DetallePrestamosRutas {
    public rutasDetallePrestamosApi: Router;
    constructor() {
        this.rutasDetallePrestamosApi = Router();
        this.configuracion();
    }
    public configuracion() {

        this.rutasDetallePrestamosApi.get('/mostrar', detallePrestamosControladorMostrar.demelasDetallePrestamos);
        this.rutasDetallePrestamosApi.post('/crear', detallePrestamosControladorCrear.crearDetallePrestamos);
        this.rutasDetallePrestamosApi.put('/actualizar', detallePrestamosControladorActualizar.actualizarDetallePrestamos);
        this.rutasDetallePrestamosApi.delete('/elminar/:elCodigo', detallePrestamosControladorEliminar.eliminarDetallePrestamos);



    }
}
const detallePrestamosRutas = new DetallePrestamosRutas();
export default detallePrestamosRutas.rutasDetallePrestamosApi;