

// TIMES ARE IN MILLISECONDS

// ------------------------------
// setTimeout - SINGLE EVENT
// ------------------------------

function simpleMessage() {
	alert("2 seconds has passed");
}

// DISPLAY SIMPLE MESSAGE ONCE AFTER 2 SECONDS
setTimeout(simpleMessage, 2000);



// ------------------------------
// setInterval - REPEATING EVENT
// ------------------------------

// GET THE MAIN IMAGE
var myImage = document.getElementById("mainImage");

// SET UP AN ARRAY OF IMAGE FILE NAMES
var imageArray = ["_images/overlook.jpg","_images/winery_sign.jpg","_images/lunch.jpg",
				  "_images/bigSur.jpg","_images/flag_photo.jpg","_images/mission_look.jpg"];

// SET INDEX TO 0
var imageIndex = 0;

// SET THE MAIN IMAGE ATTRIBUTE (WHICH IMAGE TO SHOW)
function changeImage() {
	myImage.setAttribute("src",imageArray[imageIndex]);
	imageIndex++;
	if (imageIndex >= imageArray.length) {
		imageIndex = 0;
	}
}

// CHANGE IMAGE EVERY SECOND
var myInterval = setInterval(changeImage,1000);
//var myInterval = setTimeout(changeImage,1000);


// CLICKING THE IMAGE
myImage.onclick =  function() {
    // CLEAR THE INTERVAL (STOP THE TIMER)
    clearInterval(myInterval);
};

