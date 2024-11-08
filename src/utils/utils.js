import { Sequelize } from "sequelize";
import databaseSettings from "../database/config";
import AlunoModel from "../models/Aluno";

const startSequelizeConnection = function(){
    const models = [AlunoModel];
    models.forEach(model => model.init(new Sequelize(databaseSettings)))
}

export {
    startSequelizeConnection
};
