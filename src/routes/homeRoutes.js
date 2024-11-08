import { Router } from 'express';
import homeController from '../controllers/HomeController';

const routes = Router();

// Routes
routes.get('/', homeController.index);

export default routes;
