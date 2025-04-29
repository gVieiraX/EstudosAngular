"use strict";
class Character {
    name;
    strength;
    skill;
    constructor(name, strength, skill) {
        this.name = name;
        this.strength = strength;
        this.skill = skill;
    }
    attack() {
        console.log(`Attack with ${this.strength} points`);
    }
}
// Datas Modifiers: public,private,protected
//Character: superclass
//Magician: subclass
class Magician extends Character {
    magicPoints;
    constructor(name, stregth, skill, magicPoints) {
        super(name, stregth, skill);
        this.magicPoints = magicPoints;
    }
}
const p1 = new Character("Ryu", 10, 98);
const p2 = new Magician("Mago", 9, 30, 100);
p1.skill = 12;
console.log(Character);
console.log(Magician);
console.log(p1);
console.log(p2);
