let a = 1;
let b = -5;
let c = 6;

let delta = b**2 - (4*a*c);

let x1 = (b*-1 + delta**0.5)/2*a
let x2 = (b*-1 - delta**0.5)/2*a

console.log("x1: " + x1);
console.log("x2: " + x2);