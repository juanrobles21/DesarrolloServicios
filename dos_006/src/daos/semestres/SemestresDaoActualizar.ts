import e, { Response } from "express";
import pool from "../../configuracion/conexion/conexionBD";

class SemestresDaoActualizar {
    public static async actualizarSemestre(sqlConfirmar: string, sqlActualizar: string, paramentros: any, res: Response): Promise<any> {
        await pool.task(async consulta => {
            //Aca vamos hacer las consultas
            const dato = await consulta.one(sqlConfirmar, paramentros);
            if (dato.cantidad == 0) {
                return await consulta.one(sqlActualizar, paramentros);
            } else {
                return { cod_semestre: 0 };
            }
        })
            .then((respuesta) => {
                if (respuesta.cod_semestre != 0) {
                    console.log(respuesta);
                    res.status(200).json({ respuesta: 'Semestre actualizado', });
                } else {
                    console.log(respuesta);
                    res.status(402).json({ respuesta: 'Error, no es posible actualizar el semestre. El nombre del semestre ya existe' });

                }
            })
            .catch((miError) => {
                console.log(miError);
                res.status(400).json({ respuestas: 'Error en actualizar Semestre' });

            });
    }

}
export default SemestresDaoActualizar;