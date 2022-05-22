import { Response } from "express";
import pool from '../../configuracion/conexion/conexionBD';

class DetallePrestamosDaoCrear {
    public static async crearDetallePrestamos(sqlConfirmarPrestamo: string, sqlConfirmarLibro: string, sqlCrear: string, paramentros: any, res: Response): Promise<any> {
        await pool
            .task(async consulta => {
                //Aca vamos hacer las consultas
                const prestamo = await consulta.one(sqlConfirmarPrestamo, paramentros);
                const libro = await consulta.one(sqlConfirmarLibro, paramentros);
                if (prestamo.cantidad == 1 && libro.cantidad == 1) {
                    return await consulta.one(sqlCrear, paramentros);
                } else {
                    return { id_detalleprestamo: 0 };
                }
            })
            .then((respuesta) => {
                //Aca va si todo esta bien
                if (respuesta.id_detalleprestamo != 0) {
                    res.status(200).json({ respuesta: 'Detalle prestamo creado', nuevoCodigo: respuesta.id_detalleprestamo });
                } else {
                    console.log(respuesta)
                    res.status(402).json({ respuesta: 'Error, los datos de prestamo o de libro no son correctos', nuevoCodigo: respuesta.id_detalleprestamo });
                }
            })
            .catch((miError) => {
                console.log('Error, consulta no se realizo con exito', miError);
                res.status(400).json({ respuestas: 'Error en la consulta' });

            });
    }
}
export default DetallePrestamosDaoCrear;