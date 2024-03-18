"use strict";
// 26 .Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
// Color set kiya he.
let alien_color = 'green';
if (alien_color === 'green') {
    console.log("Player just earned 5 ruppe for shooting the alien!");
}
else {
    console.log("Player just earned 10 ruppe!");
}
// Color Change kar diya he. kam se kam 10 rupee to mil hi jaege.
alien_color = 'yellow';
if (alien_color === 'green') {
    console.log("Player just earned 5 ruppe for shooting the alien!");
}
else {
    // ye false kar k, 10 wali lays khaonga. :-)
    console.log("Player just earned 10 ruppe!");
}
