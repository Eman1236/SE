const Model = require("../model/index");
const Joi = require("joi");
const dotenv = require("dotenv")

dotenv.config()

const addSchema = Joi.object({
    text: Joi.string()
        .required(),
    testId: Joi.number().required()
})

exports.AddTest = async(req,res) => {
    try {
        if (!req.body) {
            res.status(400).send({
                message: "Content can not be empty!"
            });
            return;
        }

        const resp = await addSchema.validateAsync(req.body);
        const question = {
            name: resp.name,
            testId: resp.testId
        }
        if(question){
            const result = await Model.Test.create(question);
            if(result){
                res.send({ "Status":{Message: "Success"}});
            }
        }
    }
    catch (error) {
        res.send({"Error": error.message})
    }

}
