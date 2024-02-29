var express = require('express');

var app = express();

app.set('port' , process.env.PORT || 3000);

// a custom 404 page

app.use(function(req,res) {
    res.type('text/plain');
    res.status(404);
    res.send('404 - NOt found');
});

// custom 500 page
app.use(function(err, req, res, next) {
 console.error(err.stack);
 res.type('type/plain');
 res.status(500);
 res.send('500-Server Error');
});

app.listen(app.get('port'), function(){
    console.log('Express started on http://localhost:' +
    app.get('port') + '; press Ctrl-C to terminate.');
});