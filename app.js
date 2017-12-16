/*jshint esversion: 6 */
var express = require('express');
var passport=require("passport");  
var LocalStrategy=require("passport-local");  
var session=require('express-session');
var methodOverride=require('method-override');
var flash=require("connect-flash");
var middleware=require("./middleware/index.js");

// Models
var Photo=require("./models/photos");
var User=require("./models/users");

// Routers
var indexRoutes=require("./routes/index");

// var indexRouter=require("./routes/index");


// Config

var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


// Mongoose connection to mongo db

mongoose.connect('mongodb://localhost:27017/gdg');



app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname+"/public"));
app.use(methodOverride("_method"));
app.use(flash());

app.use(session({
    resave:false,
    saveUninitialized:false,
    secret:"lingering flower essence is the best to bring out the beast"
}));


// Insert the passport-local-mongoose plugin in the schema

passport.use(new LocalStrategy(User.authenticate()));
app.use(passport.initialize()); 
app.use(passport.session()); 
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.set("view engine", "ejs");

app.use(function(req, res, next) {
    res.locals.currentUser=req.user;
    res.locals.success=req.flash("success");
    res.locals.error=req.flash("error");
    next();
});


// Routes
app.use("/",indexRoutes);

app.get('/', function (req, res) {
    res.render("login");
});

app.get('/photos/new', middleware.isLoggedIn, function (req, res) {
    res.render("photos/new.ejs");
});


app.get("/photos/:id",middleware.isLoggedIn ,function (req, res) {
   Photo.find({},function(err,photos){
    if(err)
    console.log(err);
    else{
        var x=[];
        photos.forEach(function(photo){
            if(photo.author.id.equals(req.user._id)){
                x.push(photo);
            }
    });
    res.render("photos/index",{photos:x});
}
   });
     
});

app.post('/photos', middleware.isLoggedIn, function (req, res) {
    var name = req.body.name;
    var image = req.body.image;
    
    var newPhoto = {
        name: name,
        image: image,
      
    };
    // photos.push(newCampground);
    Photo.create(newPhoto, function (err, photo) {
        if (err) { console.log(err); }
        else {
            photo.author.id = req.user._id;
            photo.author.username = req.user.username;
            photo.save();
            res.redirect("/photos/"+req.user._id);
        }
    });

});


app.listen(process.env.PORT ||3000, function () {
    console.log('Server listening on port 3000!');
});