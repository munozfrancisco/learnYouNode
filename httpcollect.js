var http = require('http');
var bl = require('bl');

var url = process.argv[2];


http.get(url, function (response) {
	response.setEncoding('utf8').on("data", function (data){
		console.log(data);
		res.end();
	})
});