const express = require('express');
const router = express.Router();

//Import weather functions
const fake = require('./fake');

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* --- IMPORT ROUTES ---
    /fake/faker
*/
const faker = require('./faker').routes;
router.use('/faker', faker);
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

/**
 * GET - api/fake
 *   ?idk=[some string]
 */
router.get('/', (req, res, next) => {
  fake
    .getFake(req.query.idk)
    .then((resultObj) => {
      res.send(resultObj);
    })
    .catch((error) => {
      console.log('ERROR | ROUTER - GET - api/weather : ' + error.message);
      res.status(error.status);
      res.json(error.message);
    });
});

/**
 * POST - /api/fake
 */
router.post('/', (req, res, next) => {
  if (Object.keys(req.body).length === 0) {
    res.status(400);
    res.json(
      'ERROR (Bad Request): Expected an appropriate request body to be provided.'
    );
  }

  fake
    .postFake(req.body)
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      console.log('ERROR | ROUTER - POST - api/fake : ' + error.message);
      res.status(error.status);
      res.json(error.message);
    });
});

module.exports = router;
