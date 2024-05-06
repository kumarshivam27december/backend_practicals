document.addEventListener("DOMContentLoaded", function() {
    const mainImage = document.getElementById("mainImage");
    const changeImageButton = document.getElementById("changeImageButton");
  
    // List of image URLs to be used
    const imageUrls = [
      "img1.png",
      "img3.png",
      "img4.png"
      // Add more image URLs as needed
    ];
  
    // Function to change the image
    function changeImage() {
      // Get a random index to select a random image URL
      const randomIndex = Math.floor(Math.random() * imageUrls.length);
      // Set the source of the main image to the randomly selected image URL
      mainImage.src = imageUrls[randomIndex];
    }
  
    // Event listener for the button click
    changeImageButton.addEventListener("click", changeImage);
  });
  