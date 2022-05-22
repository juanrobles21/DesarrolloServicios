import { Response } from "express";
import pool from '../../configuracion/conexion/conexionBD';

class EditorialDaoActualizar {
    public static async actualizarEditorial(sqlConfirmar: string, sqlActualizar: string, paramentros: any, res: Response): Promise<any> {
        await pool.task(async consulta => {
            //Aca vamos hacer las consultas
            const dato = await consulta.one(sqlConfirmar, paramentros);
            if (dato.cantidad == 0) {
                return await consulta.one(sqlActualizar, paramentros);
            } else {
                return { id_editorial: 0 };
            }
        })
            .then((respuesta) => {
                if (respuesta.id_editorial != 0) {
                    console.log(respuesta);
                    res.status(200).json({ respuesta: 'Editorial actualizado', });
                } else {
                    console.log(respuesta);
                    res.status(402).json({ respuesta: 'Error, no es posible actualizar el Editorial. El nombre de la editorial ya existe' });
                }
            })
            .catch((miError) => {
                console.log(miError);
                res.status(400).json({ respuestas: 'Error en actualizar Editorial' });

            });
    }

}
export default EditorialDaoActualizar;