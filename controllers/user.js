
exports.showLogin = (req, res, next) => {
    res.render('user/login',{title: "Log in"});
}

exports.showSignup = (req, res, next) => {
    res.render('user/signup',{ title: "Sign up to Start MVP"});
}

exports.login = (req, res, next) => {
    
}

exports.signup = (req, res, next) => {
    
}

