console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return `Hello, ${name}!`;
}
// Remember to call the function to test
console.log('Test- should say "Hello, Brandon!"', helloName('Brandon'));
console.log('Test- should say "Hello, Phoenix!"', helloName('Phoenix'));

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  // return firstNumber + secondNumber;
  let result = firstNumber + secondNumber;
  return result;
}

console.log("Test- should result in 7", addNumbers(2, 5));
console.log("Test- should result in 10",addNumbers(15, -5));



// 4. Function to multiply three numbers & return the result
function multiplyThree(num1, num2, num3){
  let result = num1 * num2 * num3;
  return result;
}
console.log("Test- should result in 8",multiplyThree(2, 2, 2));
console.log("Test- should result in 100",multiplyThree(10, 5, 2));


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }else {
    return false;
  }
    
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast( array ) {
  if(array){
  return array[array.length-1];
} else{
 return false;
}
}

///testing arrays
let array1=[];
let array2=['first', 'middle', 'last'];
let array3=['beginning', 'middle', 'end']

console.log(getLast(array1));
console.log('Test- result should be "last"', getLast(array2));
console.log('Test- result should be "end"', getLast(array3));


// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 

function find( value, array ){
for(let i=0; i<array.length; i++){
  if(array[i]===value){
    return true;
  }else{
    return false;
  }
}
};

let loopArray1= [2, 3, 5, 9];
console.log('Test- expect true' , find(2, loopArray1))

let loopArray2= ['here', 'there', 'everywhere'];
console.log('Test- expect false', find('anywhere', loopArray2))

let loopArray3= [9, 11, 2];
console.log('Test- expect false', find('9', loopArray3))



// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
if(string[0]=== letter){
  return true;
}else{
  return false;
}

}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0
  // TODO: loop to add items
for(let i=0; i<array.length; i++){
  sum += array[i]
}
  return sum;
}

let sumArray1 = [2, 2, 2, 2, 2];
console.log('Test- expect 10', sumAll(sumArray1));

let sumArray2 =[1, 9, 8, 2];
console.log('Test- expect 20',sumAll(sumArray2));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.


function positiveArray(array){
  let positiveNum = [];
  if(positiveNum){
    positiveNum = array.filter(num => num > 0);  
    return positiveNum;
  }else{
    return positiveNum;
  }
}

let numArray1 =[ 2, 10, -1, -9];
console.log("New array:", positiveArray(numArray1), "Old array:", numArray1);

let numArray2 =[-.01, .25, 100, 92, -8];
console.log("New array:",positiveArray(numArray2), "Old array:", numArray2);

let numArray3 = [];
console.log(positiveArray([]), numArray3);








// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

//I selected a problem from CodeWars. The challenge is to figure out how many pages need to be printed for the class. If an argument is less than 0, the function should return 0. 



function paperwork(pages, classmates) {
  if(pages<0 || classmates<0){
    return 0;
  }else{
    let pagesToPrint = pages*classmates;
    return pagesToPrint;
  }
    
}

console.log("I should print", paperwork(4, 2), "pages.");
console.log("I should print", paperwork( -1, 2), "pages.");