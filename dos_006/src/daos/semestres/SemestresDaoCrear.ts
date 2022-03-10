import { Response } from "express";
import pool from "../../configuracion/conexion/conexionBD";

class SemestresDaoCrear {
    public static async crearSemestres(sqlConfirmar: string, sqlCrear: string, paramentros: any, res: Response): Promise<any> {
        await pool
            .task(async consulta => {
                //Aca vamos hacer las consultas
                const dato = await consulta.one(sqlConfirmar, paramentros);
                if (dato.cantidad == 0) {
                    return await consulta.one(sqlCrear, paramentros);
                } else {
                    return { cod_semestre: 0 };
                }
            })
            .then((respuesta) => {
                //Aca va si todo esta bien
                if (respuesta.cod_semestre != 0) {
                    res.status(200).json({ respuesta: 'Semestre creado', nuevoCodigo: respuesta.cod_semestre });
                } else {
                    res.status(402).json({ respuesta: 'Error, Semestre ya Esta creado', nuevoCodigo: respuesta.cod_semestre });
                }
            })
            .catch((miError) => {
                console.log('Error, consulta no se realizo con exito', miError);
                res.status(400).json({ respuestas: 'Error en la consulta' });

            });
    }
}
export default SemestresDaoCrear;