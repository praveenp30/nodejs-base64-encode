Simple String Encode/Decode library for node.js
===============================================

[nodejs base64 encode](https://github.com/praveencrony/nodejs-base64-encode) is a simple node js package for encode and decode the given string with type.


## Installation

```bash
$ npm install nodejs-base64-encode
```

## Examples

**For Encode a String**

    const encode = require('nodejs-base64-encode');

    console.log(encode.encode('npm world', 'base64'));

    prints: bnBtIHdvcmxk

**For Decode a String**

    const encode = require('nodejs-base64-encode');

    console.log(encode.decode('npm world', 'base64'));

    prints: npm world

**The possible encoding types are**

- ascii
- utf8
- ucs2
- base64
- binary
- hex
- utf8

[This Package Is Under The MIT License](https://raw.githubusercontent.com/praveencrony/nodejs-base64-encode/master/LICENSE.txt)

