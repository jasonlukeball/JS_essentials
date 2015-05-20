var messageArray = ["The true heart of California","Tours as diverse as California itself","Explore our world your way"];
var messageIndex = 0;

function deeperFunction() {
	// perform loop
	for (var i = 0; i < 500; i++) {
		// do stuff.
		var foo = i * (Math.random());
		var bar = foo;
		// more exciting code.
	}
}

function simpleFunction() {
	// jump into a deeper function
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

function changeMessage() {
	simpleFunction();
}

window.onload = function() {
	setInterval(changeMessage,1000);
};


