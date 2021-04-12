const mongoose = require('mongoose')
const quizzesSchema = require('./quizzes-schema')
const quizzesModel = mongoose.model(
    'QuizModel',
    quizzesSchema
)
module.exports = quizzesModel