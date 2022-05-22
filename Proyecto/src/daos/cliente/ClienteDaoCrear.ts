import { Response } from "express";
import pool from '../../configuracion/conexion/conexionBD';

class ClienteDaoCrear {
    public static async crearCliente(sqlConfirmar: string, sqlCrear: string, paramentros: any, res: Response): Promise<any> {
        await pool
            .task(async consulta => {
                //Aca vamos hacer las consultas
                const dato = await consulta.one(sqlConfirmar, paramentros);
                if (dato.cantidad == 0) {
                    return await consulta.one(sqlCrear, paramentros);
                } else {
                    return { id_cliente: 0 };
                }
            })
            .then((respuesta) => {
                //Aca va si todo esta bien
                if (respuesta.id_cliente != 0) {
                    res.status(200).json({ respuesta: 'Cliente creado', nuevoCodigo: respuesta.id_cliente });
                } else {
                    res.status(402).json({ respuesta: 'Error, Cliente ya esta creado con ese nuemero de identificacion', nuevoCodigo: respuesta.id_cliente });
                }
            })
            .catch((miError) => {
                console.log('Error, consulta no se realizo con exito', miError);
                res.status(400).json({ respuestas: 'Error en la consulta' });

            });
    }
}
export default ClienteDaoCrear;