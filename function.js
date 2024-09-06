// function declarations
function welcome()
{
    console.log("Welcome to the class");
}

function greeting(name)
{
    console.log(`Hello ${name}`);
}

console.log(typeof greeting);

// Function expressions
var welcome = function(){
    console.log("Welcome to the class");
}

// Arrow functions
var greeting = (name) =>
{
    console.log(`Hello ${name}`);
}

var add = (a, b) => a + b;
console.log(add(1,2));

function print(a, b , ...c)
{
    console.log(arguments)
    console.log(a)
    console.log(b)
    console.log(c)
}
print(1, 2, 3, 4, 5);