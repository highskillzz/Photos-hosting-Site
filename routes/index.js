'use strict';
var express=require('express');
var router=express.Router();
var User=require("../models/users");
var passport=require("passport");
var middleware=require("../middleware/index.js");

router.get('/register', function(req, res) {
    res.render("register");
});

router.post('/register',function(req, res) {
    User.register(new User({username:req.body.username}),req.body.password,(err,user)=>{
        if(err)
        {
            req.flash("error",err.message);            
            return res.redirect("/register");
        }
        passport.authenticate("Local")(req,res,()=>{
            req.flash("success","Welcome " +user.username); 
            
            // change the below route

            //  res.redirect("/photos");
            res.redirect("/login");
            
        });
    });    
});

router.get("/login",(req,res)=>{
    res.render("login",{message:req.flash("error")});
});

router.post('/login',passport.authenticate("local",{

    // Change the success route
    failureRedirect:"/login"
}),function(req, res) {
    res.redirect("/photos/"+req.user._id);
});

router.get('/logout', function(req, res) {
    req.logout();
    req.flash("success","Logged Out!!");
    res.redirect("/photos");
});

// function isLoggedIn(req,res,next){
//     if(req.isAuthenticated()){
//         return next();
//     }
//     res.redirect("/login");
// }

module.exports=router;