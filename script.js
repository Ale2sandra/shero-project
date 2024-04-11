document.addEventListener("DOMContentLoaded", function () {
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const carouselContainer = document.querySelector(".carousel");
  const carouselSlides = document.querySelectorAll(".carousel-slide");
  const visibleSlides = 5;
  let currentIndex = 0;

  // Show initial slides
  showSlides(currentIndex);

  // Event listeners for previous and next buttons
  prevBtn.addEventListener("click", () => {
    currentIndex = Math.max(0, currentIndex - visibleSlides);
    showSlides(currentIndex);
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = Math.min(
      carouselSlides.length - visibleSlides,
      currentIndex + visibleSlides
    );
    showSlides(currentIndex);
  });

  // Function to show slides starting from the given index
  function showSlides(startIndex) {
    carouselContainer.scrollLeft = carouselSlides[startIndex].offsetLeft;
  }
});
