const http = require('http')
const express = require('express')
const routes = require('./routes')
const session = require('express-session')
const bodyParser = require('body-parser')
const database = require('./Database/database');
const app = express()



//Access to XMLHttpRequest at 'http://localhost:3001/api/games' 
//from origin 'http://localhost:3000' has been blocked by CORS policy:
// No 'Access-Control-Allow-Origin' header is present on the requested resource.

//if you get the above error, uncomment the code below (not suitable for professional development environments)

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


// all environments
database.connectToMongo();
app.set('port', process.env.PORT || 3001)
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: 'uwotm8'
}))
app.use(bodyParser.json());
app.use('/uploads',express.static('./uploads'));
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/api/games', routes);

const server = http.createServer(app)
server.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'))
})
