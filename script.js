// Select elements
const images = document.querySelectorAll(".subpageImagesContainer img");
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeBtn = document.querySelector(".close");
const caption = document.getElementById("caption");

// Add click event to each image
images.forEach((image) => {
  image.addEventListener("click", function () {
    modal.style.display = "flex";
    modalImage.src = this.src; // Use the clicked image's source
    caption.textContent = this.alt || "Image description"; // Set caption from alt or a fallback text

  });
});

// Close the modal when the close button is clicked
closeBtn.onclick = function () {
  modal.style.display = "none";
};

// Close the modal when clicking outside the image
modal.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

// Close the modal when clicking outside the image
modal.onclick = function (event) {
  if (event.target = modal) {
    modal.style.display = "none";
  }
};
