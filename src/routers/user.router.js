const router = require('express').Router()
const {getAll, store, getDetail} = require('../controllers/user.controller')

router.get('/users', getAll)
router.get('/users/:id', getDetail)
router.post('/users', store ) 

module.exports = router