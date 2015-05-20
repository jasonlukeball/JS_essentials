
function prepareEventHandlers() {
	document.getElementById("mainContent").onclick = function() {
        // WHEN THE "mainContent" DIV IS CLICKED, SET THE CLASS
        if ( document.getElementById("mainContent").className == "example") {
            // IT ALREADY HAS THE "example" CLASS, SO CLEAR IT
             document.getElementById("mainContent").className = "";
        } else {
            // IT DOES NOT HAVE A CLASS, GIVE IT THE "example" CLASS
           document.getElementById("mainContent").className = "example";
        }
	};
}

window.onload =  function() {
	prepareEventHandlers();
};