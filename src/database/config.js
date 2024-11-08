const dotenv = require('dotenv');

try{
    dotenv.config();
}catch(err){
    console.error(err);
}

module.exports = {
    dialect: 'mysql',
    host: process.env.HOST,
    port: process.env.PORT,
    username: 'admin',
    password: 'adminpasswd',
    database: process.env.DATABASE,
    define: {
     timestamps: true, //registra alterações em tabelas
     underscored: true, //mapeia os campos de camelCase para snake_case
     underscoreAll: true,
     createdAt: 'created_at', // Campos que serão inseridos/atualizados automáticamente sem especificar no model
     updatedAt: 'updated_at', // Campos que serão inseridos/atualizados automáticamente sem especificar no model
    },
    dialectOptions: {
     timezone: 'America/Sao_Paulo'
    },
    timezone: 'America/Sao_Paulo'
}
