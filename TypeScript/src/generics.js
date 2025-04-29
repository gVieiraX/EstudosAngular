"use strict";
function concatArray(...itens) {
    return new Array().concat(...itens);
}
const numArray = concatArray([1, 5], [3]);
const stringArray = concatArray(["Gabriel", "CR7"], ["Goku"]);
console.log(numArray);
console.log(stringArray);
