const createUser = (req, res) => {
  res.send({ status: 'OK', message: 'User created' });
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
