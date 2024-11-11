import { Sequelize } from "sequelize";
import databaseSettings from "../database/config";
import AlunoModel from "../models/Aluno";
import UsersModel from "../models/Users";

const startSequelizeConnection = function(){

    let errors = 0;

    try{
        const models = [AlunoModel, UsersModel];
        models.forEach(model => model.init(new Sequelize(databaseSettings)))
    }catch(err){
        errors++;
    }

    return new Promise((resolve, reject) => {
        if (errors < 1) {
            return resolve(true);
        }

        return reject("Ocorreu algum erro durante a conexão com a base de dados!!");
    })
}

export {
    startSequelizeConnection
};
