import { Response } from "express";
import pool from '../../configuracion/conexion/conexionBD';

class AutorDaoCrear {
    public static async crearAutor(sqlCrear: string, paramentros: any, res: Response): Promise<any> {
        await pool
            .task(async consulta => {
                //Aca vamos hacer las consultas
                return await consulta.one(sqlCrear, paramentros);
            })
            .then((respuesta) => {
                //Aca va si todo esta bien
                if (respuesta.id_autor != 0) {
                    res.status(200).json({ respuesta: 'Autor creado', nuevoCodigo: respuesta.id_autor });
                } else {
                    res.status(402).json({ respuesta: 'Error, Autor ya esta creado', nuevoCodigo: respuesta.id_autor });
                }
            })
            .catch((miError) => {
                console.log('Error, consulta no se realizo con exito', miError);
                res.status(400).json({ respuestas: 'Error en la consulta' });

            });
    }
}
export default AutorDaoCrear;