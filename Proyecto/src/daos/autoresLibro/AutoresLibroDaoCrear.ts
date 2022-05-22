import { Response } from "express";
import pool from '../../configuracion/conexion/conexionBD';

class AutoresLibroDaoCrear {
    public static async crearAutoresLibro(sqlConfirmarAutor: string, sqlConfirmarLibro: string, sqlCrear: string, paramentros: any, res: Response): Promise<any> {
        await pool
            .task(async consulta => {
                //Aca vamos hacer las consultas
                const autor = await consulta.one(sqlConfirmarAutor, paramentros);
                const libro = await consulta.one(sqlConfirmarLibro, paramentros);
                if (autor.cantidad == 1 && libro.cantidad == 1) {
                    return await consulta.one(sqlCrear, paramentros);
                } else {
                    return { id_autorlibro: 0 };
                }
            })
            .then((respuesta) => {
                //Aca va si todo esta bien
                if (respuesta.id_autorlibro != 0) {
                    res.status(200).json({ respuesta: 'Autor libro creado', nuevoCodigo: respuesta.id_autorlibro });
                } else {
                    console.log(respuesta)
                    res.status(402).json({ respuesta: 'Error, los datos de autor o de libro no son correctos', nuevoCodigo: respuesta.id_autorlibro });
                }
            })
            .catch((miError) => {
                console.log('Error, consulta no se realizo con exito', miError);
                res.status(400).json({ respuestas: 'Error en la consulta' });

            });
    }
}
export default AutoresLibroDaoCrear;