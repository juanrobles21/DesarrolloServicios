import { Response } from "express";
import AccesosDaoRespuesta from "./AccesosDaoRespuesta";
import pool from "../../configuracion/conexion/conexionBD";

class AccesosDaoValidar {
    protected static async validarAcceso(sqlConsulta: string, parametros: any, res: Response): Promise<any> {
        await pool.oneOrNone(sqlConsulta, parametros)
            .then((dato) => {
                return AccesosDaoRespuesta.procesar(dato, res);
                //console.log(respuesta);
                //return res.status(200).json({ respuesta: 'Acceso valido', codigo: respuesta });
            })
            .catch((miError) => {
                console.log(miError);
                return res.status(400).json({ respuestas: 'Error datos no encontrados' });
            });
    }
}
export default AccesosDaoValidar;