



// ANY TIME YOU CLICK ANYWHERE ON THE DOCUMENT
 document.onclick = function() {
 	alert("You clicked somewhere in the document");
 };


// DO THIS AFTER THE WINDOW LOADS
// GET ALL MY EVENT HANDLERS READY
window.onload = function() {
    // prep anything we need to
	prepareEventHandlers();
};




function prepareEventHandlers() {

    // -------------------------
    // MAIN IMAGE ONCLICK EVENT
    // -------------------------

    // 1. GET THE "MAIN IMAGE" <img> TAG
	var myImage = document.getElementById("mainImage");
    // 2. LISTEN FOR CLICK EVENT
	myImage.onclick =  function() {
        // IF CLICKED
		alert("You clicked the image");
	};

    // -------------------------
    // TOP <H1> ONCLICK EVENT
    // -------------------------

    // 1. GET THE #mainArticle <div>
    var theMainArticle = document.getElementById("mainArticle");
    // 2. GET ALL THE <H1> TAGS INSIDE THE #mainArticle
    var h1ElementsinsideTheMainArticle = theMainArticle.getElementsByTagName("h1");
    // 3. GET THE FIRST <H1> TAG
    var firsth1 = h1ElementsinsideTheMainArticle[0];
    console.log (firsth1);
    // 4. LISTEN FOR CLICK EVENT ON THE FIRST <H1> TAG INSIDE THE #mainArticle
    firsth1.onclick = function() {
        // IF CLICKED
        alert("You clicked the h1 tag");
    }

}

