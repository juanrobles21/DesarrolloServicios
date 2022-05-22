import { Response } from "express";
import pool from '../../configuracion/conexion/conexionBD';

class AutoresLibroDaoActualizar {
    public static async actualizarAutoresLibro(sqlConfirmarAutor: string, sqlConfirmarLibro: string, sqlActualizar: string, paramentros: any, res: Response): Promise<any> {
        await pool.task(async consulta => {
            //Aca vamos hacer las consultas
            const autor = await consulta.one(sqlConfirmarAutor, paramentros);
            const libro = await consulta.one(sqlConfirmarLibro, paramentros);
            if (autor.cantidad == 1 && libro.cantidad == 1) {
                return await consulta.one(sqlActualizar, paramentros);
            } else {
                return { id_autorLibro: 0 };
            }
        })
            .then((respuesta) => {
                if (respuesta.id_autorLibro != 0) {
                    console.log(respuesta);
                    res.status(200).json({ respuesta: 'Autor libro actualizado', });
                } else {
                    console.log(respuesta);
                    res.status(402).json({ respuesta: 'Error, no es posible actualizar el Autor libro. los datos de autor o de libro no son correctos' });
                }
            })
            .catch((miError) => {
                console.log(miError);
                res.status(400).json({ respuestas: 'Error en actualizar Autor Libro' });

            });
    }

}
export default AutoresLibroDaoActualizar;