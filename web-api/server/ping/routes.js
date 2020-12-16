const express = require('express');
const router = express.Router();

const ping = require('./ping');

/**
 * GET - /ping
 */
router.get('/', async (req, res, next) => {
  res.send(await ping.getPing());
});

module.exports = router;
