var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000
  Categorias = require('./api/models/categoriesModel'), //created model loading here
  bodyParser = require('body-parser'),
  session = require('express-session'),
  cors = require('cors');

app.use(cors({origin: null}));

app.use(session({
  secret: 'secret session key',
  resave: false,
  saveUninitialized: true,
  //store: store,
  unset: 'destroy',
  name: 'session cookie name'
}));

app.use(function(req, res, next) {
  
   // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', null);

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    
    if (!req.session.cart) {
        req.session.cart = [];
    }

    // Pass to next layer of middleware
    next();
});

//app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/categoriesRoutes'); //importing route
routes(app); //register the route



app.listen(port);

console.log('products RESTful API server started on: ' + port);
