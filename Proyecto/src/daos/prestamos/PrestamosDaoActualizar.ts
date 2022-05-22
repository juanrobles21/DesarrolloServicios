import { Response } from "express";
import pool from '../../configuracion/conexion/conexionBD';

class PrestamosDaoActualizar {
    public static async actualizarPrestamos(sqlConfirmar: string, sqlActualizar: string, paramentros: any, res: Response): Promise<any> {
        await pool.task(async consulta => {
            //Aca vamos hacer las consultas
            const dato = await consulta.one(sqlConfirmar, paramentros);
            if (dato.cantidad == 1) {
                return await consulta.one(sqlActualizar, paramentros);
            } else {
                return { id_prestamo: 0 };
            }
        })
            .then((respuesta) => {
                if (respuesta.id_prestamo != 0) {
                    console.log(respuesta);
                    res.status(200).json({ respuesta: 'Prestamo actualizado', });
                } else {
                    console.log(respuesta);
                    res.status(402).json({ respuesta: 'Error, no es posible actualizar el prestamo. Los datos del cliente no son correctos' });
                }
            })
            .catch((miError) => {
                console.log(miError);
                res.status(400).json({ respuestas: 'Error en actualizar prestamo' });

            });
    }

}
export default PrestamosDaoActualizar;