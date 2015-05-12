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








