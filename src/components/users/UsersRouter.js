const { Router } = require('express')
const { createUser } = require('../users/controllers/UserController')

const router = Router()

router.post('/', createUser)

router.get('', () => 'null')

router.put('', () => null)

router.delete('', () => null)

module.exports = router