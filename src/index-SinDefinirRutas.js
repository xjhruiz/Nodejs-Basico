// Moludos cors que ya vienen definidos
// Modulos funciones simples o más complejas que las podemos usar en diferentes app node
// importaciones de dependencias usar CONST, var = mucha memoria, mejor let
const express = require('express');
const { countries, languages } = require('countries-list');
// exportaciones parciales nombre de la module.exports

//const routes = require('./routes/index-ConGETPOST');

const { info } = require('./modules/my-log');
// se crea una aplicación de express
const app = express();

app.get('/', (request, response) => {
  response.status(200).send('Hola');
});

app.get('/info', (request, response) => {
  info('Hola Info');
  // por defecto tiene el status 200 por lo que puedes omitirlo
  // si lo pones después del poner otro status tienes que especificarlo
  response.send('INFO nodemon 2');
});

app.get('/country', (request, response) => {
  //console.log('request.query', request.query);
  // response.write(JSON.stringify(countries[request.query.code]));
  // GET tipo Content-Type: text/html;
  // response.send(JSON.stringify(countries[request.query.code]));
  // GET Content-Type: application/json;
  response.json(countries[request.query.code]);
});

// Altenativa con parametros y no query
// Si quiero seguir agregando paramentros /:parametro
app.get('/languages/:lang/', (request, response) => {
  //console.log('request.params', request.params);
  const lang = languages[request.params.lang];
  if (lang) {
    response.json({ status: 'OK', data: lang });
  } else {
    response.status(404).json({
      status: 'NOT_FOUND',
      message: `Language${request.params.lang}NOT FOUND`
    });
  }
});

app.get('*', (request, response) => {
  response.status(404).send('NOT FOUND');
});

app.listen(4000, () => {
  //console.log('running on port 4000');
});
