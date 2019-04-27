const models = require('../models');
exports.getLanding  = function(req, res, next) {
    res.render('landing', { title: 'Express' });
}

exports.submitLead = (req, res, next) => {
    return models.Lead.create({
        email: req.body.lead_email
    }).then(lead => {
        res.redirect('/leads');
    });
    
}

exports.showLeads  = (req, res, next) => {
    return models.Lead.findAll().then(leads => {
                res.render('landing', { title: 'Express',
                                        leads: leads
                });       
    });
}

exports.showLead  = (req, res, next) => {
    return models.Lead.findOne({
        where: {
            id: req.params.lead_id
        }
    }).then(lead => {
        console.log(lead);
        res.render('lead', { title: 'title',
                lead: lead });
    });
}