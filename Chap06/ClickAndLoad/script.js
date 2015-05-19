
// window.onload
// By default, it is fired when the entire page loads, including its content (images, css, scripts, etc.)

// document.onload
// It is called when the DOM is ready which can be prior to images and other external content is loaded.


// DO THIS AFTER THE WINDOW COMPLETES LOADING (INCLUDING ALL EXTERNAL IMAGES AND CONTENT)
window.onload = function() {
    // GET ALL MY EVENT HANDLERS READY
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
    };


    // -------------------------
    // CLICK ANYWHERE ON THE DOCUMENT
    // -------------------------
    // ANY OTHER onclick EVENT WILL STILL FIRE THIS
    // BECAUSE WE ARE STILL CLICKING ON THE DOCUMENT
    document.onclick = function() {
        alert("You clicked somewhere in the document");
    };



}



