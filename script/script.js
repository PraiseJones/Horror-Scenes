
// Get the container element
var reveal = document.querySelectorAll('.image');

// Function to check if the container is in the viewport
function isElementInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle the scroll event
function handleScroll() {
  reveal.forEach(function (image) {
    if (isElementInViewport(image)) {
      image.classList.add("is-visible");
    }
  });
}

// Add the scroll event listener
window.addEventListener('scroll', handleScroll);

