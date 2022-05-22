import { Router } from "express";
import libroControladorActualizar from "../../controladores/Libro/LibroControladorActualizar";
import libroControladorCrear from "../../controladores/Libro/LibroControladorCrear";
import libroControladorMostrar from "../../controladores/Libro/LibroControladorMostrar";
import libroControladorEliminar from "../../controladores/Libro/LibroControladorEliminar";

class LibroRutas {
    public rutasLibroApi: Router;
    constructor() {
        this.rutasLibroApi = Router();
        this.configuracion();
    }
    public configuracion() {

        this.rutasLibroApi.get('/mostrar', libroControladorMostrar.demelasLibro);
        this.rutasLibroApi.post('/crear', libroControladorCrear.crearLibro);
        this.rutasLibroApi.put('/actualizar', libroControladorActualizar.actualizarLibro);
        this.rutasLibroApi.delete('/elminar/:elCodigo', libroControladorEliminar.eliminarLibro);



    }
}
const libroRutas = new LibroRutas();
export default libroRutas.rutasLibroApi;