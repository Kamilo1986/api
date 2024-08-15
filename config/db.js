const {Sequelize} = require('sequelize');
require('dotenv').config();
const sequelize = new Sequelize( process.env.DATABASE_URL,{
    dialect : 'mysql' 
    dialectOptions: {
        connectTimeout:60000
    }
    
})  
    const connectDB = async () => {
        try {
            await sequelize.authenticate()
            console.log('Connection has been established successfully.');
        } catch (err) {
            console.error('Unable to connect to the database:', err);
        }
    }

    module.exports = {sequelize,connectDB}
    