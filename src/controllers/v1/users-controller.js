const bcrypt = require('bcrypt');
const Users = require('../../mongo/models/users');

const createUser = async (req, res) => {
  try {
    console.log('req.body', req.body);

    const { username, email, password, data } = req.body;

    // await -> para acceder al valor del string lo encriptado
    const hash = await bcrypt.hash(password, 15);
    //(err, hash) => {// Store hash in your password DB. hash se guarda en bd if (!err) { req.status(505).send({ status: 'Error', message: 'invalid password' }); console.log('Error al generar la contraseña');} else {console.log('Todo ok', hash);}});
    //console.log('fin', hash);
    // que espere a que termine de crear el usuario y envié la respuesta send()
    // Primera forma de guardar datos en mongoDB
    // await Users.create({
    //   username, // es lo mismo que username: username request
    //   email,
    //   password: hash,
    //   data
    // });

    //Segunda forma de guardad Datos en mongoDB
    const user = new Users();
    user.username = username;
    user.email = email;
    user.password = hash;
    user.data = data;

    await user.save();

    res.send({ status: 'OK', message: 'User created' });
  } catch (error) {
    if (error.code && error.code === 11000) {
      res
        .status(400)
        .send({ status: 'DUPLICATED_VALUE', message: error.keyValue });
      return;
    }
    console.log(error);
    res.status(500).send({ status: 'OK', message: error.message });
  }
};

const deleteUser = (req, res) => {
  res.send({ status: 'OK', message: 'User deleted' });
};

const getUsers = (req, res) => {
  res.send({ status: 'OK', date: {} });
};

const updateUser = (req, res) => {
  res.send({ status: 'OK', message: 'User updated' });
};

module.exports = {
  createUser,
  deleteUser,
  getUsers,
  updateUser
};
