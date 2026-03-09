const imageContainer = document.getElementById('gallery_image');



imageContainer.addEventListener("mouseenter", function() {
    const imageDescription = document.createElement('div');
    imageDescription.style.backgroundColor = "#000";
    imageDescription.style.filter.brightness = "80%";
    imageDescription.style.width = "40%";
    imageDescription.style.height = "auto";
    console.log("Mouse entered image");
});
   