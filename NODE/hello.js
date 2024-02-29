var http = require('http');
var fs = require('fs');
//// creating a server and basic routing
// // http.createServer(function(req, res) {
// //     // res.writeHead(200, { 'Content-Type': 'text/plain' });
// //     // res.end('Hello world!');
// //     var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
// //     switch(path) {
// //         case '':
// //             res.writeHead(200, {'content-type': 'text/plain'});
// //             res.end('homepage');
// //             break;
// //         case '/about':
// //             res.writeHead(200, {'content-type': 'text/plain'});
// //             res.end('about');
// //             break;
// //         default:
// //             res.writeHead(404, {'content-type': 'text/plain'});
// //             res.end('Not Found');
// //             break;
// //     }
// }).listen(3000);

    function serveStaticFile(res, path, contentType, responseCode) {
        if (!responseCode) responseCode = 200;
        fs.readFile(__dirname + path, function(err, data) {
            if(err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('500 - Internal Error');
            } else {
                res.writeHead(responseCode, { 'Content-Type': contentType });
                res.end(data);
            }
        });
    }

    http.createServer(function(req, res) {
        var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
        switch(path) {
            case '':
                serveStaticFile(res, '/public/home.html', 'text/html');
                break;
            case '/about':
                serveStaticFile(res, '/public/about.html', 'text/html');
                break;
            case '/img/logo.jpg':
                serveStaticFile(res, '/public/img/logo.jpg', 'image/jpeg');
                break;
            default:
                serveStaticFile(res, '/public/notFound.html', 'text/html', 404);
                break;
        }
    })
    .listen(3000);

console.log('server is running on localhost:3000')

 // this event is implicit i.e the http.createServer method takes a function as an arguement.
 // Routing
 