const mongoose = require('mongoose');

const dbConnection = async() => {
    try 
    {
      await mongoose.connect( process.env.BD_CNN );
      console.log('Connected to mean-udemy');
    }
    catch(err){
        console.log(err);
        throw new Error('Error a la hora de inicializar DB');
    }
};

module.exports = { dbConnection };