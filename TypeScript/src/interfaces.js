"use strict";
const bot1 = {
    id: "1",
    name: "megamente",
};
const bot2 = {
    id: "1",
    name: "megamente",
    sayHello: function () {
        throw new Error("Function not implemented.");
    },
};
class Pessoa {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return `hello i'm ${this.name}`;
    }
}
const p = new Pessoa(1, "cr7");
console.log(p.sayHello());
