const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const joi = require('joi');
const passwordComplexity = require('joi-password-complexity');
const Joi = require("joi");

const userSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
});

userSchema.methods.generateAuthToken = function (){
    const token = jwt.sign({_id:this._id},process.env.JWTPRIVATEKEY,{expiresIn: "365d"})
    return token
};

const User = mongoose.model("user", userSchema);

const validate = (data) =>{
    const schema = Joi.object({
        firstName:Joi.string().required().label("Nom"),
        lastName:Joi.string().required().label("Prénom"),
        email:Joi.string().required().label("Email"),
        password:Joi.string().required().label("Mot de passe"),
    });
    return schema.validate(data)
};

module.exports = {User, validate};