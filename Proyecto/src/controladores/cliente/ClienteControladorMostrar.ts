import { Request, Response } from "express";
import ClienteDaoMostrar from "../../daos/cliente/ClienteDaoMostrar";
import { SQL_CLIENTE_MOSTRAR } from "../../repositorios/cliente/cliente_mostrar_sql";

class ClienteControladorMostrar extends ClienteDaoMostrar {
    public demelasClientes(req: Request, res: Response): void {
        ClienteControladorMostrar.obtenerClientes(SQL_CLIENTE_MOSTRAR.TODAS, [], res);
    }
}
const clienteControladorMostrar = new ClienteControladorMostrar();
export default clienteControladorMostrar;