import { Request, Response } from "express";
import ClienteDaoActualizar from "../../daos/cliente/ClienteDaoActualizar";
import { SQL_CLIENTE_ACTUALIZAR } from "../../repositorios/cliente/cliente_actualizar_sql";

class ClienteControladorActualizar extends ClienteDaoActualizar {
    public actualizarCliente(req: Request, res: Response): void {
        const cod = req.body.cod;
        const identificacion = req.body.identificacion;
        const nombre = req.body.nombre;
        const apellido = req.body.apellido;
        const direccion = req.body.direccion;
        const telefono = req.body.telefono;
        const parametro = [identificacion, nombre, apellido, direccion, telefono, cod];
        ClienteControladorActualizar.actualizarCliente(SQL_CLIENTE_ACTUALIZAR.CONFIRMAR, SQL_CLIENTE_ACTUALIZAR.ACTUALIZAR, parametro, res);
    }
}
const clienteControladorActualizar = new ClienteControladorActualizar();
export default clienteControladorActualizar;