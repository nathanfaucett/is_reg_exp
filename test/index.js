var tape = require("tape"),
    isRegExp = require("..");

tape("isRegExp(value) returns true when value is a RegExp", function(assert) {
    assert.equal(isRegExp(/regex/), true, "RegExp literal is true");
    assert.equal(isRegExp(new RegExp("regex")), true, "RegExp instance is true");
    assert.end();
});

tape("isRegExp(value) returns false for other values", function(assert) {

    assert.equal(isRegExp(null), false, "null returns false");
    assert.equal(isRegExp(undefined), false, "undefined returns false");
    assert.equal(isRegExp(45), false, "number returns false");
    assert.equal(isRegExp(NaN), false, "NaN returns false");

    assert.equal(isRegExp("string"), false, "strings return false");
    assert.equal(isRegExp([]), false, "arrays return false");
    assert.equal(isRegExp({}), false, "objects return false");
    assert.equal(isRegExp(function() {}), false, "functions return false");

    assert.end();
});
