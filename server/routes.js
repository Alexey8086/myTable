const Router = require('express')
const router = new Router()
const TableController = require('./controllers/tableController')


router.get('/columns', TableController.getColumns)
router.get('/page', TableController.getPage)
router.get('/amount', TableController.getCount)


module.exports = router