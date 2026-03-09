const imageContainer = document.getElementById('image_container');
const galleryDisplayContainer = document.getElementById('gallery_display_container')

function openGalleryDisplay() {
    const galleryDisplay = document.createElement('div');
    galleryDisplay.className = "gallery-display";
    galleryDisplay.setAttribute = ("id", "gallery_display");

    const exitButton = document.createElement('button');
    exitButton.textContent = "X";

    exitButton.addEventListener('click', function(event) {
        galleryDisplay.style.display = "none";
  });

    galleryDisplay.appendChild(exitButton);
    galleryDisplayContainer.appendChild(galleryDisplay);
    console.log("gallery display in visible");
}

function closeDisplay() {
    galleryDisplayContainer.style.display = "none";
}

imageContainer.addEventListener('onclick', openGalleryDisplay);
