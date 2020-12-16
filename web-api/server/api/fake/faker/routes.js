const express = require('express');
const router = express.Router();

const fakerLogic = require('./faker');

/**
 * GET - api/fake/faker
 */
router.get('/', async (req, res, next) => {
  const fakerContent = await fakerLogic.getFaker();
  res.send(fakerContent);
});

module.exports = router;
