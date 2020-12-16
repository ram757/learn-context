const express = require('express');
const router = express.Router({ mergeParams: true });

/****** Import Base Routes ********/
const fake = require('./fake').routes;

//Expose routes
router.use('/fake', fake);
module.exports = router;
