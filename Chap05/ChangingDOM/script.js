// -----------------------------------------------------
// CHANGING DOM ELEMENTS
// -----------------------------------------------------


// GET THE MAIN CONTENT DIV (#mainContent)
var mainContent = document.getElementById("mainContent");

// GIVE THE #mainContent an "align" property with the value "right"
mainContent.setAttribute("align","right");

// GET THE MAIN H1 TAG'S INNER HTML ("Explore our world your way")
mainH1 = document.getElementById("exploreOurWorld");
console.log(mainH1.innerHTML);


// GET THE INNER HTML OF THE SIDE BAR (Monthly Specials Area)
var sidebar = document.getElementById("sidebar");
console.log(sidebar.innerHTML);

// GET ALL H1 TAGS FROM WITHIN THE #mainContent div
var arrayOfH1s = mainContent.getElementsByTagName("h1");
console.log(arrayOfH1s);

// REPLACE THE INNER HTML OF THE FIRST (AND ONLY) H1 TAG
arrayOfH1s[0].innerHTML = "Wow, JavaScript can do that?";


