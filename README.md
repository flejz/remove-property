# remove-property

![file size][shield-size]
![version][shield-release]

[shield-size]: https://img.shields.io/github/size/flejz/remove-property/src/index.js
[shield-release]: https://img.shields.io/github/package-json/v/flejz/remove-property

Never carry anymore about async reduce an array.
Install with:

```sh
npm i remove-property
```

Start requiring and then make the magic happen

```javascript
const flush = require('remove-property')
```

You might need at least 2 arguments, the first one is the object you want to change, the second onwards is the fields you want to remove.

```javascript
flush(obj, param, param1, param2, ..., paramN)
```

* `obj` is your object
* `p+` are strings with the property (key) name to be removed

## Sample

```javascript
const flush = require('remove-property')

const obj = {
  name: 'John Heinz Lopes'
  password: '1234!@#$',
  address: 'Street Calle Rua',
}

const result = flush(obj, 'password', 'address')
// or
const result = flush(obj, ['password', 'address'])
// or
const result = flush(obj, 'password', ['address'])
// or
const result = flush(obj, ...['password', 'address'])


console.log(result) // { name: 'John Heinz Lopes' }
```

> PS: all array will be flattened
