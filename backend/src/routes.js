import { Router } from "express";
import SessionController from "./app/controllers/SessionController";
import UserController from "./app/controllers/UserController";
import authMiddleware from "./app/middleware/auth"

const routes = new Router();

// Cadastro
routes.post("/users", UserController.store);

// Login
routes.post("/sessions", SessionController.store);

routes.use(authMiddleware) // Será chamado por todas as rotas abaixo

routes.get('/home')

export default routes;
