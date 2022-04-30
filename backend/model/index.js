const User = require("./user.model")
const Test = require("./tests/test.model")
const Question = require("./tests/question.model")
const Option = require("./tests/option.model")
const question_Images = require("./tests/question_Images.model")
const CorrectOption = require("./tests/correctOption.model")
const {sequelize,Sequelize} = require("../config/db")
const Model = {
    User,
    Test,
    Question,
    Option,
    CorrectOption,
    question_Images
}

const users = [
    {
        first_name: "Eman",
        last_name: "Hassan",
        email: "manihassan2001@gmail.com",
        dob: 10/11/2001,
        password: "eman123",
        role: "user"
    }
]

// sequelize.sync({ force: false }).then(() => {
//       User.bulkCreate(users).then(() => {
//           console.log('users created');
//       }).catch((err) => {
//           console.log('failed to create users');
//           console.log(err);
//       });
// });

Test.hasMany(Question,{
    foreignKey: {
        name: 'testId',
        allowedNull: false
    }
});
Question.belongsTo(Test);

Question.hasMany(Option,{
    foreignKey: {
        name: 'questionId',
        allowedNull: false
    }
});
Option.belongsTo(Question);

Question.hasMany(question_Images,{
    foreignKey: {
        name: 'questionId',
        allowedNull: false
    }
});
question_Images.belongsTo(Question);

Question.hasOne(CorrectOption,{
    foreignKey: {
        name: 'questionId',
        allowedNull: false,
        // unique: true
    }
});
CorrectOption.belongsTo(Question);

module.exports = Model;