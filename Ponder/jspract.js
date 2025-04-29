// variables vs const
const Pi = 3.14;
let radius = 3;



let area = radius * radius * Pi;

console.log(area)

radius = 20;

area = radius * radius * Pi;

console.log(area)
// type exchange 

const one = 3;
const two = "2";

let result = one * two

console.log(result)
result = one + parseInt(two)

console.log(result)

// scope
let global = 'I\'m global'
function example(){
    let block = "I am block level or local";

    console.log(block)
};
console.log(global)
example();

globel = "I am also global";

console.log(global)
