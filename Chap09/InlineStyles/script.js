var currentPos = 0;
var intervalHandle;

function beginAnimate() {
    // SET START POSITION OF THE <join> DIV
	document.getElementById("join").style.position = "absolute";
	document.getElementById("join").style.left = "0px";
    document.getElementById("join").style.top = "100px";
    // CALL THE "animateBox" FUNCTION EVERY 50ms
    intervalHandle = setInterval(animateBox,50);
}

function animateBox() {
    // CALCULATE NEW POSITION
    currentPos+=5;
    // SET NEW POSITION
    document.getElementById("join").style.left = currentPos + "px";

    if ( currentPos > 900) {
        // STOP animateBox FUNCTION FROM REPEATING
        clearInterval(intervalHandle);
        // RESET STYLES
        document.getElementById("join").style.position = "";
        document.getElementById("join").style.left = "";
        document.getElementById("join").style.top = "";
    }


}

window.onload =  function() {
    // BEGIN ANIMATION IN 1 SECOND
	setTimeout(beginAnimate,1000);
};

