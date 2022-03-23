import jwt from "jsonwebtoken";
import { Request, Response, NextFunction, json } from "express";

class Validacion {
    public delToken(req: Request, res: Response, next: NextFunction): any {
        if (!req.headers.authorization) {
            res.status(401).json({ msg: 'Cabecerita totiada' });
        } else {
            try {
                const miToken = req.headers.authorization.split(' ')[1] as string;
                const informacion = jwt.verify(miToken, 'uyyyyLaclave');
                req.body.datosUtiles = informacion;
                next();
            } catch (error) {
                res.status(401).json({ msg: 'Lo pille entrando a lo pirata' });
            }


        }

    }
}
const validacion = new Validacion();
export default validacion;