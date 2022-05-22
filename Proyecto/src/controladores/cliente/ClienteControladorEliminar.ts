import { Request, Response } from "express";
import ClienteDaoEliminar from "../../daos/cliente/ClienteDaoEliminar";
import { SQL_CLIENTE_ELIMINAR } from "../../repositorios/cliente/cliente_eliminar_sql";

class ClienteControladorEliminar extends ClienteDaoEliminar {
    public eliminarCliente(req: Request, res: Response): void {
        const id = req.params.elCodigo;
        const paramentro = [id];
        ClienteControladorEliminar.eliminarPorID(SQL_CLIENTE_ELIMINAR.ELIMINAR, paramentro, res);

    }
}
const clienteControladorEliminar = new ClienteControladorEliminar();
export default clienteControladorEliminar;