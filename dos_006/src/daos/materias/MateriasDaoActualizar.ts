import { Response } from "express";
import pool from '../../configuracion/conexion/conexionBD';

class MateriasDaoActualizar {
    public static async actualizarMateria(sqlActualizar: string, paramentros: any, res: Response): Promise<any> {
        await pool.task(async consulta => {
            //Aca vamos hacer las consultas
            const dato = await consulta.result(sqlActualizar, paramentros);
        })
            .then((respuesta) => {
                console.log(respuesta);
                res.status(200).json({ respuesta: 'Materia actualizada', });
            })
            .catch((miError) => {
                console.log(miError);
                res.status(400).json({ respuestas: 'Error en actualizar Materia' });

            });
    }

}
export default MateriasDaoActualizar;