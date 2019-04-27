var express = require('express');
var router = express.Router();
let landing = require('../controllers/landing');
/* GET home page. */
router.get('/', landing.getLanding);
router.post('/', landing.submitLead);
router.get('/leads', landing.showLeads);
module.exports = router;
