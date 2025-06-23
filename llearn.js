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

// prototypal inheritance: this is a way to create a new object that inherits properties and methods from an existing object.
//  This is done by setting the prototype of the new object to the existing object.

//eg we can say that the player one and player two inherits from the player.prototype
// which allow them to access functions like sayhello

// deeper into functions by creating a Rock paper scissors game