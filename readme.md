Basic usage:

`npm i randomized-people`

```
import people from "randomized-people"; // import package

// set options
const options = {
	amount: 5, // always number, or string convertible to number
	gender: "rnd", // 'm' or 'f' or 'rnd', case insensitive
	withPhoto: true, // true or false
};

// declare variable and assign value to it
const users = people(options);

// use the array
console.log(users);
```

### expected output:

```
[
  {
    firstName: 'Angela',
    lastName: 'Rivera',
    username: 'A.Rivera',
    photo: 'https://ui-avatars.com/api/?name=Angela+Rivera'
  },
  {
    firstName: 'Robert',
    lastName: 'Murphy',
    username: 'R.Murphy',
    photo: 'https://ui-avatars.com/api/?name=Robert+Murphy'
  },
  {
    firstName: 'Anna',
    lastName: 'Nguyen',
    username: 'A.Nguyen',
    photo: 'https://ui-avatars.com/api/?name=Anna+Nguyen'
  },
  {
    firstName: 'Catherine',
    lastName: 'Baker',
    username: 'C.Baker',
    photo: 'https://ui-avatars.com/api/?name=Catherine+Baker'
  },
  {
    firstName: 'Gregory',
    lastName: 'Howard',
    username: 'G.Howard',
    photo: 'https://ui-avatars.com/api/?name=Gregory+Howard'
  }
]

```

# Source code:

https://github.com/Mike-OxHuge/random-people

Feel free to collaborate!
