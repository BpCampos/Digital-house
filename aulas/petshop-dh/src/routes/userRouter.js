const express = require('express')
const UserController = require('../controllers/UserController')
const validacoes = require('../middleware/expressValidator')

const router = express.Router();

router.get('/admin/userCadastro', UserController.showUserCadastro)
router.post('/admin/userCadastro', validacoes, UserController.create)

module.exports = router