const router = require('express').Router();
const passport = require('passport');

router.get('/', passport.authenticate('discord'));
router.get('/redirect', passport.authenticate('discord', {
    failureRedirect : '/'
}), (req,res) => {
    res.redirect('/#/login')
})

function isAuthorized(req, res, next){
    if(req.user){
        console.log("User is logged in.")
        next()
    }
    else{
        console.log("User is not logged in.")
        res.redirect('/')
       
    }   
} 

router.get('/login', (req, res) => {
    if(req.user){
        console.log("login!!")
        res.redirect('/login')
    }else{
        res.redirect('/')
    }
})

router.get('/logout', (req, res) => {
    // req.logout(function(err){
    //     if(err){ return next(err) }
    //     req.logout();
    //     res.redirect('/')
    // })

    if(req.user){
        req.logout(function(err) {
            if (err) { return next(err); }
            res.redirect('/#/logout');
        });
    }else {
        res.redirect('/')
    }
})

module.exports = router