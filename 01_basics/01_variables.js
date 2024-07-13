const a = 1234
let b = "abcd"
var c = "xyz"
d = "VSKP" // not a good practice to declare a variable  this way

// do not prefer var due to problems in local scope and functional scope

console.log(a);
console.table([a,b,c,d]);