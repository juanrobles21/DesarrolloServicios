import { Response } from 'express';
import pool from '../configuracion/conexion/conexionBD';


class PartidosDAOS {
    public static async obtenerPartidos(sqlConsulta: string, paramentros: any, res: Response): Promise<any> {
        pool.result(sqlConsulta, paramentros)
            .then((resultado) => {
                res.status(200).json(resultado.rows);
            })
            .catch((miError) => {
                console.log('Error manp', miError);
                res.status(400).json({ respuesta: 'Ayyyy, no sirvio, mano ' });
            });
    }
    public static async crearPartidos(sqlConfirmar: string, sqlCrear: string, paramentros: any, res: Response): Promise<any> {
        await pool
            .task(async consulta => {
                //Aca vamos hacer las consultas
                const dato = await consulta.one(sqlConfirmar, paramentros);
                if (dato.cantidad == 0) {
                    return await consulta.one(sqlCrear, paramentros);
                } else {
                    return { id_partido: 0 };
                }
            })
            .then((respuesta) => {
                //Aca va si todo esta bien
                if (respuesta.id_partido != 0) {
                    res.status(200).json({ respuesta: 'Partido creado', nuevoCodigo: respuesta.id_partido });
                } else {
                    res.status(402).json({ respuesta: 'Error, Partido ya Esta creado', nuevoCodigo: respuesta.id_partido });
                }
            })
            .catch((miError) => {
                console.log('Error, consulta no se realizo con exito', miError);
                res.status(400).json({ respuestas: 'Error en la consulta' });

            });
    }
}
export default PartidosDAOS;