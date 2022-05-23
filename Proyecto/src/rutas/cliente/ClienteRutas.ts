import { Router } from "express";
import clienteControladorActualizar from "../../controladores/cliente/ClienteControladorActualizar";
import clienteControladorCrear from "../../controladores/cliente/ClienteControladorCrear";
import clienteControladorMostrar from "../../controladores/cliente/ClienteControladorMostrar";
import clienteControladorEliminar from "../../controladores/cliente/ClienteControladorEliminar";
import clienteControladorCargar from "../../controladores/cliente/ClienteControladorCargar";

class ClienteRutas {
    public rutasClienteApi: Router;
    constructor() {
        this.rutasClienteApi = Router();
        this.configuracion();
    }
    public configuracion() {

        this.rutasClienteApi.get('/mostrar', clienteControladorMostrar.demelasClientes);
        this.rutasClienteApi.post('/crear', clienteControladorCrear.crearCliente);
        this.rutasClienteApi.put('/actualizar', clienteControladorActualizar.actualizarCliente);
        this.rutasClienteApi.delete('/elminar/:elCodigo', clienteControladorEliminar.eliminarCliente);
        this.rutasClienteApi.get('/buscar/:elCodigo', clienteControladorCargar.buscarClienteIdPrestamo);


    }
}
const clienteRutas = new ClienteRutas();
export default clienteRutas.rutasClienteApi;