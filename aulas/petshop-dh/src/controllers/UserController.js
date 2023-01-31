const servicoModel = require('../model/ServicoModel')
const Users = require('../model/Users')
const { validationResult } = require('express-validator')
const bcrypt = require('bcrypt')


const UserController = {

    showUserCadastro: (req, res) => {

        res.render('admin/userCadastro')
    },

    create: (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.render('admin/userCadastro', { errors: errors.mapped() })
        }

        const { name, email } = req.body

        const password = bcrypt.hashSync(req.body.password, 10)

        const user = { name, email, password }

        servicoModel.createUser(user)

        res.redirect('/login')
    },

    login: (req, res) => {

        const { email, password } = req.body

        const userFound = Users.findUser(email)

        if (!userFound) {
            return res.render('login')
        }

        const validPassword = bcrypt.compareSync(password, userFound.password)

        if (!validPassword) {
            return res.render('login')
        }

        delete userFound.password

        req.session.userLogged = userFound

        res.render('admin/servicos/profile', { userLogged: req.session.userLogged })

    },

    showProfile: (req, res) => {
        return res.render('admin/servicos/profile')
    },
}

module.exports = UserController