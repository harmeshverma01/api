var http = require('http');
var fs = require('fs');
http.createServer(function(req,res) {
    fs.readFile('form.html',function(err,data) {
        res.writeHead(200, {'CONTENT-Type': 'text/html'});
        res.write(data);
        return res.end();

    });;
}).listen(8080);