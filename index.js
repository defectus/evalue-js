var SERVER_PORT = process.env.SERVER_PORT || 9000;

var express = require('express'),
    app     = express();

app.use(function (req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
});

app.use('/', express.static('static', {index: 'index.html'}));
app.use('/bower_components', express.static('bower_components'));

app.listen(SERVER_PORT, function () {
   console.log('evalue test app ' + SERVER_PORT + '!');
});
