import { Router } from "express";
import prestamosControladorActualizar from "../../controladores/prestamos/PrestamosControladorActualizar";
import prestamosControladorCrear from "../../controladores/prestamos/PrestamosControladorCrear";
import prestamosControladorMostrar from "../../controladores/prestamos/PrestamosControladorMostrar";
import prestamosControladorEliminar from "../../controladores/prestamos/PrestamosControladorEliminar";

class PrestamosRutas {
    public rutasPrestamosApi: Router;
    constructor() {
        this.rutasPrestamosApi = Router();
        this.configuracion();
    }
    public configuracion() {

        this.rutasPrestamosApi.get('/mostrar', prestamosControladorMostrar.demelasPrestamos);
        this.rutasPrestamosApi.post('/crear', prestamosControladorCrear.crearPrestamos);
        this.rutasPrestamosApi.put('/actualizar', prestamosControladorActualizar.actualizarPrestamos);
        this.rutasPrestamosApi.delete('/elminar/:elCodigo', prestamosControladorEliminar.eliminarPrestamos);



    }
}
const prestamosRutas = new PrestamosRutas();
export default prestamosRutas.rutasPrestamosApi;