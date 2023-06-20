var express = require('express');
var router = express.Router();
var repairs = require('../controllers/repairs');
const repair = require('../models/repairs');

//GET /Repairs
router.get('/repairs', function(req, res, next) {
  if(req.query.ano){
    repairs.repairsYear(req.query.ano)
      .then(data => {
        res.json(data)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }
  else if(req.query.marca){
    repairs.repairsMarca(req.query.marca)
      .then(data => {
        res.json(data)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }
  else{
    repairs.listRepairs()
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      res.status(500).json(err)
    })
  }
});


//GET /repairs/matriculas
router.get('/repairs/matriculas', function(req, res, next) {
  repairs.listMatriculas()
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      res.status(500).json(err)
    })
});


//GET /repairs/interv
router.get('/repairs/interv', function(req, res, next) {
  repairs.listiNTERV()
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      res.status(500).json(err)
    })
});


//POST /repairs
router.post('/repairs', function(req, res, next) {
  repairs.addRepair(req.body)
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      res.status(500).json(err)
    })
});

//DELETE /repairs/:id
router.delete('/repairs/:id', function(req, res, next) {
  repairs.deleteRepair(req.params.id)
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      res.status(500).json(err)
    })
});

//GET /repairs/:id
router.get('/repairs/:id', function(req, res, next) {
  repairs.repairId(req.params.id)
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      res.status(500).json(err)
    })
});

module.exports = router;
