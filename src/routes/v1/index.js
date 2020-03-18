const productsRouter = require('./products-routes');
const usersRouter = require('./users-routes');

module.exports = app => {
  app.use('/api/v1/users', usersRouter);
  app.use('/api/v1/products', productsRouter);
};
