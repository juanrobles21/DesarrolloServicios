import { Response, Request } from "express";
class PruebaDaos {

    protected static async obtenerInfo1(req: Request, res: Response): Promise<any> {
        const miJason1 = { estudiantes: 'Juan Robles', materia: 'Desarrollo Servicios', horarios: '4:00' };


        Promise.resolve(miJason1)
            .then((resultado: any) => {
                console.log('OK', resultado);
                res.status(200).json(miJason1);
            })
            .catch((err: any) => {
                console.log('Error', err);
                res.status(400).json({ respuesta: 'se revento esto' });
            });
    }
    protected static async obtenerInfo2(req: Request, res: Response): Promise<any> {
        const miJason2 = { estudiantes: 'Juan Robles', materia: 'Redes', horarios: '2:00' };

        Promise.resolve(miJason2)
            .then((resultado: any) => {
                console.log('OK', resultado);
                res.status(200).json(miJason2);
            })
            .catch((err: any) => {
                console.log('Error', err);
                res.status(400).json({ respuesta: 'se revento esto' });
            });
    }
    protected static async obtenerInfo3(req: Request, res: Response): Promise<any> {
        const miJason3 = { estudiantes: 'Juan Robles', materia: 'Optimizacion',horarios:'11:00' };

    

        Promise.resolve(miJason3)
            .then((resultado: any) => {
                console.log('OK', resultado);
                res.status(200).json(miJason3);
            })
            .catch((err: any) => {
                console.log('Error', err);
                res.status(400).json({ respuesta: 'se revento esto' });
            }); 
    }
}
export default PruebaDaos;