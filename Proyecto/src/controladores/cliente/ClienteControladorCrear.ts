import { Request, Response } from "express";
import ClienteDaoCrear from "../../daos/cliente/ClienteDaoCrear";
import { SQL_CLIENTE_CREAR } from "../../repositorios/cliente/cliente_crear_sql";

class ClienteControladorCrear extends ClienteDaoCrear {
    public crearCliente(req: Request, res: Response): void {
        const identificacion = req.body.identificacion;
        const nombre = req.body.nombre;
        const apellido = req.body.apellido;
        const direccion = req.body.direccion;
        const telefono = req.body.telefono;
        const parametro = [identificacion, nombre, apellido, direccion, telefono];
        ClienteControladorCrear.crearCliente(SQL_CLIENTE_CREAR.CONFIRMAR, SQL_CLIENTE_CREAR.CREAR, parametro, res);
    }
}
const clienteControladorCrear = new ClienteControladorCrear();
export default clienteControladorCrear;