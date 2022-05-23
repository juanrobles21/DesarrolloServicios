import { Router } from "express";
import editorialControladorActualizar from "../../controladores/editorial/EditorialControladorActualizar";
import editorialControladorCrear from "../../controladores/editorial/EditorialControladorCrear";
import editorialControladorMostrar from "../../controladores/editorial/EditorialControladorMostrar";
import editorialControladorEliminar from "../../controladores/editorial/EditorialControladorEliminar";
import editorialControladorCargar from "../../controladores/editorial/EditorialControladorCargar";

class EditorialRutas {
    public rutasEditorialApi: Router;
    constructor() {
        this.rutasEditorialApi = Router();
        this.configuracion();
    }
    public configuracion() {

        this.rutasEditorialApi.get('/mostrar', editorialControladorMostrar.demelasEditorial);
        this.rutasEditorialApi.post('/crear', editorialControladorCrear.crearEditorial);
        this.rutasEditorialApi.put('/actualizar', editorialControladorActualizar.actualizarEditorial);
        this.rutasEditorialApi.delete('/elminar/:elCodigo', editorialControladorEliminar.eliminarEditorial);
        this.rutasEditorialApi.get('/buscar/:elCodigo', editorialControladorCargar.buscarEditorialIdLibro);


    }
}
const editorialRutas = new EditorialRutas();
export default editorialRutas.rutasEditorialApi;