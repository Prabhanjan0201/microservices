const bcrypt = require('bcrypt')
const lodash = require ('lodash');
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')

const {Register, validateRegister } = require('./register-model');

router.post ('/',async (req,res)=>{
    const result = validateRegister(req.body);
    if (result.error){
        res.status(400).send(result.error.details[0].message)
    }
    let register = await Register.findOne({email:req.body.email});
    if (register) return res.status(400).send('Sorry!! The email already exists') 

    register = new Register(lodash.pick(req.body,["name","email","password","phone"]));
        
    const salt = await bcrypt.genSalt(10);
    register.password = await bcrypt.hash(register.password,salt);
    register = await register.save();

    const token = jwt.sign({_id: register._id},'secretWeapon')

    res.header('auth-token',token).send(lodash.pick(register,["name","email","phone"]))
});

 module.exports = router;