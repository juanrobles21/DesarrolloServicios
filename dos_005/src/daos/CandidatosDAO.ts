import { Response } from "express";
import pool from '../configuracion/conexion/conexionBD';

class CandidatosDAO {
    public static async obtenerCandidatos(sqlConsulta: string, parametros: any, res: Response): Promise<any> {
        pool.result(sqlConsulta, parametros)
            .then((resultado) => {
                res.status(200).json(resultado.rows);
            })
            .catch((miError) => {
                console.log('Error manp', miError);
                res.status(400).json({ respuesta: 'Ayyyy, no sirvio, mano ' });
            });
    }
    public static async crearCandidatos(sqlConfirmar: string, sqlCrear: string, paramentros: any, res: Response): Promise<any> {
        await pool
            .task(async consulta => {
                const dato = await consulta.one(sqlConfirmar, paramentros);
                if (dato.cantidad != 0) {
                    return await consulta.one(sqlCrear, paramentros);
                } else {
                    return { id_candidato: 0 };
                }
            })
            .then((respuesta) => {
                if (respuesta.id_candidato != 0) {
                    res.status(200).json({ respuesta: 'Candidato Creado', nuevoCodigo: respuesta.nombre_partido });

                } else {
                    res.status(402).json({ respuesta: 'Error, el ID del partido no esta creado', nuevoCodigo: respuesta.nombre_partido });
                }
            })
            .catch((miError) => {
                console.log('Error, consulta no se realizo con exito', miError);
                res.status(400).json({ respuesta: 'Error en la consulta' });
            });
    }
}
export default CandidatosDAO;
