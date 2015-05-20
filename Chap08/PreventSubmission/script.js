// GET AN ENTIRE FORM
// document.form.formID

// GET ANY FORM ELEMENT (INPUT FIELD, SUBMIT BUTTON)
// document.form.formID.elementID


// HANDLE THE FORM SUBMIT EVENT
function prepareEventHandlers() {
    // WHEN THE SUBMIT BUTTON IS CLICKED
	document.getElementById("frmContact").onsubmit = function() {
		// PREVENT FORM FROM BEING SUBMITTED IF EMAIL IS BLANK

		if (document.getElementById("email").value == "") {
            // SET AN ERROR MESSAGE IN THE #errorMessage TAG
			document.getElementById("errorMessage").innerHTML = "Please provide at least an email address!";
			// TO STOP THE FORM FROM SUBMITTING
			return false;
		} else {
			// CONTINUE WITH FORM SUBMISSION
            // REMOVE THE ERROR MESSAGE (NOT NECESSARY)
			document.getElementById("errorMessage").innerHTML = "";
			return true;
		}
	};
}

// WHEN THE WINDOW FINISHES LOADING - SETUP EVENT HANDLERS
window.onload =  function() {
	prepareEventHandlers();
};

