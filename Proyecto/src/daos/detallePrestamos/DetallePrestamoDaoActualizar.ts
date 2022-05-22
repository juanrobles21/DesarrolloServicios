import { Response } from "express";
import pool from '../../configuracion/conexion/conexionBD';

class DetallePrestamosDaoActualizar {
    public static async actualizarDetallePrestamos(sqlConfirmarPrestamo: string, sqlConfirmarLibro: string, sqlActualizar: string, paramentros: any, res: Response): Promise<any> {
        await pool.task(async consulta => {
            //Aca vamos hacer las consultas
            const prestamo = await consulta.one(sqlConfirmarPrestamo, paramentros);
            const libro = await consulta.one(sqlConfirmarLibro, paramentros);
            if (prestamo.cantidad == 1 && libro.cantidad == 1) {
                return await consulta.one(sqlActualizar, paramentros);
            } else {
                return { id_detalleprestamo: 0 };
            }
        })
            .then((respuesta) => {
                if (respuesta.id_detalleprestamo != 0) {
                    console.log(respuesta);
                    res.status(200).json({ respuesta: 'Detalle Prestamo actualizado', });
                } else {
                    console.log(respuesta);
                    res.status(402).json({ respuesta: 'Error, no es posible actualizar el Detalle prestamo. los datos de prestamo o de libro no son correctos' });
                }
            })
            .catch((miError) => {
                console.log(miError);
                res.status(400).json({ respuestas: 'Error en actualizar Detalle Prestamo' });

            });
    }

}
export default DetallePrestamosDaoActualizar;