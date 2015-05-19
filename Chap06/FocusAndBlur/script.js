

// GET THE EMAIL <input> FIELD
var emailField = document.getElementById("email");
console.log(emailField);


// onfocus is LIKE ON OBJECT ENTER

emailField.onfocus = function() {
	if ( emailField.value == "your email") {
        // IF THE VALUE FOR emailField is "you email"
        console.log("emailField.onfocus event just fired");
        // SET THE FIELD VALUE TO NULL
		emailField.value = "";
        console.log("emailField was set to null");
	}
};


// onblur is LIKE ON OBJECT EXIT

emailField.onblur = function() {
	if ( emailField.value == "") {
        // ON EXIT, IF EMPTY SET TO "your email"
        console.log("emailField.onblur event just fired");
		emailField.value = "your email";
        console.log("emailField was just set to \"your email\" ");
	}
};
