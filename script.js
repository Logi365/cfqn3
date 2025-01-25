const slides =
document.querySelector(".slides");
const slideWidth = 300;
let current = 0;

function nextslide() {
  currentslide =(currentSlide + 1 ) %
 slides.children.length;
 slides.style.transform =
 `translatex(-${currentSlide * slideWidth}px) `;
  {
    
setInterval(nextSlide, 3000);
