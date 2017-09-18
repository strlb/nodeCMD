
// App FOR Ajax Call
var express = require("express");
var bodyParser = require("body-parser");

const nodeCmd = require('node-cmd');

var app = express();
var jsonParser = bodyParser.json();

app.use(express.static(__dirname + "/public"));

app.post("/user", jsonParser, function (request, response) {
    if(!request.body) return response.sendStatus(400);
    console.log(request.body);
    var cmd_code = request.body.cmdCode;

    nodeCmd.get(''+cmd_code+'', 
    	function(err, data, stderr) {
    		
    		response.json({code:data, errors : err})

    	}
    );
})

 
app.get("/", function(request, response){
    response.send("<h1>App page</h1>");
});
 
app.listen(3000);
