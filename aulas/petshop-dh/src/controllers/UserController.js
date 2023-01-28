const servicoModel = require('../model/ServicoModel')
const { validationResult } = require('express-validator')


const UserController = {

    showUserCadastro: (req, res) => {

        res.render('admin/userCadastro')
    },

    create: (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.render('admin/userCadastro', { errors: errors.mapped() })
        }

        const { name, email, password } = req.body

        const user = { name, email, password }

        servicoModel.createUser(user)

        res.redirect('/login')
    }
}

module.exports = UserController