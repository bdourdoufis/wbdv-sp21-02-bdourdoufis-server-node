const questionsModel = require('../models/questions/questions-model')

const findAllQuestions = () => questionsModel.find()
const findQuestionById = (qid) => questionsModel.findById(qid)
const findQuestionsForQuiz = (quizId) => questionsModel.find({quizId: quizId})
module.exports = { findAllQuestions, findQuestionById, findQuestionsForQuiz }