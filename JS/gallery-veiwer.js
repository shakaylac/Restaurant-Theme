const imageContainer = document.getElementById('image_container');
const galleryDisplayContainer = document.getElementById('gallery_display_container')

function openGalleryDisplay() {
    const galleryDisplay = document.createElement('div');
    galleryDisplay.className = "gallery-display";
    galleryDisplay.setAttribute = ("id", "gallery_display");

    const exitButton = document.createElement('button');
    exitButton.textContent = "X";

    galleryDisplay.appendChild(exitButton);
    galleryDisplayContainer.appendChild(galleryDisplay);
    console.log("gallery display in visible");
}

imageContainer.addEventListener('onclick', openGalleryDisplay);
