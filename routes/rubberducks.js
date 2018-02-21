var express = require('express');
var router = express.Router();
var Duck = require('../models').Duck;

//DELETE 
router.delete('/:id', function(req, res) {
  Duck.findById(req.params.id)
    .then( function(rubberduck) {
      rubberduck.destroy()
    })
    .then( function() {
      return res.redirect('/rubberducks');
  });
});

/* GET duckies */
router.get('/', function(req, res) 
{
  Duck.all(
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

/* POST add rubber ducky new */
router.post('/', function(req, res) {
  var title = req.body.title;
  Duck.create({ title: title })
    .then( function() {
      res.redirect('/rubberducks');
  });
});


//PUTS (save)
router.put('/:id', function(req, res) {
  Duck.update(
    { title: req.body.title },
    { where: { id: req.params.id } }
  )
  .then( function() {
    return res.redirect('/rubberducks');
  })
});

//EDIT
router.get('/:id/edit', function(req, res) {
  Duck.findById(req.params.id)
    .then( function(rubberduck) {
      return res.render('edit', { rubberduck: rubberduck });
  });
});








module.exports = router;
