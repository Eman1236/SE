'use strict'
const {sequelize,Sequelize} = require("../../config/db")
const {DataTypes} = Sequelize;
const question_Images = sequelize.define("question_Images", {
        path: {
            type: DataTypes.STRING,
            allowNull: false
        }
        
    }, {
        tableName: 'question_Images',
        //paranoid: true
    }
);

module.exports = question_Images;