import { Request, Response } from "express";
import AccesosDaoCrear from "../../daos/accesos/AccesosDaoValidar";
import { SQL_ACCESOS_VALIDAR } from "../../repositorios/accesos/accesos_validar_sql";


class AccesosControladorValidar extends AccesosDaoCrear {
    public validarAcceso(req: Request, res: Response): void {
        const correo = req.body.correo;
        const clave = req.body.clave;
        const parametro = [correo, clave];
        AccesosControladorValidar.validarAcceso(SQL_ACCESOS_VALIDAR.VALIDAR, parametro, res);
    }
}
const accesoControladorValidar = new AccesosControladorValidar();
export default accesoControladorValidar;