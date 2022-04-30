const Model = require("../model/index");
const Joi = require("joi");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const salt = bcrypt.genSaltSync(10);
const {Op} = require("sequelize");
const dotenv = require("dotenv")

dotenv.config()

const loginSchema = Joi.object({
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),

    password: Joi.string()
        .required()
})

// access config var
function generate_accessTokens(username) {
      console.log("username",username);
    const ts = process.env.TOKEN_SECRET;
    return jwt.sign({
        ...username
    }, ts, { expiresIn: '1800s' });
}

exports.login = async (req, res) => {
    try {
        console.log("In Login")
        var loginResp = await loginSchema.validateAsync(req.body);
        const mail = loginResp.email;
        const pass = loginResp.password;
        console.log("Password:",mail);
        const loginData = await Model.User.findOne({ where: { email: mail } });
        // console.log("LOGIN DATA:",loginData);
        if (loginData) {
            if (bcrypt.compareSync(pass, loginData.password)) {
                const token = generate_accessTokens(loginData);
                console.log({"Token:":token});
                res.send({ "Status":{Message: "Success", Token: token, first_name:loginData.dataValues.first_name,last_name:loginData.dataValues.last_name}});
            }
            else {
                console.log("In Else");
                res.send({ message: "Incorrect Information" })
            }
        }
        else{
            res.send({ message: "No Login Infrmation Found" });
        }

    }
    catch (error) {
        console.log(error.stack);
        res.send({ message: error.message });
    }

};


const schema = Joi.object({
    first_name: Joi.string()
        .max(30)
        .min(1)
        .required(),
    last_name: Joi.string()
        .max(30)
        .min(1)
        .required(),

    password: Joi.string()
        .min(1)
        .required(),

    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
    
    dob:Joi.date().iso().required()

}).keys({
    role: Joi.string().valid('client', 'user'),
});

exports.AddUser = async(req,res) => {
    try {
        if (!req.body) {
            res.status(400).send({
                message: "Content can not be empty!"
            });
            return;
        }

        const resp = await schema.validateAsync(req.body);
        const User = {
            first_name: resp.first_name,
            last_name: resp.last_name,
            email: resp.email,
            password: bcrypt.hashSync(resp.password,salt),
            dob: resp.dob,
            role: resp.role
        }
        if(User){
            const result = await Model.User.create(User);
            if(result){
                const token = generate_accessTokens(User);
                res.send({ "Status":{Message: "Success", Token: token, first_name:loginData.dataValues.first_name,last_name:loginData.dataValues.last_name}});
            }
        }
    }
    catch (error) {
        res.send({"Error": error.message})
    }

}
