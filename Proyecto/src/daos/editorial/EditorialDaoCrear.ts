import { Response } from "express";
import pool from '../../configuracion/conexion/conexionBD';

class EditorialDaoCrear {
    public static async crearEditorial(sqlConfirmar: string, sqlCrear: string, paramentros: any, res: Response): Promise<any> {
        await pool
            .task(async consulta => {
                //Aca vamos hacer las consultas
                const dato = await consulta.one(sqlConfirmar, paramentros);
                if (dato.cantidad == 0) {
                    return await consulta.one(sqlCrear, paramentros);
                } else {
                    return { id_editorial: 0 };
                }
            })
            .then((respuesta) => {
                //Aca va si todo esta bien
                if (respuesta.id_editorial != 0) {
                    res.status(200).json({ respuesta: 'Editorial creada', nuevoCodigo: respuesta.id_editorial });
                } else {
                    res.status(402).json({ respuesta: 'Error, Editorial ya esta creada', nuevoCodigo: respuesta.id_editorial });
                }
            })
            .catch((miError) => {
                console.log('Error, consulta no se realizo con exito', miError);
                res.status(400).json({ respuestas: 'Error en la consulta' });

            });
    }
}
export default EditorialDaoCrear;