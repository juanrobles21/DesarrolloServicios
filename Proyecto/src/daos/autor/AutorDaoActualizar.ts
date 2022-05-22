import { Response } from "express";
import pool from '../../configuracion/conexion/conexionBD';

class AutorDaoActualizar {
    public static async actualizarAutor(sqlActualizar: string, paramentros: any, res: Response): Promise<any> {
        await pool.task(async consulta => {
            return await consulta.one(sqlActualizar, paramentros);

        })
            .then((respuesta) => {
                if (respuesta.id_autor != 0) {
                    console.log(respuesta);
                    res.status(200).json({ respuesta: 'Autor actualizado', });
                } else {
                    console.log(respuesta);
                    res.status(402).json({ respuesta: 'Error, no es posible actualizar la materia. El nombre de la materia ya existe' });
                }
            })
            .catch((miError) => {
                console.log(miError);
                res.status(400).json({ respuestas: 'Error en actualizar Autor' });

            });
    }

}
export default AutorDaoActualizar;