const omit = require('lodash/omit');

const user = {
  name: 'Kelly',
  username: 'kellyhansen',
  password: 'mypassword'
};

const nameOnly = omit(user, ['username', 'password']);

console.log(nameOnly);
