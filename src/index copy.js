// Moludos cors que ya vienen definidos
// Modulos funciones simples o más complejas que las podemos usar en diferentes app node
var http = require("http");
var url = require("url");
var querystring = require("querystring")
//exportaciones parciales nombre de la module.exports
var { info, error } = require("./modules/my-log");
var consts = require("./utils/consts");
var firebase = require("../libs/firebase");
var { countries } = require("countries-list");
var server = http.createServer(function(request, response) {
    var parsed = url.parse(request.url);
    console.log("parsed", parsed);
    var pathname = parsed.pathname;

  var query = querystring.parse(parsed.query);
  console.log("query: ", query);
  // response.writeHead(200,{'Content-Type':'application/json'});
  // response.write(JSON.stringify(countries.BO));
  // response.end();

  if (pathname === "/") {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("<html><body><h1>HOLA</h1></body></html>");
    response.end();
  } else if (pathname === "/exit") {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("<html><body><h1>BYE</h1></body></html>");
    response.end();
  } else if (pathname === "/info") {
    var resul = info(pathname);
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(resul);
    response.end();
  } else if (pathname === "/country") {
    response.writeHead(200, { "Content-Type": "application/json" });
    //response.write(JSON.stringify(countries.BO));
    //response.write(JSON.stringify(countries[query['code']]));
    response.write(JSON.stringify(countries[query.code]));
    response.end();
  } else if (pathname === "/error") {
    var resul = error(pathname);
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(resul);
    response.end();
  } else {
    response.writeHead(404, { "Content-Type": "text/html" });
    response.write("<html><body><h1>NOT FOUND</h1></body></html>");
    response.end();
  }
});
function sumar(num1, num2) {
  return num1 + num2;
}

server.listen(4000);
//var resultado =  sumar(20,10);
//console.log("La suma de 20 + 10 es " , resultado);
console.log("running on ... 4000");
