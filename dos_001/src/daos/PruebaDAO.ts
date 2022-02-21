import { Response, Request } from 'express';
class PruebaDAO {


    protected static async obtenerInfo(req: Request, res: Response): Promise<any> {
        const miJson = { profesores: 'Harvey y andres', materia: 'DOS' };


        Promise.resolve(miJson)
        .then((resultado: any)=>{
            console.log('Uyyyyyyyyyyyy la consola!!!!', resultado);
            res.status(200).json(miJson);
        })
        .catch((err:any)=>{
            console.log('Uy mano, error', err);
            res.status(400).json({respuesta:'se revento esto'});
        });

    }
}
export default PruebaDAO;