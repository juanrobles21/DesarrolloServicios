import { Response } from "express";
import pool from "../../configuracion/conexion/conexionBD";

class SemestresDaoMostrar {
    public static async obtenerSemestres(sqlConsulta: string, parametros: any, res: Response): Promise<any> {
        pool.result(sqlConsulta, parametros)
            .then((resultado) => {
                res.status(200).json(resultado.rows);
            })
            .catch((miError) => {
                console.log('Error manp', miError);
                res.status(400).json({ respuesta: 'Ayyyy, no sirvio, mano ' });
            });
    }
}
export default SemestresDaoMostrar;