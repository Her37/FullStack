var express = require('express');
const { route } = require('..');
var router = express.Router();
var novedadesModel = require('../../models/novedadesModel');


/* Para listar novedades */
router.get('/', async function (req, res, next) {

  var novedades = await novedadesModel.getNovedades();

  res.render('admin/novedades', {
    layout: 'admin/layout',
    usuario: req.session.nombre,
    id: req.session.id_usuario,
    novedades
  });
});

router.get('/agregar', (req, res, next) => {
  res.render('admin/agregar', {
    layout: 'admin/layout'
  });
});

// router.get('/agregar', (req, res, next) => {
//   res.render('admin/agregar', {
//     layout: 'admin/layout'
//   });
// });

router.post('/agregar', async (req, res, next) => {
  try {
    if (req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo != "") {
      await novedadesModel.insertarNovedades(req.body);
      res.redirect('/admin/novedades');
    } else {
      res.render('admin/agregar', {
        layout: 'admin/layout',
        error: true,
        message: 'Todos los campos son requeridos'
      })
    };


  } catch (error) {
    console.log(error);
    res.render('admin/agregar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se cargo la novedad'
    }
    );
  }
});

module.exports = router;