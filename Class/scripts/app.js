
function sayHello() {
    let message = "Hello there!";
    console.log(message);
}

function sayHi(name) {
    console.log("Hi " + name);
    
}

function sum(num1, num2) {
    let total = num1 + num2;
    return total;
}

function testArray() {

    let numbers = [121,4,1,45,23,65,23,8,14,84,92,34,89,1,231,9,64];

    //access by index
    console.log(numbers[0]); //first position

    // add new elements
    numbers.push(99); // add 99 at the end of the array

    // replace
    numbers[0] = 42;

    // travel the array
    for(let i=0; i < numbers.length; i++) {
        console.log(numbers[i]);
    }

    // 1 - the number of elements in the array
    console.log(numbers.length); 

    // 2 - the sum of all the numbers in the array
    let total = 0;
    for(let i=0; i < numbers.length; i++) {
        total = total + numbers[i];        
    } // end of for loop

    console.log("The total is: " + total);
}

function testArray2() {
    // console logs numbers from 0 to 20
    // except 7 and 13
    for(let i=0; i < 21; i++) {
        //if i is not equal to 7 AND i is not 13, then print
        if(i !=7 && i != 13) {
            console.log(i);
        }
    }
}

function init() {
    // at this point ALL the html has been rendered
    console.log("Intro page loaded");

    sayHello(); // should console.log: "Hello there!"

    let firstName = "Alvin";
    sayHi(firstName); // Hi YOURNAME

    let result = sum(21, 21); // 42
    console.log(result); 

    testArray();

    testArray2();
}

// when the browser finish, exec init function
window.onload = init;
