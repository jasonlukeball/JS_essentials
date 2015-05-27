// Simple prototype example

// FUNCTION TO CREATE A NEW OBJECT


function Player(name, age) {
    this.name = name;
    this.age = age;
}

// CREATING NEW FUNCTIONS ONTO THE OBJECT
Player.prototype.loginfo = function() {
    // LOGS THE PLAYER NAME
    console.log ("Hi, my name is " + this.name);
};

Player.prototype.addAge = function() {
    // ADDS A YEAR ONTO THEIR AGE
    this.age++
};


var fred =  new Player("Fred", 33);
console.log (fred);

fred.loginfo();
fred.addAge();


console.log("------------------");
console.log (fred);















