const hoverContainers = document.querySelectorAll("#hover-container");

hoverContainers.forEach((container) => {
  const image = container.querySelector("img");

  container.addEventListener("mousemove", (event) => {
    // Update image position to follow the cursor
    const containerRect = container.getBoundingClientRect();
    image.style.left = event.clientX - containerRect.left - 100 + "px"; // Offset for better visibility
    image.style.top = event.clientY - containerRect.top + 0 + "px";
  });
});

// Select elements
const images = document.querySelectorAll(".subpageImagesContainer img");
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
/*const closeBtn = document.querySelector(".close");*/
const caption = document.getElementById("caption");
const leftNav = document.querySelector(".nav.left");
const rightNav = document.querySelector(".nav.right");

let currentIndex = 0;

// Add click event to each image
images.forEach((image, index) => {
  image.addEventListener("click", function () {
    currentIndex = index; // Update currentIndex to the clicked image
    modal.style.display = "flex";
    modalImage.src = this.src; // Use the clicked image's source
    caption.textContent = this.alt || "Image description"; // Set caption from alt or fallback text
  });
});

// Close the modal when the close button is clicked
/*closeBtn.onclick = function () {
  modal.style.display = "none";
};*/

// Close the modal when clicking outside the image
modal.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

// Close the modal when clicking outside the image
modal.onclick = function (event) {
  if ((event.target = modal)) {
    modal.style.display = "none";
  }
};

// Navigate left
leftNav.addEventListener("click", (event) => {
  event.stopPropagation(); // Prevent the modal from closing
  currentIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
  modalImage.src = images[currentIndex].src;
  caption.textContent = images[currentIndex].alt || "Image description"; // Update caption
});

// Navigate right
rightNav.addEventListener("click", (event) => {
  event.stopPropagation(); // Prevent the modal from closing
  currentIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
  modalImage.src = images[currentIndex].src;
  caption.textContent = images[currentIndex].alt || "Image description"; // Update caption
});

// Keyboard navigation and close modal with Escape key
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    if (modal.style.display === "flex") {
      currentIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
      modalImage.src = images[currentIndex].src;
      caption.textContent = images[currentIndex].alt || "Image description";
    }
  } else if (event.key === "ArrowRight") {
    if (modal.style.display === "flex") {
      currentIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
      modalImage.src = images[currentIndex].src;
      caption.textContent = images[currentIndex].alt || "Image description";
    }
  } else if (event.key === "Escape" || event.key === " ") {
    // Close modal with Escape key or Space key
    modal.style.display = "none";
  }
});
