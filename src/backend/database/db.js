/**
 * Created by steve on 28/11/2016.
 */
var mongoose = require('mongoose');

var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
    replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };

var mongodbUri = 'mongodb://user:pass@host:port/db';

mongoose.connect(mongodbUri, options);
var conn = mongoose.connection;

conn.on('error', console.error.bind(console, 'connection error:'));

conn.once('open', function() {
    // Wait for the database connection to establish, then start the app.
});