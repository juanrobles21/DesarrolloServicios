import { Response } from "express";
import pool from '../configuracion/conexion/conexionBD';

class MateriaDAO {
    public static async obtenerMaterias(sqlConsulta: string, parametros: any, res: Response): Promise<any> {
        pool.result(sqlConsulta, parametros)
            .then((resultado) => {
                res.status(200).json(resultado.rows);
            })
            .catch((miError) => {
                console.log('Error manp', miError);
                res.status(400).json({ respuesta: 'Ayyyy, no sirvio, mano ' });
            });
    }
    protected static async encontrarPorID(sqlConsulta: string, parametros: any, res: Response): Promise<any> {
        await pool.one(sqlConsulta, parametros)
            .then((respuesta) => {
                console.log(respuesta);
                return res.status(200).json({ respuesta: 'Materia encontrado', nuevoCodigo: respuesta });
            })
            .catch((miError) => {
                console.log(miError);
                return res.status(400).json({ respuestas: 'Error buscando' });
            });
    }
}
export default MateriaDAO;