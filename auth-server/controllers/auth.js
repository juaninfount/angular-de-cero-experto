//const { response } = require('express');
//const { validationResult } = require('express-validator');
const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt');
//const { validarJWT } = require('../middlewares/validar-jwt');
//const { validarCampos    } = require('../middlewares/validar-campos');

const crearUsuario = async (req, res) => {
    //bcrypt.
    /*
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        });
    }*/

    const { email, name, password } = req.body;

    // verificar el mail
    try {
        let usuario = await Usuario.findOne({ email });
        if (usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'El usuario ya existe con ese mail'
            });
        }

        const dbUser = new Usuario(req.body);
        // Hashing la contraseña
        const salt = bcrypt.genSaltSync();
        dbUser.password = bcrypt.hashSync(password, salt);

        // Generar el jwt
        const token = await generarJWT(dbUser.id, dbUser.name);

        await dbUser.save();

        // Generar respuesta exitosa
        return res.status(201).json({
            ok: true,
            uid: dbUser.id,
            name: name,
            token: token
        });

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            ok: false,
            msg: 'Error. Verificar con administrador'
        });
    }
};

const loginUsuario = async (req, res) => {
    /*
    const errors = validationResult(req);
    console.log(errors);
    if(!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        });
    } 
    */

    const { email, password } = req.body;
    console.log(email, password);

    try {
        const dbUser = await Usuario.findOne({email});
        if(!dbUser){
            return res.status(400).json({
                ok: false,
                msg: 'El correo no existe'
            });
        }

        const validPassword = bcrypt.compareSync(password, dbUser.password);
        if(!validPassword){
            return res.status(400).json({
                ok: false,
                msg: 'Password no válido'
            });
        }

        // Generar el jwt
        const token = await generarJWT(dbUser.id, dbUser.name);
        return res.status(201).json({
            ok: true,
            uid: dbUser.id,
            name: dbUser.name,
            token: token
        });

    }
    catch (err) {
        console.log(err);
        return res.status(500).json({
            ok: false,
            msg: 'Error. Verificar con administrador'
        });
    }
};

const revalidarToken = async (req, res) => {    
    const {uid, name} = req;
    const token = await generarJWT(uid, name);

    return res.json({
        ok: true,
        uid: uid,
        name: name,
        token: token
    });
};

module.exports = { crearUsuario, loginUsuario, revalidarToken };