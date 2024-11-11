import alunoModel from "../models/Aluno";

class HomeController{

    async index(req, res){
        const alunosCadastrados = await alunoModel.findAll();
        res.status(200).json(alunosCadastrados);
    }
}

export default new HomeController();
