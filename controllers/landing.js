const models = require('../models');

exports.getLanding  = function(req, res, next) {
    res.render('index', { title: 'Express' });
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
        res.render('lead', { title: 'Lead',
                lead: lead });
    });
}

exports.showEditLead  = (req, res, next) => {
    return models.Lead.findOne({
        where: {
            id: req.params.lead_id
        }
    }).then(lead => {
        res.render('lead/edit_lead', { title: 'Edit',
                lead: lead });
    });
}

exports.editLead  = (req, res, next) => {
    return models.Lead.update({
            email: req.body.lead_email
        },{where: {
            id: req.params.lead_id
        }
    }).then(result => {
        res.redirect('/lead/'+ req.params.lead_id)
    });
}

exports.deleteLead = (req, res, next) => {
    return models.Lead.destroy({
        where: {
            id: req.params.lead_id
        }
    }).then(result => {
        res.redirect('/leads');
    })
}

exports.deleteLeadJson = (req, res, next) => {
    return models.Lead.destroy({
        where: {
            id: req.params.lead_id
        }
    }).then(result => {
        res.send({msg: "Success"})
    })
}