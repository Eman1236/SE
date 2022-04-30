'use strict'
const {sequelize,Sequelize} = require("../../config/db")
const {DataTypes} = Sequelize;
const CorrectOption = sequelize.define("correctOption", {
        answer_option: {
            type: DataTypes.STRING,
            allowNull: false
        }
        
    }, {
        tableName: 'correctOption',
        //paranoid: true
    }
);

module.exports = CorrectOption;