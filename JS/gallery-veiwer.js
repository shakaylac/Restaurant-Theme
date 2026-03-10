const imageContainers = document.querySelectorAll('.image-container');
const galleryDisplayContainer = document.getElementById('gallery_display_container');

let currentIndex = 0;
let galleryDisplay = null;
let imageDisplay = null;
let descriptionDisplay = null;
let leftButton = null;
let rightButton = null;

function openGalleryDisplay(index) {
    currentIndex = index;

    // Create gallery display if it doesn't exist
    if (!galleryDisplay) {
        galleryDisplay = document.createElement('div');
        galleryDisplay.className = "gallery-display";
        galleryDisplay.id = "gallery_display";

        const exitButton = document.createElement('button');
        exitButton.textContent = "X";
        exitButton.className = "exit-btn";
        exitButton.addEventListener('click', closeDisplay);

        leftButton = document.createElement('button');
        leftButton.textContent = "<";
        leftButton.className = "nav-btn left-btn";
        leftButton.addEventListener('click', showPrevious);

        rightButton = document.createElement('button');
        rightButton.textContent = ">";
        rightButton.className = "nav-btn right-btn";
        rightButton.addEventListener('click', showNext);

        imageDisplay = document.createElement('img');
        imageDisplay.className = "image-display";
        imageDisplay.id = "image_display";

        descriptionDisplay = document.createElement('div');
        descriptionDisplay.className = "description-display";
        descriptionDisplay.id = "description_display";

        galleryDisplay.appendChild(exitButton);
        galleryDisplay.appendChild(leftButton);
        galleryDisplay.appendChild(imageDisplay);
        galleryDisplay.appendChild(descriptionDisplay);
        galleryDisplay.appendChild(rightButton);

        galleryDisplayContainer.appendChild(galleryDisplay);
    }

    updateDisplay();
    galleryDisplay.style.display = "flex";
}

function updateDisplay() {
    const container = imageContainers[currentIndex];
    const img = container.querySelector('.gallery-image');
    const desc = container.querySelector('.image-description');

    imageDisplay.src = img.src;
    descriptionDisplay.innerHTML = desc.innerHTML;

    // Hide left button if at first image
    leftButton.style.display = currentIndex === 0 ? 'none' : 'block';
    // Hide right button if at last image
    rightButton.style.display = currentIndex === imageContainers.length - 1 ? 'none' : 'block';
}

function showNext() {
    if (currentIndex < imageContainers.length - 1) {
        currentIndex++;
        updateDisplay();
    }
}

function showPrevious() {
    if (currentIndex > 0) {
        currentIndex--;
        updateDisplay();
    }
}

function closeDisplay() {
    galleryDisplay.style.display = "none";
}

// Add click event listeners to each image container
imageContainers.forEach((container, index) => {
    container.addEventListener('click', () => openGalleryDisplay(index));
});
