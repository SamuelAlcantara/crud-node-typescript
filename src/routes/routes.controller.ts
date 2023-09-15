import express, {Response} from 'express';

export default class RoutesController{
  public router = express.Router();

  constructor(){
    this.initializeRoutes();
  };

  public initializeRoutes(){
    this.router.get(`/health`, (_, res: Response) => res.json({status: "SERVER UP"}));
  }
}
