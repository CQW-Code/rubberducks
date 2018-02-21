var express = require('express');
var router = express.Router();
var Ducks = require('../models').Ducks;

//PUTS (save)
router.put('/:id', function(req, res) {
  Ducks.update(
    { title: req.body.title },
    { where: { id: req.params.id } }
  )
  .then( function() {
    return res.redirect('/rubberducks');
  })
});

//EDIT
router.get('/:id/edit', function(req, res) {
  Ducks.findById(req.params.id)
    .then( function(rubberducks) {
      return res.render('edit', { rubberducks: rubberducks });
  });
});


//DELETE 
router.delete('/:id', function(req, res) {
  Ducks.findById(req.params.id)
    .then( function(rubberducks) {
      rubberducks.destroy()
    })
    .then( function() {
      return res.redirect('/rubberducks');
  });
});

/* GET home page. */
router.get('/', function(req, res) 
{
  Ducks.all(
    {
      order:[
        ['createdAt', 'ASC']
      ]
    }
  )
  .then( function(rubberducks) {
    res.render('rubberducks', { rubberducks: rubberducks })
  })
})

/* POST add rubber ducky listing */
router.post('/', function(req, res) {
  var title = req.body.title;
  Ducks.create({ title: title })
    .then( function() {
      res.redirect('/rubberducks');
  });
});

module.exports = router;
