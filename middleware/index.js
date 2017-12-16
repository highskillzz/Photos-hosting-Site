//All the middle ware functions
var Photo=require("../models/photos");
var User=require("../models/users");


var middleware={};

middleware.isLoggedIn=function(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash("error","Please Login First!!");
    res.redirect("/login");
};

middleware.checkPhotoOwnership=function(req, res, next) {
    if (req.isAuthenticated()) {
        Photo.findById(req.params.id, (err, photo) => {
            if (err)
             {
                req.flash("error","Photo not found!!");
                 res.redirect("back");
                }
            else
            { 
            if (photo.author.id.equals(req.user._id)) 
            {
                return next();
            }
            else 
            {
                req.flash("error","You do not have the permission to do that!!");
                res.redirect("back"); 
            }
        }
        });
    }
    else
    {
        req.flash("error","You need to be logged in to do that!!");
        res.redirect("/login");
    }
};






module.exports=middleware;