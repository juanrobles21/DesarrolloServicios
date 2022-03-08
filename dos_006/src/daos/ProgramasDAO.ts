import { Response } from "express";
import pool from '../configuracion/conexion/conexionBD';

class ProgrmasDAO {
    public static async obtenerProgramas(sqlConsulta: string, parametros: any, res: Response): Promise<any> {
        pool.result(sqlConsulta, parametros)
            .then((resultado) => {
                res.status(200).json(resultado.rows);
            })
            .catch((miError) => {
                console.log('Error manp', miError);
                res.status(400).json({ respuesta: 'Ayyyy, no sirvio, mano ' });
            });
    }
    public static async crearProgramas(sqlConfirmar: string, sqlCrear: string, paramentros: any, res: Response): Promise<any> {
        await pool
            .task(async consulta => {
                //Aca vamos hacer las consultas
                const dato = await consulta.one(sqlConfirmar, paramentros);
                if (dato.cantidad == 0) {
                    return await consulta.one(sqlCrear, paramentros);
                } else {
                    return { cod_programa: 0 };
                }
            })
            .then((respuesta) => {
                //Aca va si todo esta bien
                if (respuesta.id_candidato != 0) {
                    res.status(200).json({ respuesta: 'Programa creado', nuevoCodigo: respuesta.cod_programa });
                } else {
                    res.status(402).json({ respuesta: 'Error, Programa ya Esta creado', nuevoCodigo: respuesta.cod_programa });
                }
            })
            .catch((miError) => {
                console.log('Error, consulta no se realizo con exito', miError);
                res.status(400).json({ respuestas: 'Error en la consulta' });

            });
    }
    protected static async encontrarPorID(sqlConsulta: string, parametros: any, res: Response): Promise<any> {
        await pool.one(sqlConsulta, parametros)
            .then((respuesta) => {
                console.log(respuesta);
                return res.status(200).json({ respuesta: 'Programa encontrado', nuevoCodigo: respuesta });
            })
            .catch((miError) => {
                console.log(miError);
                return res.status(400).json({ respuestas: 'Error buscando' });
            });
    }
    protected static async eliminarPorID(sqlConsulta: string, parametros: any, res: Response): Promise<any> {
        await pool.result(sqlConsulta, parametros)
            .then((respuesta) => {
                console.log(respuesta);
                return res.status(200).json({ respuesta: respuesta.rowCount });
            })
            .catch((miError) => {
                console.log(miError);
                return res.status(400).json({ respuestas: 'Error borrando programa' });
            });
    }
}
export default ProgrmasDAO;