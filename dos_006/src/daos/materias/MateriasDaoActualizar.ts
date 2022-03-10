import { Response } from "express";
import pool from '../../configuracion/conexion/conexionBD';

class MateriasDaoActualizar {
    public static async actualizarMateria(sqlConfirmar: string, sqlActualizar: string, paramentros: any, res: Response): Promise<any> {
        await pool.task(async consulta => {
            //Aca vamos hacer las consultas
            const dato = await consulta.one(sqlConfirmar, paramentros);
            if (dato.cantidad == 0) {
                return await consulta.one(sqlActualizar, paramentros);
            } else {
                return { cod_materia: 0 };
            }
        })
            .then((respuesta) => {
                if(respuesta.cod_materia !=0){
                console.log(respuesta);
                res.status(200).json({ respuesta: 'Materia actualizada', });
            }else{
                console.log(respuesta);
                res.status(402).json({respuesta:'Error, no es posible actualizar la materia. El nombre de la materia ya existe'});
            }
            })
            .catch((miError) => {
                console.log(miError);
                res.status(400).json({ respuestas: 'Error en actualizar Materia' });

            });
    }

}
export default MateriasDaoActualizar;