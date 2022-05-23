import { Request, Response } from "express";
import ClienteDaoCargar from "../../daos/cliente/ClienteDaoCargar";
import { SQL_CLIENTE_CARGAR } from "../../repositorios/cliente/cliente_cargar_sql";

class ClienteControladorCargar extends ClienteDaoCargar {
    public buscarClienteIdPrestamo(req: Request, res: Response): void {
        const id = req.params.elCodigo;
        const paramentro = [id];
        ClienteControladorCargar.encontrarPorID(SQL_CLIENTE_CARGAR.CARGAR, paramentro, res);
    }
}
const clienteControladorCargar = new ClienteControladorCargar();
export default clienteControladorCargar;