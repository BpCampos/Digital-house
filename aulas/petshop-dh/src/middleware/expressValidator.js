const { body } = require('express-validator')

const validacoes = [
    body('name').notEmpty().withMessage("Deve preencher o nome"),
    body('email').isEmail().notEmpty().withMessage('Você deve preencher o email'),
    body('password').notEmpty().withMessage('Você deve preencher a senha')
]

module.exports = validacoes