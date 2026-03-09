const imageContainer = document.getElementById('gallery_image');
const imageDescription = document.getElementById('image_description');


function showImageDescription() {
    imageDescription.style.display = "block";
}

function hideImageDescription() {
    imageDescription.style.display = "none";
}
   

imageContainer.addEventListener("mouseenter", showImageDescription);
imageContainer.addEventListener("mouseleave", hideImageDescription);