var express = require('express');
var app = express();
var session = require('express-session');
var path = require('path');


//setting view engine
app.set('view engine', 'ejs');

//setting views folder for ejs
app.set('views',path.join(__dirname ,'views'));



//setting middleware for session
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));



//starting server
app.listen(8000, function(){
    console.log('Server running at port 8083: http://127.0.0.1:8080')
});




app.get('/',function(req,res){
res.render('index',{session : req.session});
});

app.post('/',function(req,res){
  req.session.name = "Logout";
res.redirect('/');
});
app.get('/logout',function(req,res){
  req.session.destroy();
res.redirect('/');
});
