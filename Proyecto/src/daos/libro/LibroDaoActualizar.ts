import { Response } from "express";
import pool from '../../configuracion/conexion/conexionBD';

class LibroDaoActualizar {
    public static async actualizarLibro(sqlConfirmar: string, sqlConfirmarEditorial: string, sqlActualizar: string, paramentros: any, res: Response): Promise<any> {
        await pool.task(async consulta => {
            //Aca vamos hacer las consultas
            const dato = await consulta.one(sqlConfirmar, sqlConfirmarEditorial, paramentros);
            const editorial = await consulta.one(sqlConfirmarEditorial, paramentros);
            if (dato.cantidad == 0 && editorial.cantidad == 1) {
                return await consulta.one(sqlActualizar, paramentros);
            } else {
                return { id_libro: 0 };
            }
        })
            .then((respuesta) => {
                if (respuesta.id_libro != 0) {
                    console.log(respuesta);
                    res.status(200).json({ respuesta: 'Libro actualizado', });
                } else {
                    console.log(respuesta);
                    res.status(402).json({ respuesta: 'Error, no es posible actualizar el Libro. El nombre de la Libro ya existe o los datos ingresados de la editorial no son validos' });
                }
            })
            .catch((miError) => {
                console.log(miError);
                res.status(400).json({ respuestas: 'Error en actualizar Libro' });

            });
    }

}
export default LibroDaoActualizar;