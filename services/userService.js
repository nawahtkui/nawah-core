const users = [];

exports.getAllUsers = () => {
  return users;
};

exports.registerUser = (userData) => {
  const newUser = {
    id: users.length + 1,
    ...userData,
    createdAt: new Date(),
  };
  users.push(newUser);
  return newUser;
};
