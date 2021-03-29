# What is ascer?

Ascer is a npm module to easily access the https://randomuser.me API and help you make your code less cluttery

# Installation

`npm install ascer`

# Examples

```js
const {getRandomUser} = require('ascer');

( async () => {

    // Gets a random user and displays their first and last name
    const user = getRandomUser();
    console.log(user.name.first + ' ' + user.name.last)

    // Gets a random male user and displays their first and last name
    // Gender options are 'male' and 'female'
    const maleUser = getRandomUser({gender: 'male'});
    console.log(maleUser.name.first + ' ' + maleUser.name.last)

})();
```

## Happy Coding!