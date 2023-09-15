import dotenv from 'dotenv';
import App from './app';
import RoutesController from './routes/routes.controller';

dotenv.config();

const PORT = process.env.PORT || 8080;

const app = new App(
  [
    new RoutesController(),
  ],
  PORT
);
module.exports = app.listen();
