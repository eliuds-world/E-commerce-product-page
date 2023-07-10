// Get the main image element
const mainImage = document.getElementById("MainImage");
const smallImage = document.querySelectorAll(".Smallimage");
const popUpImage = document.querySelector(".PopUpimage");
const closeModalButton = document.querySelector(".close-modal");
const overlayButton = document.querySelector(".overlay");

const closeModalFunction = () => {
  popUpImage.classList.add("hidden");
  overlayButton.classList.add("hidden");
};

// Attach click event listeners to each small image
smallImage.forEach((smallImage) => {
  smallImage.addEventListener("click", () => {
    // Get the source of the clicked small image
    const clickedImageSrc = smallImage.getAttribute("src");

    // Update the source of the main image with the clicked image source
    mainImage.setAttribute("src", clickedImageSrc);
  });
});

mainImage.addEventListener("click", () => {
  popUpImage.classList.remove("hidden");
  overlayButton.classList.remove("hidden");
});

closeModalButton.addEventListener("click", closeModalFunction);
overlayButton.addEventListener("click", closeModalFunction);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !popUpImage.classList.contains("hidden")) {
    closeModalFunction();
  }
});
