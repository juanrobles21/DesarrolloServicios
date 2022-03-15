import { Response } from "express";
import jwt from 'jsonwebtoken';

class AccesosDaoRespuesta {
    public static async procesar(registro: any, res: Response): Promise<any> {
        if (registro != null) {
            //vamos a crear el toquensito
            const miTockencito = jwt.sign({ codigito: registro.codAcceso,nombre:registro.nombreRol, dosDev: 'eso somos' },'uyyyyLaclave',{expiresIn:'8h'});
            return res.status(200).json({ token: miTockencito });
        } else {
            return res.status(401).json({ mensaje: "Usuario incorrecto" });
        }

    }

}
export default AccesosDaoRespuesta;