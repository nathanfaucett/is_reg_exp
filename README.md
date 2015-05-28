# isRegExp

isRegExp takes a value and returns true if the value is a RegExp.
All other values return false

**param** {Any} any primitive or object
**returns** {Boolean}

```javascript

  isRegExp(/regex/); // returns true
  isRegExp(null);    // returns false
  isRegExp({});      // returns false

```