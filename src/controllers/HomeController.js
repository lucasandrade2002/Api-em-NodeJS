import alunoModel from "../models/Aluno";

class HomeController{

    async index(req, res){
        const novoAluno = await alunoModel.create({
            nome: 'Selma',
            sobrenome: 'Andrade Cavalcante',
            email: 'selmaljma@hotmail.com',
            idade: 44,
            peso: 59,
            altura: 1.57
        })

        res.json(novoAluno);
    }
}

export default new HomeController();
