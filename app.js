import express from 'express';
import homeRoutes from './src/routes/homeRoutes';
import usersRoutes from './src/routes/usersRoute';

class App{

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    config(){
        //config to express application accept body requests
        this.app.use(express.urlencoded({extended: true}));
        this.app.use(express.json())
    }

    routes(){
        this.app.use(homeRoutes);
        this.app.use(usersRoutes);
    }
}

export default new App().app;
