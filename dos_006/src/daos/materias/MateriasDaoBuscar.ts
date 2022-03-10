import { Response } from "express";
import pool from '../../configuracion/conexion/conexionBD';

class MateriasDaoBuscar {
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
export default MateriasDaoBuscar;