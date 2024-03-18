"use strict";
// Q21.They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
// Mobile ke liye object banaya he.
class Mobile {
    constructor(Model, color, Performance) {
        this.Model = Model;
        this.color = color;
        this.Performance = Performance;
    }
}
// Mobile ke liye instances banya he.
const Samsung = new Mobile("S9", "Black", "Good");
const Iphone = new Mobile("Iphone 14 pro", "Purple", "Good");
const BlackBerry = new Mobile("BBM1", "Black", "Bad");
// Print information about the Mobile
console.log(Samsung);
console.log(Iphone);
console.log(BlackBerry);
