'use strict'
const {sequelize,Sequelize} = require("../../config/db")
const {DataTypes} = Sequelize;
const test = sequelize.define("test", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
    }, {
        tableName: 'test',
        //paranoid: true
    }
);

module.exports = test;