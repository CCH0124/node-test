const models = require('../models');
exports.getLanding  = function(req, res, next) {
    res.render('landing', { title: 'Express' });
}

exports.submitLead = (req, res, next) => {
    return models.Lead.create({
        email: req.body.lead_email
    }).then(lead => {
        res.redirect('/');
    });
    
}