var express = require('express');

var app = express();

app.set('port' , process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));

// handlebar setup for view engine
var handlebars = require('express3-handlebars')
    .create({defaultLayout: 'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');    


// using handle bars
app.get('/', function(req, res) {
    res.render('home');
});

app.get('/about', function(req, res) {
    res.render('about')
})
// 404 catch all handler(middleware)
app.use(function(req, res, next) {
    res.status(404);
    res.render('404');
});
// 500 error handler (middleware)
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500);
    res.render('500')
})

// app.get('/about', function(req, res) {
//     res.type('text/plain');
//     res.send('About MeadowLark Travel')
// });
// // a custom 404 page
// // app.use is what  i'll also use for middlewares

// app.use(function(req,res) {
//     res.type('text/plain');
//     res.status(404);
//     res.send('404 - NOt found');
// });

// // custom 500 page
// app.use(function(err, req, res, next) {
//  console.error(err.stack);
//  res.type('type/plain');
//  res.status(500);
//  res.send('500-Server Error');
// });

app.listen(app.get('port'), function(){
    console.log('Express started on http://localhost:' +
    app.get('port') + '; press Ctrl-C to terminate.');
});