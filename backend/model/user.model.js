'use strict'
const {sequelize,Sequelize} = require("../config/db")
const {DataTypes} = Sequelize;
const user = sequelize.define("user", {
        first_name: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        last_name: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        dob: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull : false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        role: {
            type: DataTypes.ENUM('client','user'),
            allowNull: false
        }
    }, {
        tableName: 'user',
        //paranoid: true
    }
);

module.exports = user;