// -------------------------------------------------------------------
// JAVASCRIPT REFERENCE
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
// -------------------------------------------------------------------



// ------------------
// VARIABLES
// ------------------
var myVariable = "something";
var $myVariable = "something";

// THESE ARE DIFFERENT VARIABLES

alert(myVariable);
alert($myVariable);



// ------------------
// CONDITIONALS
// ------------------

if ( condition ) {
    // true
    // execute this code
} else {
    // false
    // execute some other code
}


var amount = 500;

if ( amount < 1000 ) {
    alert ("it is less");
} else {
    alert ("it is more" )
}



// ------------------
// OPERATORS
// ------------------

// ASSIGNMENT OPERATOR
// =        EQUAL

// COMPARISON OPERATORS
// ==       EQUAL TO
// ===      EXACT (CHECKS TO SEE IF THE VARIABLE IS THE SAME VALUE AND THE SAME TYPE IE (A = 5) === ("A" = 5) IS FALSE)
// !=       NOT EQUAL
// >        GREATER THAN
// >=       GREATER THAN OR EQUAL TO
// <        LESS THAN
// <=       LESS THAN OR EQUAL TO

// LOGICAL OPERATORS
// &&       AND
// ||       OR

// %        MODULUS/GIVE ME THE REMAINDER

// SHORTHAND NUMERICAL
// ++       ADD
// +-       MINUS

a = 1 ;
a++ ;       // a = 2 HERE


// ARITHMETIC OPERATORS
// +        ADD
// -        MINUS
// /        DIVIDE
// *        MULTIPLY

// OPERATORS ON A VARIABLE (SHORTHAND)

// LONG WAY
score = score + 10;
// SHORTHAND
score += 10;

// +=       ADD
// -=       MINUS
// /=       DIVIDE
// *=       MULTIPLY

// ORDER OF OPERATIONS
result = 5 + 5 * 10;    // = 55
result = ( 5 + 5 ) * 10;    // = 100



// ------------------
// CONSOLE LOGGING
// ------------------

// DIFFERENT BADGES CAN BE DISPLAYED IN THE LOG

var test = 100;
console.log ( test );
console.info ( test );
console.warn ( test );
console.error ( test );



// ------------------
// LOOPS
// ------------------

// WHILE LOOP

while ( checkCondition ) {
    // do something;
    // incrementIndex;
}

// WHILE LOOP EXAMPLE

var myNumber = 1;

while ( myNumber < 10 ) {
    console.log( myNumber );
    myNumber++;
}


// DO WHILE LOOP

do {
    // do something ;
    // incrementIndex
} while ( checkCondition );

// DO WHILE LOOP EXAMPLE

myNumber = 1;

do {
    console.log ( myNumber );
    myNumber++;
} while ( myNumber < 10 );


// FOR LOOP

for ( setIndex; checkCondition; incrementIndex ) {
    // do something
}

// FOR LOOP EXAMPLE

for ( myNumber = 1; myNumber < 10; myNumber++ ) {
    console.log ( myNumber );
    myNumber++;
}


// BREAK WILL EXIT THE LOOP

for ( myNumber = 1; myNumber < 10; myNumber++ ) {
    console.log ( myNumber );
    myNumber++;
    if ( myNumber == 5 ) {
        // EXIT THE LOOP
        break;
    } else {
        // CONTINUE
    }
}


// CONTINUE WILL SKIP OVER THIS ITERATION

for ( myNumber = 1; myNumber < 10; myNumber++ ) {
    if ( myNumber == 5 ) {
        // SKIP THIS ITERATION
        continue;
    } else {
        // CONTINUE
        console.log ( myNumber );
        myNumber++;
    }
}


// ------------------
// ARRAYS
// ------------------

// DEFINE AN EMPTY ARRAY (METHOD 1)
var multipleValues = [];
// DEFINE AN EMPTY ARRAY (METHOD 2)
var multipleValues2 = new Array();
// DEFINE AN EMPTY ARRAY (METHOD 3)
var multipleValues3 = Array();

// DEFINE AN ARRAY WITH 5 SLOTS (I WILL PROBABLY NEVER USE THIS)
var multipleValues4 = Array(5);


// USE INDEX TO ASSIGN VALUES TO THE ARRAY

multipleValues[0] = 50;
multipleValues[1] = 60;
multipleValues[2] = "String";

console.log (multipleValues[2]);


// LOAD MULTIPLE VALUES INTO AN ARRAY
var anotherArrray = [50, 60, "String"];


// COUNT VALUES IN AN ARRAY
var lengthOfArray = multipleValues.length;
console.log(lengthOfArray);


// ------------------
// ARRAY METHODS
// ------------------

// someObject.someMethod();

var myArray = [10,20,30];

// REVERSE THE ORDER OF THE ARRAY
console.log(myArray.reverse);

// OUTPUT ALL VALUES IN ARRAY AS A SINGLE STRING
console.log(myArray.join);

// SORT ARRAY
console.log(myArray.sort);



// --------------------
// NUMBERS
// --------------------

// JAVASCRIPT IS NOT TIGHTLY TYPE CAST
// ALL NUMBERS ARE STORED AS FLOATS


var foo = 5;
var bar = "something";
console.log ( foo * bar);
// THIS MAKES NO SENSE AND JAVASCRIPT WILL GIVE US NaN (NOT A NUMBER)

foo = 5;
bar = "5";
console.log ( foo + bar);
// THIS WILL GIVE 55
// IF ANY VARIABLE IS A STRING, JAVASCRIPT TREATS THIS AS CONCATENATION

foo = 5;
bar = "5";
console.log ( foo + Number(bar));
// USE THE "NUMBER" FUNCTION TO CAST THE STRING "5" AS A NUMBER
// OUTPUTS 10

foo = 5;
bar = 5;
console.log ( foo + String(bar));
// USE THE "STRING" FUNCTION TO CAST THE STRING "5" AS A NUMBER
// OUTPUTS 55


// ROUND
var number = 200.6;
Math.round(number);

// MAX
Math.max(10,20,30);

// MIN
Math.min(10,20,30);



// --------------------
// STRINGS
// --------------------


var myString = "This is a string";

// ESCAPE STRINGS
var anotherString = "He said \"That's fine!\""
console.log (anotherString);

// LENGTH
console.log (myString.length);

// UPPERCASE
console.log (myString.toUpperCase);

// LOWERCASE
console.log (myString.toLowerCase);

// SPLIT (LIKE SUBSTITUTE)
// SPLIT THE STRING AT EVERY SPACE, RETURNS AN ARRAY
console.log (myString.split(" "));

// INDEX OF (LIKE POSITION)
// THIS IS CASE SENSITIVE
// RETURNS -1 IF NOT FOUND
myString = "Hi Jason";
console.log (myString.indexOf("Jason"));



// myString.slice(startPosition,endPosition);

console.log ( myString.slice(3,8));
// RETURNS "Jason"
// STARTS THE SPLIT AFTER THE startPosition "Hi |Jason"

// COMPARING IF STRINGS ARE EQUAL IS CASE SENSITIVE


// --------------------
// DATES
// --------------------










