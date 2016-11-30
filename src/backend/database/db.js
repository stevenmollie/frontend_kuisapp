/**
 * Created by steven on 28/11/2016.
 */
// Preamble
var http = require ('http');	     // For serving a basic web page.
var mongoose = require ("mongoose"); // The reason for this demo.

//url naar db.
var uristring =
    'mongodb://admin:abc123@ds163667.mlab.com:63667/heroku_s3b0kwzb' ||
    'mongodb://localhost/HelloMongoose';

//poort
var port = process.env.PORT || 5000;

//connectie maken met de db
mongoose.connect(uristring, function (err, res) {
    if (err) {
        console.log ('ERROR connecting to: ' + uristring + '. ' + err);
    } else {
        console.log ('Succeeded connected to: ' + uristring);
    }
});

//voorbeeldschema
var userSchema = new mongoose.Schema({
    name: {
        first: String,
        last: { type: String, trim: true }
    },
    age: { type: Number, min: 0}
});

//schema in model gieten
var PUser = mongoose.model('PowerUsers', userSchema);

//oude data verwijderen
PUser.remove({}, function(err) {
    if (err) {
        console.log ('error deleting old data.');
    }
});

// user creeëren.
var johndoe = new PUser ({
    name: { first: 'John', last: 'Doe' },
    age: 25
});

// in database opslaan
johndoe.save(function (err) {if (err) console.log ('Error on save!')});

//als browser eerder geladen is dan de connectie met de db
var found = ['DB Connection not yet established.  Try again later.  Check the console output for error messages if this persists.'];
//webserver creeëren
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    createWebpage(req, res);
}).listen(port);

function createWebpage (req, res) {
    // Let's find all the documents
    PUser.find({}).exec(function(err, result) {
        if (!err) {
            res.write(html1 + JSON.stringify(result, undefined, 2) +  html2 + result.length + html3);
            // Let's see if there are any senior citizens (older than 64) with the last name Doe using the query constructor
            var query = PUser.find({'name.last': 'Doe'}); // (ok in this example, it's all entries)
            query.where('age').gt(64);
            query.exec(function(err, result) {
                if (!err) {
                    res.end(html4 + JSON.stringify(result, undefined, 2) + html5 + result.length + html6);
                } else {
                    res.end('Error in second query. ' + err)
                }
            });
        } else {
            res.end('Error in first query. ' + err)
        };
    });
}

var html1 = '<title> hello-mongoose: MongoLab MongoDB Mongoose Node.js Demo on Heroku </title> \
<head> \
<style> body {color: #394a5f; font-family: sans-serif} </style> \
</head> \
<body> \
<h1> hello-mongoose: MongoLab MongoDB Mongoose Node.js Demo on Heroku </h1> \
See the <a href="https://devcenter.heroku.com/articles/nodejs-mongoose">supporting article on the Dev Center</a> to learn more about data modeling with Mongoose. \
<br\> \
<br\> \
<br\> <h2> All Documents in MonogoDB database </h2> <pre><code> ';
var html2 = '</code></pre> <br\> <i>';
var html3 = ' documents. </i> <br\> <br\>';
var html4 = '<h2> Queried (name.last = "Doe", age >64) Documents in MonogoDB database </h2> <pre><code> ';
var html5 = '</code></pre> <br\> <i>';
var html6 = ' documents. </i> <br\> <br\> \
<br\> <br\> <center><i> Demo code available at <a href="http://github.com/mongolab/hello-mongoose">github.com</a> </i></center>'