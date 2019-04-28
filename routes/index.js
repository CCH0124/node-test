var express = require('express');
var router = express.Router();
let landing = require('../controllers/landing');
/* GET home page. */
router.get('/', landing.getLanding);
router.post('/', landing.submitLead);
router.get('/leads', landing.showLeads);
router.get('/lead/:lead_id', landing.showLead);
router.get('/lead/:lead_id/edit', landing.showEditLead);
router.post('/lead/:lead_id/edit', landing.editLead);
router.post('/lead/:lead_id/delete', landing.deleteLead);
router.post('/lead/:lead_id/delete-json', landing.deleteLeadJson);
module.exports = router;
