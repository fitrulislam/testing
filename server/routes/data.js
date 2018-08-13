const router = require('express').Router();
const dataController = require('../controllers/data');

router
  .get('/', (req, res) => { res.send('hai ini algo'); })
  .get('/algorithm/getone', dataController.algorithm)
  .get('/algorithm/getall', dataController.getAll)
  .get('/algorithm/getallagain', dataController.getAllAlgo)
  .post('/algorithm', dataController.makeAlgo)

module.exports = router;