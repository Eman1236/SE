'use strict'
const {sequelize,Sequelize} = require("../../config/db")
const {DataTypes} = Sequelize;
const option = sequelize.define("option", {
        option: {
            type: DataTypes.STRING,
            allowNull: false
        }
        
    }, {
        tableName: 'option',
        //paranoid: true
    }
);

module.exports = option;