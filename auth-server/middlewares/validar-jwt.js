const {response} = require('express');
const jwt    = require('jsonwebtoken');

const validarJWT = (req, res = response, next) => {
    const token = req.header('x-token');
    if(!token){
        return res.status(401).json({
            ok: false,
            msg: 'Token no válido'
        });
    }

    try{

    console.log(jwt);
    const {uid, name} = jwt.verify( token, process.env.SECRET_JWT_SEED );
    //console.log(uid, name);
        
    }catch(err){
        console.log(err);
        return res.status(401).json({
            ok: false,
            msg: 'Token no válido. Verificar con administrador'
        });
    }

    next();
};

module.exports = { validarJWT };