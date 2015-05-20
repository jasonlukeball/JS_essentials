// show and hide sections of a form
function prepareHandlers() {
    // WHEN THE "brochures" CHECKBOX IS CLICKED/CHANGED
	document.getElementById("brochures").onchange = function() {

		if (document.getElementById("brochures").checked) {
            // THE CHECKBOX IS CHECKED
            // SET THE STYLE "display" ATTRIBUTE WITH THE "block" PROPERTY
			// THIS SHOWS THE "tourSelection" DIV
			document.getElementById("tourSelection").style.display = "block";

		} else {
            // THE CHECKBOX IS UNCHECKED
            // HIDE THE "tourSelection"  DIV
			document.getElementById("tourSelection").style.display = "none";
		}
	};
	// HIDE THE "tourSelection" DIV BE DEFAULT WHEN THE PAGE LOADS
	document.getElementById("tourSelection").style.display = "none";
}

window.onload =  function() {
	prepareHandlers();
};

