


// CREATE MESSAGE ARRAY
var messageArray = [    "Message[0] - You",
                        "Message[1] - Are",
                        "Message[2] - Rockin",
                        "Message[3] - It"];


// INITIALIZE INDEX TO ZERO
var messageIndex = 0;



function deeperFunction() {
    // THIS FUNCTION IS JUST TO PERFORM A LOOP 500 TIMES
	// EACH ITERATION STARTS THEN CONTINUES THE SIMPLE FUNCTION LOGIC
	for (var i = 0; i < 500; i++) {
		// do stuff.
		var foo = i * (Math.random());
		var bar = foo;
		// CONTINUE SIMPLE FUNCTION
	}
}



function simpleFunction() {
    // JUMP INTO THE DEEPER FUNCTION (JUST HANDLES THE LOOP)
	deeperFunction();
    // IF WE'VE REACHED THE LAST MESSAGE IN THE ARRAY,
    // RESTART FROM THE FIRST
    if (messageIndex == messageArray.length) {
        messageIndex = 0;
    }
    // GET A MESSAGE FROM THE ARRAY
	var newMessage = messageArray[messageIndex];
    // GET THE ELEMENT TO UPDATE
	var messageElement = document.getElementById("mainMessage");
    // UPDATE THE NEW ELEMENT
	messageElement.innerHTML = newMessage;
    // INCREMENT THE INDEX
	messageIndex++;
}



window.onload = function() {
    // AFTER THE WINDOW AND ALL DEPENDENCIES HAVE COMPLETELY LOADED
    // CALLS SIMPLE FUNCTION EVERY 1 SECOND
	setInterval(simpleFunction,1000);
};


