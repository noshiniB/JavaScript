function mul(a, b) {    //local scope for function parameters
    return a * b;
}
console.log(mul(5, 5));

function mul1(a, b) {
    a * b;  //without return keyword
}
console.log(mul1(5, 5));

function mul2(a, b) {
    return a * b;
}
let res = mul2(5, 6);
console.log(res);

console.log(mul2(1, 1));    //refers to function result

console.log(mul2);  //refers to function object

function mul3(a, b) {
    return a * b;
}
console.log("Answer is" + " " + mul3(2, 2));    //function as variable value

function myFunction() {
    let car = "Volvo";
    console.log(car);
}

myFunction();

/*
console.log(car);   //cannot access a variable declared inside a function
*/

function add(a, b) {
    return a + b;
}
console.log(add(1, 2));

let array1 = [1, 2, 3, 4, 5];
let result = 0;
function add1(array1) {
    for (i = 0; i < 6; i++)
        result = result + i;
    console.log(result);
}
add1();

let sum = new Function("num1", "num2", "return num1+num2"); //constructor function, it creates new function object
console.log(sum(9, 5));

let sub = (a, b) => console.log(a - b); //arrow function
sub(7, 2);

let sub1 = (a, b) => { return a - b }; //arrow function with return requires curly braces, can remove both return and braces
console.log(sub1(5, 1));

(function () {  //anonymous function
    console.log("Hai")
})();


let greet1 = function (name1) {  //anonymous function passed to a variable
    console.log("Hello" + " " + name1)
}
greet1("Noshini");

function func(num, str, fun1) {
    console.log(num);
    console.log(str);
    console.log(fun1);
}
function ball() { return "i am  a ball" }
func(1, "A", ball());

let array = [1, 2, 3, 4, 5];
console.log(array.map(number => number + 1));   //higher order functions

let array2 = [4, 9, 16, 25];
console.log(array2.map(Math.sqrt));

let array3 = [1, 2, 3, 4, 5];
console.log(array3.reduce((accumulator, current_value) => accumulator + current_value, 0));

console.log(array3.reduce((accumulator, current_value) => accumulator - current_value, 0));

console.log(array3.reduce((accumulator, current_value) => accumulator * current_value, 1));


let array4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(array4.filter(number => number % 2 == 0));

console.log(array4.filter(number => number % 2 != 0));

//map function code

function map(array, f) {
    let copy = [];
    for (let i = 0; i < array.length; i++) {
        let original = array[i];
        let modified = f(original);
        copy[i] = modified;
    }
    return copy;
}

console.log(map([1, 2, 3, 4, 5], (value => value + 1)));

let sub2 = (a, b) => a - b; //can remove both return and braces
console.log(sub2(5, 1));


