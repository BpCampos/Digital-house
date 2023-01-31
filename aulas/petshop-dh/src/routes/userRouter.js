const express = require('express')
const UserController = require('../controllers/UserController')
const validacoes = require('../middleware/expressValidator')

const router = express.Router();

router.get('/admin/userCadastro', UserController.showUserCadastro)
router.post('/admin/userCadastro', validacoes, UserController.create)
router.get('/admin/servicos/profile', UserController.showProfile)
router.post('/admin/login', validacoes, UserController.login)

module.exports = router