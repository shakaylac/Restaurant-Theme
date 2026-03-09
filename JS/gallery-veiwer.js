const imageContainer = document.getElementById('image_container');
const imageDescription = document.getElementById('image_description');


function showImageDescription() {
    imageDescription.style.display = "block";
    console.log("mouse hovers over image");
}

function hideImageDescription() {
    imageDescription.style.display = "none";
    console.log("mouse leaves the image");
}
   

imageContainer.addEventListener("mouseenter", showImageDescription);
imageContainer.addEventListener("mouseleave", hideImageDescription);