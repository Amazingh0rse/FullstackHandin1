"use strict";
// Interfaces 2
// b
function myFunc1(mf) {
    let array = [mf.a, mf.b, mf.c];
    return array;
}
const mf = { a: "a", b: "b", c: "c" };
console.log(myFunc1(mf));
function myFunc2(a, b, c) {
    const array = [a, b, c];
    return array;
}
console.log(myFunc2("a", "b", "c"));
//c) Design another implementation that returns an array, with the three strings uppercased.
function myFunc3(a, b, c) {
    const array = [a.toUpperCase(), b.toUpperCase(), c.toUpperCase()];
    return array;
}
console.log(myFunc3("a", "b", "c"));
//D e & f)
let f2 = function logger(f1) {
    //Simulate that we get data from somewhere and uses the provided function
    let [a, b, c] = [myFunc1(mf), myFunc2("1", "2", "3"), myFunc3("4", "5", "6")];
    //let [ a, b, c] = ["A", "B", "C"];
    console.log(a);
    console.log(b);
    console.log(c);
    /* console.log(f1.string1, f1.string2, f1.string3);
    console.log(myFunc2(myfunc)); */
};
f2(mf);
//# sourceMappingURL=interface2.js.map