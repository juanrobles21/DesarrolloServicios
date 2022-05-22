import { Response } from "express";
import pool from '../../configuracion/conexion/conexionBD';

class ClienteDaoActualizar {
    public static async actualizarCliente(sqlConfirmar: string, sqlActualizar: string, paramentros: any, res: Response): Promise<any> {
        await pool.task(async consulta => {
            //Aca vamos hacer las consultas
            const dato = await consulta.one(sqlConfirmar, paramentros);
            if (dato.cantidad == 0) {
                return await consulta.one(sqlActualizar, paramentros);
            } else {
                return { id_cliente: 0 };
            }
        })
            .then((respuesta) => {
                if (respuesta.id_cliente != 0) {
                    console.log(respuesta);
                    res.status(200).json({ respuesta: 'Cliente actualizado', });
                } else {
                    console.log(respuesta);
                    res.status(402).json({ respuesta: 'Error, no es posible actualizar el cliente. El numero de la identificacion ya existe' });
                }
            })
            .catch((miError) => {
                console.log(miError);
                res.status(400).json({ respuestas: 'Error en actualizar Cliente' });

            });
    }

}
export default ClienteDaoActualizar;