(function(){

    "use strict";

    /* const boba = ['myImg','myImg2','myImg3']; */

    function setUpModal(imgName) {
    
        // Get the modal
        const modal = document.getElementById(imgName + "Modal");
    
        // Get the image and insert it inside the modal - use its "alt" text as a caption
        const img = document.getElementById(imgName);
        const modalImage = document.getElementById(imgName + "boba"); // concatenation - variable + id name
        const captionText = document.getElementById(imgName + "caption");
        img.onclick = function(){
        modal.style.display = "block";
        modalImage.src = this.src;
        captionText.innerHTML = this.alt;
        }
    
        // Get the <span> element that closes the modal
        const span = document.getElementById(imgName + "close");
    
        // When the user clicks on <span> (x), close the modal
        span.onclick = function() { 
        modal.style.display = "none";
        }
    }
    
        setUpModal("myImg") 
        setUpModal("myImg2") 
        setUpModal("myImg3") 

}());



    

