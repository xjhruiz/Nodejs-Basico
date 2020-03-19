// Moludos cors que ya vienen definidos
// Modulos funciones simples o más complejas que las podemos usar en diferentes app node
// importaciones de dependencias usar CONST, var = mucha memoria, mejor let
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
//habilita las variables de entorne los archivos .env
dotenv.config();
 
const routesV1 = require('./routes/v1');

const app = express();

console.log('MONGO', process.env.MONGO);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

routesV1(app);

// exportaciones parciales nombre de la module.exports
//const routes = require('./routes/index-ConGETPOST');
// se crea una aplicación de express
// Despues de definir la aplicación le pasamos la app
// se ha exportado routes
// routes(app);
// valor de defecto para que la aplicacion no se caiga
const PORT = process.env.PORT || 4000;
//'mongodb://localhost/my_database'
mongoose
  .connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    // Cuando se conecte correctamente se ejecuta then
  })
  .then(() => {
    console.log('Connected to mongoDB');
    app.listen(PORT, () => {
      console.log(`running on ${PORT}`);
    });
  })
  .catch(error => {
    console.log('mongoDB ERROR', error());
  });
