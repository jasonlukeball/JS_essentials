// ------------------------
// ADD CLASSES TO ELEMENTS
// ------------------------

// OLD WAY
// GET #mainArticle <div> and give it the class "highlight"
//document.getElementById("mainArticle").className = "highlight";

// JQUERY WAY
// GET #mainArticle <div> and give it the class "highlight"
jQuery("#mainArticle").addClass("highlight");


// FIND ALL ELEMENTS WITH THE CLASS "tourDescription" AND GIVE THEM THE CLASS "highlight"
jQuery(".tourDescription").addClass("highlight");

// FIND ALL ELEMENTS WITH A <li> TAG AND GIVE THEM THE CLASS "highlight"
jQuery("li").addClass("highlight");

// FIND THE LAST <li> AND GIVE IT THE CLASS "highlightRed"
jQuery("li:last").addClass("highlightRed");


// FIND A PARAGRAPH CONTAINING THE WORD "packages" AND GIVE IT THE CLASS "highlightRed"
jQuery("p:contains('packages')").addClass("highlightRed");


// ------------------------
// EFFECTS
// ------------------------

// HIDE ALL PARAGRAPHS, DURATION 1 SECOND
// $("p").hide(1000);

//FADE OUT ALL <h2> TAGS, DURATION 2 SECOND
// $("h2").fadeOut(2000);


// ------------------------
// EVENTS
// ------------------------


// CLICK EVENT
// ADD CLICK EVENT TO THE "#pageID" <h1>
$("#pageID").click(function() {
    // WHEN CLICKED, CHANGE THE TEXT TO "You clicked me!"
   $("#pageID").text("You clicked me!");
});


// ADD CLICK EVENT TO ALL <h2> TAGS
$("h2").click(function() {
    // WHEN ANY <h2> IS CLICKED, CHANGE "this" <h2> TEXT TO "You clicked me!"
   $(this).text("You clicked me!");
});

// CLICK EVENT ON ALL <p> TAGS
$("p").click(function() {
    // WHEN CLICKED, FADE OUT OVER 2 SECONDS
  $(this).fadeOut(2000);
});

// PAGE/WINDOW LOAD EVENT
$(document).ready(function () {
    // WHEN THE DOCUMENT IS FULLY LOADED, CHANGE THE TEXT OF THE "#pageID" <h1> TO "The DOM is fully loaded."
  $("#pageID").text("The DOM is fully loaded.");
});

// PAGE/WINDOW LOAD EVENT
$(document).ready(function () {
    // ADD RED COLOR TO THE "#pageID" <h1> TAG
   $("#pageID").css("color","red");
});