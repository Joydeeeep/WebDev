let s = "22rope"
let a = 1
let b = String(a)

/*console.log(typeof s);
console.log(typeof a);
console.log(typeof b);*/

let alpha = "33.3"
let beta = Number(alpha)
let gamma = Number(s)

//console.log(typeof alpha);
//console.log(typeof beta);
//console.log(beta);
//console.log(typeof gamma);
//console.log(gamma);//NaN is there since string has alphabet so it does not convert to a proper number

let j = Number(true);
let x = true;
let y = Boolean(a);
let z = Boolean(0);
let empty = Boolean("");
let str = Boolean("anyValue");
console.log(j);
console.log(typeof x);
console.log(y);
console.log(z);
console.log(empty);
console.log(str);

/*Boolean values are true or false; If you convert 1 to boolean it is true and vice versa, simlarly false is zero. In the case of string to boolean conversion an empty string results in false and an non empty string results in true. */