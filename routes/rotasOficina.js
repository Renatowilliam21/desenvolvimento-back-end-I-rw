var express = require('express');
var router = express.Router();
var controllerOficina = require('../controller/controllerOficina.js')

/* GET Cria Oficina. */
router.get('/cria', controllerOficina.cria_get);

/* POST Cria Oficina. */
router.post('/cria', controllerOficina.cria_post);

/* GET Consulta Oficina. */
router.get('/consulta/:id_oficina', controllerOficina.consulta);

/* GET Altera Oficina. */
router.get('/altera/:id_oficina', controllerOficina.altera_get);

/* POST Altera Oficina. */
router.post('/altera/:id_oficina', controllerOficina.altera_post);

module.exports = router;
