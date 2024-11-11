import { Sequelize, Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

export default class Users extends Model{
    static init(sequelize){
        super.init({
            nome: {
                type: Sequelize.STRING,
                defaultValue: "",
                validate: {
                    len: {
                        args: [3, 255],
                        msg: 'Field name must be between 3 and 255 characters'
                    }
                }
            },

            email: {
                type: Sequelize.STRING,
                defaultValue: "",
                validate: {
                    isEmail: {
                        msg: "Field email must be a valid email"
                    }
                }
            },

            password: {
                type: Sequelize.VIRTUAL,
                defaultValue: "",
                validate: {
                    len: {
                        args: [6, 50],
                        msg: 'Field password must be between 6 and 50 characters'
                    }
                }
            },

            password_hash: {
                type: Sequelize.STRING,
                defaultValue: ""
            }
        }, {
            sequelize
        })

        //Hook seria uma ação/evento/middleware antes de se concluir o objetivo
        this.addHook('beforeSave', async function(user){
            if (user.password){
                user.password_hash = await bcryptjs.hash(user.password, 8);
            }
        })

        return this;
    }
}
