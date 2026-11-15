var express = require('express');
var router = express.Router();
var controllerIndex = require('../controller/controllerIndex.js')

/* GET home page. */
router.get('/', controllerIndex.tela_principal);

/* GET página sobre */
router.get('/sobre', controllerIndex.sobre);

/* GET oficinas com inscrições abertas. */
router.get('/abertas', controllerIndex.abertas);

module.exports = router;
