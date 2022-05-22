import { Response } from "express";
import pool from '../../configuracion/conexion/conexionBD';

class LibroDaoCrear {
    public static async crearLibro(sqlConfirmar: string, sqlConfirmarEditorial: string, sqlCrear: string, paramentros: any, res: Response): Promise<any> {
        await pool
            .task(async consulta => {
                //Aca vamos hacer las consultas
                const dato = await consulta.one(sqlConfirmar, paramentros);
                const editorial = await consulta.one(sqlConfirmarEditorial, paramentros);
                if (dato.cantidad == 0 && editorial.cantidad == 1) {
                    return await consulta.one(sqlCrear, paramentros);
                } else {
                    return { id_libro: 0 };
                }
            })
            .then((respuesta) => {
                //Aca va si todo esta bien
                if (respuesta.id_libro != 0) {
                    res.status(200).json({ respuesta: 'Libro creado', nuevoCodigo: respuesta.id_libro });
                } else {
                    console.log(respuesta)
                    res.status(402).json({ respuesta: 'Error, el titulo del libro ya existe o los datos de la editorial no son correctos', nuevoCodigo: respuesta.id_libro });
                }
            })
            .catch((miError) => {
                console.log('Error, consulta no se realizo con exito', miError);
                res.status(400).json({ respuestas: 'Error en la consulta' });

            });
    }
}
export default LibroDaoCrear;