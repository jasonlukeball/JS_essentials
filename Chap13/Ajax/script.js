
// --------------------------------
// 1. CREATE THE REQUEST
// --------------------------------

var myRequest;

// CHECK FOR FEATURE AVAILABILITY IN THIS BROWSER
// TELLS SPECIFICALLY WHAT TYPE OF REQUEST OBJECT TO USE

if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    myRequest=new XMLHttpRequest();
    } else {
    // code for IE6, IE5
    myRequest=new ActiveXObject("Microsoft.XMLHTTP");
}


// TELL THE REQUEST WHAT TO DO
myRequest.open("GET","simple.txt",true);

// SEND THE REQUEST
// AFTER THE REQUEST COMES BACK THIS WILL CALLBACK THE myRequest.onreadystatechange
myRequest.send();



// --------------------------------
// 2. HANDLE THE REQUEST RESPONSE
// --------------------------------

// CREATE AN EVENT HANDLER FOR OUR REQUEST TO CALL BACK WHEN COMPLETE

myRequest.onreadystatechange=function() {
    if (myRequest.readyState==4 && myRequest.status==200) {
        // REQUEST SUCCESSFUL
        // CREATE A <p> TAG WITH THE TEXT FROM "simple.txt"

        // CREATE <p> TAG
        var p = document.createElement("p");
        // GET RESPONSE TEXT FROM AJAX REQUEST
        var t = document.createTextNode(myRequest.responseText);
        // GIVE THE <p> TAG THE TEXT FROM THE AJAX RESPONSE
        p.appendChild(t);
        // ACTUALLY CREATE THE <p> TAG BY APPENDING IT TO THE "#mainContent" <div>
        document.getElementById("mainContent").appendChild(p);
    }
};








/*


// Simple Ajax example.

// 1: Create the request 
var myRequest;

// feature check!
if (window.XMLHttpRequest) {  // does it exist? we're in Firefox, Safari etc.
    myRequest = new XMLHttpRequest();
} else if (window.ActiveXObject) { // if not, we're in IE
    myRequest = new ActiveXObject("Microsoft.XMLHTTP");
}

// 2: create an event handler for our request to call back
myRequest.onreadystatechange = function(){
    console.log("We were called!");
};

// open and send it
myRequest.open('GET', 'simple.txt', true);
// any parameters?
myRequest.send(null);

*/