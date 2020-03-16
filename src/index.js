// Moludos cors que ya vienen definidos
// Modulos funciones simples o más complejas que las podemos usar en diferentes app node
//importaciones de dependencias usar CONST, var = mucha memoria, mejor let
const express= require("express");

//exportaciones parciales nombre de la module.exports
const { info, error } = require("./modules/my-log");
const { countries } = require("countries-list");

//se crea una aplicación de express
const app = express();

app.get('/',function(request,response){
  response.status(200).send("Hola");
});

app.get('/info',function(request,response){
  info("Hola Info")
  //por defecto tiene el status 200 por lo que puedes omitirlo
  response.send("INFO nodemon 2")
})

app.get('*',function(request,response){
  response.status(404).send("NOT FOUND");
});


// var server = http.createServer(function(request, response) {
//     var parsed = url.parse(request.url);
//     console.log("parsed", parsed);
//     var pathname = parsed.pathname;

//   var query = querystring.parse(parsed.query);
//   console.log("query: ", query);
//   // response.writeHead(200,{'Content-Type':'application/json'});
//   // response.write(JSON.stringify(countries.BO));
//   // response.end();

//   if (pathname === "/") {
//     response.writeHead(200, { "Content-Type": "text/html" });
//     response.write("<html><body><h1>HOLA</h1></body></html>");
//     response.end();
//   } else if (pathname === "/exit") {
//     response.writeHead(200, { "Content-Type": "text/html" });
//     response.write("<html><body><h1>BYE</h1></body></html>");
//     response.end();
//   } else if (pathname === "/info") {
//     var resul = info(pathname);
//     response.writeHead(200, { "Content-Type": "text/html" });
//     response.write(resul);
//     response.end();
//   } else if (pathname === "/country") {
//     response.writeHead(200, { "Content-Type": "application/json" });
//     //response.write(JSON.stringify(countries.BO));
//     //response.write(JSON.stringify(countries[query['code']]));
//     response.write(JSON.stringify(countries[query.code]));
//     response.end();
//   } else if (pathname === "/error") {
//     var resul = error(pathname);
//     response.writeHead(200, { "Content-Type": "text/html" });
//     response.write(resul);
//     response.end();
//   } else {
//     response.writeHead(404, { "Content-Type": "text/html" });
//     response.write("<html><body><h1>NOT FOUND</h1></body></html>");
//     response.end();
//   }
// });

app.listen(4000,function(){
  console.log('running on port 4000')
})

