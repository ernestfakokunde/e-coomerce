// introduction
// there are multiple ways of definng object but in ost cases it is best to use the object literal syntax
// eg
/*
const myObject = {
  property:'value',
  otherProperty: 42,
  'obnoxios property': function() {
    // do stuff
  }
};

// there are two ways to get information from an object
// the dot notation and the bracket notation

// the dot notation
myObject.property; // 'value'

// the bracket notation
myObject['obnoxios property'](); // calls the function

//objects as a design pattern
// eg from a tic tac game 

// using the object literal syntax to define a tic tac toe game
const PlayerOneName = 'tim';
const PlayerTwoName = 'tom';
const playerOnemarker = 'X';
const playerTwomarker = 'O';

// eg 2

const playerOne ={
  name: 'tim',
  marker: 'X',
};
const playerTwo = {
  name: 'tom',
  marker: 'O',
};

// the first method is more concise and easier to read, but the second method is more flexible and allows for more complex objects.
// which brings us to Object constructors
// Object constructors are functions that create objects. They are used to create multiple instances of the same object type.
// note that by convention it is named with an uppercase letter

//eg


function player1(name,marker){
  this.name = name;
  this.marker = marker;
}
// this is a constructor function that creates a player object with a name and marker property
// Now to create a new player object, we use the `new` keyword followed by the constructor function:

const Player = new player('tim', 'X');

// then if we say console.log(Player.name); // 'tim'

// just likth object literal syntax we can also add functions

//eg

/*function player( name, marker);{
  this.name = 'tom';
  this.marker = 'O';

  this.sayName = function() {
    console.log(this.name);
  };
}

const playerOne = new player('tim', 'X');
const playerTwo = new player('tom', 'O');

playerOne.sayName(); // 'tim' 
playerTwo.sayName(); // 'tom'

playerOne.marker; // 'X'
playerTwo.marker; // 'O'
*/

// Excercise
// write a constructor for making Books it shoud have a book title, author, number of pages and if its been read already
/*

function Book ( title, author, pages, read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read || false; // default to false if not provided
  this.info = function(){
     return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read === 'read' || this.read === true ? 'read' : 'not read yet'}`;
  }
}

const BookOne = new Book('Tyrion', 'Ayo',53, 'read');
 console.log(BookOne.info());

 // The prototype: the prototype is another objets that the original object inherits from.it allows us to add properties and methods to all instances of the object without having to redefine them for each instance.

 // All objects in jvascript have a prototype by using the Object.getPrototypeOf() method, we can access the prototype of an object.

 // what does defining on the prototype mean?
 // It means that we can add properties and methods to the prototype of an object, which will be available to all instances of that object.
 // This is useful for adding methods that are common to all instances, without having to redefine them for each instance.

//EG

player.prototype.sayName = function() {
  console.log('hello im a player');
}

// for each of the object instances created using the player constructor, we can now call the sayName method:

//eg assuming player1 and player2 are instances of the player constructor
// we then say

player1.sayName(); // 'hello im a player'
player2.sayName(); // 'hello im a player'
*/

// prototypal inheritance: this is a way to create a new object that inherits properties and methods from an existing object.
//  This is done by setting the prototype of the new object to the existing object.

//eg we can say that the player one and player two inherits from the player.prototype
// which allow them to access functions like sayhello

// deeper into functions by creating a Rock paper scissors game

//Map and filter function

//The filter takes in two parameters : the value,index and the function.
//eg lets see below

let Arr = [1,3,-8,7,9];

Arr.filter((value) =>{
  if(value >= 0){
    return true;
  }else {
    return false;
  }
})
//But instead of writing this long value one can write it as 

 console.log(Arr.filter((value) =>{
  return value >= 0;
}))

// filter : it filter data based on a condition.

// Map: it also takes in two parameters just like the filter
//the value and the index

// map creates a new array and the the value to which the function was passeed
// it transform an array into another array
//eg

console.log(Arr.map((value)=>{ return value + 10;}))

//shortcuts for arrow functions 
//since the arrow functions has one parameters the curly brackets can be removed
// sice its on one line the curly braces and  return do not matter again
Arr.map( value => value + 3)

//Closure: this happens when( if a function has acces to a value itll always have access to you)

 const multiply = (num1,num2)=> num1 * num2;
 
console.log(multiply(3,5));

//12k

 let nums = [1,3,-4,4]
let no = 0;

function countPositive(nums){
  nums.forEach(value => {
    if(value >  0){
      no ++
    }
  });
  return no;
}
console.log(countPositive(nums))


let arrays = [ 2,3,4,5]
function addNum(arrays, num){
 return arrays.map( value => value + num)
}
console.log(addNum(arrays,45))

//12h

let food = ['apple','eggs','sleeve', 'eggs','pop', 'eggs','red']

/*
function removeEggs(food){
  return food.filter(foods => foods !== 'eggs')
}
console.log(removeEggs(food))*/

// To remove the first two eggs we put a counter in our 

function removeFirsttwo(food){
let count = 0;
  return food.filter(value =>{
    if( value === 'eggs' && count < 2){
      count ++;
      return false;
    }else{
      return true
    }
  })
}
console.log(removeFirsttwo(food))