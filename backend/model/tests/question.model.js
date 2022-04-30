'use strict'
const {sequelize,Sequelize} = require("../../config/db")
const {DataTypes} = Sequelize;
const question = sequelize.define("question", {
        text: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
    }, {
        tableName: 'question',
        //paranoid: true
    }
);

module.exports = question;