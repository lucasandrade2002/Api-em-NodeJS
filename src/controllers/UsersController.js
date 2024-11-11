import UsersModel from '../models/Users';


class UsersController{
    //Retorna todos os usuários
    async index(req, res){
        try{
            const alunosCadastrados = await UsersModel.findAll();
            return res.status(200).json(alunosCadastrados);
        }
        catch(err){
            return res.status(400).json({errors: err.errors[0].message});
        }
    }

    //Retorna um usuário pelo Id
    async showById(req, res){
        try{

            if (req.params.id){
                const user = await UsersModel.findByPk(req.params.id);
                return res.status(200).json(user);
            }
        }
        catch(err){
            return res.status(400).json({errors: err.errors[0].message});
        }
    }

    //Cadastra um novo usuário
    async store(req, res){
        let novoUser;
        console.log(req.body);
        try{
            novoUser = await UsersModel.create(req.body);
        }
        catch(err){
            res.status(400).json({errors: err.errors[0].message});
        }
        return res.status(201).json(novoUser);
    }

    //Atualiza um usuário existente na base
    async update(req, res){
        try{
            if (req.params.id){
                const user = await UsersModel.findByPk(req.params.id);
                const userEdited = await user.update(req.body);

                return res.status(200).json(userEdited);
            }
        }
        catch(err){
            console.log(err);
            return res.status(400).json({errors: err.errors[0].message});
        }
    }

    //Deleta um usuário existente na base
    async delete(req, res){
        try{
            if (req.params.id){
                const user = await UsersModel.findByPk(req.params.id);
                await user.destroy();
                return res.status(200).json(user);
            }
        }
        catch(err){
            return res.status(400).json({errors: err.errors[0].message});
        }
    }
}

export default new UsersController();
