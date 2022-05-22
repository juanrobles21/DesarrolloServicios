import { Response } from "express";
import pool from '../../configuracion/conexion/conexionBD';

class PrestamosDaoCrear {
    public static async crearPrestamos(sqlConfirmar: string, sqlCrear: string, paramentros: any, res: Response): Promise<any> {
        await pool
            .task(async consulta => {
                //Aca vamos hacer las consultas
                const dato = await consulta.one(sqlConfirmar, paramentros);
                if (dato.cantidad == 1) {
                    return await consulta.one(sqlCrear, paramentros);
                } else {
                    return { id_prestamo: 0 };
                }
            })
            .then((respuesta) => {
                //Aca va si todo esta bien
                if (respuesta.id_prestamo != 0) {
                    res.status(200).json({ respuesta: 'Prestamos generado', nuevoCodigo: respuesta.id_prestamo });
                } else {
                    res.status(402).json({ respuesta: 'Error, No se puede asociar un Cliente al prestamo', nuevoCodigo: respuesta.id_prestamo });
                }
            })
            .catch((miError) => {
                console.log('Error, consulta no se realizo con exito', miError);
                res.status(400).json({ respuestas: 'Error en la consulta' });

            });
    }
}
export default PrestamosDaoCrear;