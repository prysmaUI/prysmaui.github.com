(function(){

"use strict";



// listen for the submission of the form
    document.getElementById("myForm").addEventListener("submit", function(event){
    // prevent the default behavior
    event.preventDefault();

    // get all the text fields from the form
    const formData = document.querySelectorAll("input[type=text]");
    // create an array to hold values from the form
    const words = [];

    //loop through the fields and add the words to the array, one at a time.
    for( var i=0; i<formData.length; i++){
        words.push(formData[i].value);    
    }
    //You can see the array in the console, if you want...
    console.log(words);

    //run a function to put the words into the madlib... Function below...
    //Pass the array of words the user typed into the function
    makeMadLib(words);

});

//This function takes an array input, then constructs the madlib, peppering
//in the user's words where necessary.
function makeMadLib(theWords){
    const madlib = `The ${theWords[0]} ${theWords[1]} and ${theWords[2]} ${theWords[3]} ${theWords[4]} `;

    //Get the madlib container
    const mlContainer = document.getElementById('madlib');

    //Change the guts of the container to your madlib
    mlContainer.innerHTML = `<p>${madlib}</p>`;

    //change the class on the madlib container so you can see it.
    mlContainer.setAttribute("class", "visible");
}

}());

//any function outside of global function
//function to set for an auto-refresh mechanism
function AutoRefresh( t ) {
    setTimeout("location.reload(true);", t);
 }

 //this function tells user to please finish their thoughts
 function validateForm() {
    const fragment = document.forms["myForm"]["pfyt"].value;
    if (fragment == "") {
        alert("This is a fragment. Please refresh the page and try again.");
        return false;
    }
}

 //this function is just an alert under tooltips

 function myFunction(){
    alert("This page will refresh in 20 seconds");
    }