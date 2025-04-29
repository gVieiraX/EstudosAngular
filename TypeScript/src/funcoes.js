"use strict";
//Funções
function addNumer(x, y) {
    return x + y;
}
let soma = addNumer(4, 7);
console.log(soma);
function addNome(name) {
    return `Hello ${name}`;
}
console.log(addNome("World"));
//Funções MultiTypes
function callToPhone(phone) {
    return phone;
}
console.log(callToPhone(2));
//Funções Async
async function getDatabase(id) {
    return "id";
}
