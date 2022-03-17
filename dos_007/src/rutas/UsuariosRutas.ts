import { Router } from "express";
import usuariosControladorListar from "../controladores/usuarios/UsuariosControladorListar";

class UsuariosRutas {
    public rutasUsuariosApi: Router;
    constructor() {
        this.rutasUsuariosApi = Router();
        this.configuracion();
    }
    public configuracion() {
        this.rutasUsuariosApi.get('/listar', usuariosControladorListar.listarUsuarios);

    }
}
const usuariosRutas = new UsuariosRutas();
export default usuariosRutas.rutasUsuariosApi;