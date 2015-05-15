
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



// -----------------------------------------------------
// ADD A NEW <li> TO THE #quickNav UNORDERED LIST
// -----------------------------------------------------


// 1. GET THE ELEMENT THAT WE WANT TO INSERT A CHILD INTO
var quickNavUl = document.getElementById("quickNav");

// 2. CREATE A NEW <li> ITEM TO INSERT
var newLi = document.createElement("li");

// 3. CREATE A NEW <a> TAG TO INSERT INTO THE <li>
var newA = document.createElement("a");

// 4. SET THE href VALUE FOR THE <a> TAG
a.setAttribute('href', "http://www.msn.com");

// 5. SET THE TEXT VALUE FOR THE <a> TAG
a.textContent = "This is a new link!";

// 6. ADD THE NEW <li> TO THE UNORDERED LIST
quickNavUl.appendChild(newLi);

// 7. ADD THE NEW <a> TO THE NEW <li>
newLi.appendChild(newA);
