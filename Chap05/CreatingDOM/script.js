// -----------------------------------------------------
// CREATING DOM ELEMENTS
// -----------------------------------------------------

// STEPS
// 1. CREATE THE ELEMENT
// 2. ADD CONTENT TO NEW ELEMENT
// 3. ADD IT TO THE DOCUMENT


// 1. CREATE TWO NEW ELEMENTS
var newHeading = document.createElement("h1");
var newParagraph = document.createElement("p");

// 2. ADD CONTENT TO THESE NEW ELEMENTS USING innerHTML
newHeading.innerHTML = "Did You Know?";
newParagraph.innerHTML = "California produces over 17 million gallons of wine each year!";

// 3. ADD NEW ELEMENTS TO THE DOCUMENT
document.getElementById("trivia").appendChild(newHeading);
document.getElementById("trivia").appendChild(newParagraph);



// ADD A NEW <li> TO THE #homeNav UNORDERED LIST

// 1. GET THE ELEMENT THAT WE WANT TO INSERT A CHILD INTO
var mainTitle = document.getElementById("homeNav");

// 2. CREATE THE NEW <li>
var newLi = document.createElement("li");

// 3. GIVE THE NEW <li> a VALUE
newLi.innerHTML = "Testing 1,2,3";

// 4. ADD NEW <li> TO THE DOCUMENT
homeNav.appendChild(newLi);