var http = require('http');

var handle = function(req,res){
	res.writeHead(200,{'Content-Type':'text/plain'});
	res.write('Hello ');
	res.end('World');
}

var server = http.createServer(handle);

server.listen(8888);

console.log('http serve on');
