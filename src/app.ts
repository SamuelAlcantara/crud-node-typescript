import cors from "cors";
import express, { Application } from "express";
import dotenv from 'dotenv';
import './data-source'

export default class App {
  public app: Application;
  public port: number;

  constructor(controllers: any[], port: any){
    this.app = express();
    this.app.use(cors());
    dotenv.config();
    this.port = port;
    this.initializeControllers(controllers);
  }

  public listen(){
    return this.app.listen(this.port, () => {
      console.log(`Server running in port ${this.port}`);
    });
  }

  private initializeControllers(controllers: any[]){
    controllers.forEach(controller => {
      this.app.use('/', controller.router);
    });
  }
}
