// Moludos cors que ya vienen definidos
// Modulos funciones simples o más complejas que las podemos usar en diferentes app node
// importaciones de dependencias usar CONST, var = mucha memoria, mejor let
const express = require('express');

const routesV1 = require('./routes/v1');

const app = express();

routesV1(app);

// exportaciones parciales nombre de la module.exports
//const routes = require('./routes/index-ConGETPOST');
// se crea una aplicación de express
// Despues de definir la aplicación le pasamos la app
// se ha exportado routes
// routes(app);

app.listen(4000, () => {
  console.log('running on port 4000');
});
