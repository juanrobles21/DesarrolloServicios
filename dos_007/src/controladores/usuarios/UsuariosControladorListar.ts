import { Request, Response } from "express";
import UsuariosDaoListar from "../../daos/usuarios/UsuariosDaoListar";
import { SQL_USUARIOS_LISTAR } from "../../repositorios/usuarios/usuarios_listar_sql";

class UsuariosControladorListar extends UsuariosDaoListar {
    public listarUsuarios(req: Request, res: Response): void {
        UsuariosControladorListar.listarUsuarios(SQL_USUARIOS_LISTAR.LISTAR, [], res);
    }
}
const usuariosControladorListar = new UsuariosControladorListar();
export default usuariosControladorListar;