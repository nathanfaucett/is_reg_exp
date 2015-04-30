var isObjectLike = require("is_object_like");


var objectToString = Object.prototype.toString;


module.exports = isRegExp;


function isRegExp(obj) {
    return (
        isObjectLike(obj) &&
        objectToString.call(obj) === "[object RegExp]"
    ) || false;
}
