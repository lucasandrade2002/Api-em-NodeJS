import { Router } from 'express';
import usersController from '../controllers/UsersController';

const routes = Router();

// Routes
routes.get('/users', usersController.index);
routes.get('/users/:id?', usersController.showById);

routes.post('/users', usersController.store);
routes.put('/users/:id?', usersController.update);
routes.delete('/users/:id?', usersController.delete);

export default routes;

/**
 * index/show - Listar usuários (GET)
 * create/store - Registrar usuários (POST)
 * update - Atualizar usuários (PUT/PATCH)
 * delete - Deletar usuários (delete)
 */
