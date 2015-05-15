// -----------------------------------------------------
// GET ELEMENTS
// -----------------------------------------------------


var mainTitle = document.getElementById("mainTitle");
// THIS IS THE TOP H1 TAG
// RETURNS A LINK TO "<a id="mainTitle" href="index.htm" title="Return to the home page">Welcome to Explore California!</a>"


console.log ("This is an element of type:", mainTitle.nodeType);
// THIS CONSOLE LOG RETURNS "This is an element of type: 1"
// TYPE 1 IS AN ELEMENT NODE


console.log("The Inner HTML is: ", mainTitle.innerHTML);
// RETURNS THE HTML TEXT


console.log("Child Nodes: ", mainTitle.childNodes);
// RETURNS AN ARRAY CONTAINING THE CHILD NODES


console.log("Child Node Count: ", mainTitle.childNodes.length);
// RETURNS A COUNT OF CHILD NODES (THE

// FINDS HOW MANY LINKS ARE ON THE PAGE
var myLinks = document.getElementsByTagName("a");
console.log("Links: ", myLinks.length);


// -----------------------------------------------------
// IF YOU WANT TO GET ALL THE ELEMENTS WITHIN AN ELEMENT
// -----------------------------------------------------

// 1. GET THE PARENT ELEMENT
var theFooterMenu = document.getElementById("footerMenu");

// 2. GET ALL THE <li> TAGS FROM theFooterMenu (#footerMenu)
var listItemsInFooterMenu = theFooterMenu.getElementsByTagName("li");
console.log (listItemsInFooterMenu);

// 3. LOOP THROUGH AND GET THE INNER HTML FOR EACH <li> TAG IN THE #footerMenu
var arrayLength = listItemsInFooterMenu.length;
for (var i = 0; i < arrayLength; i++) {
    console.log(listItemsInFooterMenu[i]);
}

