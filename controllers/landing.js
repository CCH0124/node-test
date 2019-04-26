exports.getLanding  = function(req, res, next) {
    res.render('landing', { title: 'Express' });
}

exports.submitLead = (req, res, next) => {
    console.log("Lead Email:", req.body.lead_email);
    res.redirect('/');
}