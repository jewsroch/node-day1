// var http = require("http");

// //calback function
// function greet(req, res) { 
//   res.writeHead(200, {"Content-Type": "text/plain"});
//   res.write("Hello World");
//   res.end();
// }

// var server = http.createServer(greet);

// server.listen(3000);

var express = require('express');
var app = express();

app.get('/hello/:name', function (req, res){
  res.send('Hello World, ' + req.params.name);
});

//FIRST ATTEMPT:
// app.get('/greet/:name/:lastname', function (req, res) {
//   res.send("Hello " + req.params.name + " " + req.params.lastname);
// })

// app.get('/add/:num1/:num2', function (req, res) {
//   var sum = (parseInt(req.params.num1) + parseInt(req.params.num2));
//   res.send(req.params.num1 + " + " + req.params.num2 + " = " + sum);
// });

// app.get('/subtract/:num1/:num2', function (req, res) {
//   var sum = (parseInt(req.params.num1) - parseInt(req.params.num2));
//   res.send(req.params.num1 + " - " + req.params.num2 + " = " + sum);
// });

// app.get('/multiply/:num1/:num2', function (req, res) {
//   var sum = (parseInt(req.params.num1) * parseInt(req.params.num2));
//   res.send(req.params.num1 + " * " + req.params.num2 + " = " + sum);
// });

// app.get('/divide/:num1/:num2', function (req, res) {
//   var sum = (parseInt(req.params.num1) / parseInt(req.params.num2));
//   res.send(req.params.num1 + " / " + req.params.num2 + " = " + sum);
// });

//SECOND ATTEMPT:
app.get('/:method/:num1/:num2', function (req, res) {
  var operation, sum, num1, num2;
  num1 = parseInt(req.params.num1);
  num2 = parseInt(req.params.num2);

  switch (req.params.method) {
    case "add":
      sum = num1 + num2;
      break;
    case "subtract":
      sum = num1 - num2;
      break;
    case "multiply":
      sum = num1 * num2;
      break;
    case "divide":
      sum = num1 / num2;
      break;
    default:
      sum = "Invalid method";
  }

  res.send(sum.toString());
});

var server = app.listen(3000, function() {
  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port);
});

