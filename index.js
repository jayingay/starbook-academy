//import
const express = require('express');
const app =  express();
// const cookieParser = require('cookie-parser');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const studentRoutes = require('./routes/studentRoutes.js');
const newConnection = require('./lib/mySqlDb.js');
const fileUpload = require('express-fileupload');
const session = require('express-session');
const path = require('path');
const { request } = require('http');
const port = 2000;


//static files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));
app.use('/partials', express.static(__dirname + 'public/partials'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'static')));

//views
app.set('views', './views');
app.set('view engine', 'ejs');


// middleware
app.use(fileUpload());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

// app.use(cookieParser());

//routes
app.use('/', studentRoutes);


//login
app.post('/login', function(req, res){
    let email = req.body.email;
    let password = req.body.password;

    if(email && password){
        newConnection.query('SELECT * FROM tbluser WHERE email = ? AND password = ?', [email, password], function(error, results, fields){
            if(error) throw error;

            if(results.length > 0){

                req.session.loggedin = true;
                req.session.email = email;

                res.redirect('/dashboard');
            }else{
                res.send('Incorrect Username  and/or Password');
            }
            res.end();
        });
    }else{
        res.send('Please enter Username and Password !');
        res.end();
    }
});


app.get('/dashboard', function(request, response) {
	// If the user is loggedin
	if (request.session.loggedin) {
		// Output username
		response.send('Welcome back, ' + request.session.username + '!');
	} else {
		// Not logged in
		response.send('Please login to view this page!');
	}
	response.end();
});

// set server connection
newConnection.connect(function(error){
    try {
        console.log('Connection to the database is Successful')    
    } catch (error) {
        console.log(err)
    }

})


app.listen(port, () => {
    console.log('The port is working', port);
}); 
