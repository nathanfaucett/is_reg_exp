var test = require("tape"),
    isRegExp = require("../src/isRegExp");

test("returns true when value is a RegExp", function(t) {
    t.plan(2);

    t.equal(isRegExp(/regex/), true, "RegExp literal is true");
    t.equal(isRegExp(new RegExp("regex")), true, "RegExp instance is true");

});

test("returns false for other values", function(t) {

    t.plan(8);

    t.equal(isRegExp(null), false, "null returns false");
    t.equal(isRegExp(undefined), false, "undefined returns false");
    t.equal(isRegExp(45), false, "number returns false");
    t.equal(isRegExp(NaN), false, "NaN returns false");

    t.equal(isRegExp("string"), false, "strings return false");
    t.equal(isRegExp([]), false, "arrays return false");
    t.equal(isRegExp({}), false, "objects return false");
    t.equal(isRegExp(function() {}), false, "functions return false");

});
