import express, { response } from 'express'
import ClassesController from './controllers/ClassesController';
import Connectionscontroller from './controllers/ConnectionsController';

const routes = express.Router();
const classesController = new ClassesController();
const connectionscontroller = new Connectionscontroller();

routes.get('/classes', classesController.index);
routes.post('/classes', classesController.create);
 
routes.get('/connections', connectionscontroller.index);
routes.post('/connections', connectionscontroller.create);

export default routes;