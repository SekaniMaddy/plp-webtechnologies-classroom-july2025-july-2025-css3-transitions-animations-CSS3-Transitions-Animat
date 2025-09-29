// Part 2: Functions, Scope & Parameters

// Example function with parameters + return
function calculateArea(width, height) {
  return width * height;
}

// Global scope variable
let box = document.querySelector(".box");

// Function to apply animation
function animateBox(animationClass) {
  box.classList.add(animationClass);
}

// Function to reset box
function resetBox() {
  box.classList.remove("spin");
  box.style.transform = "none"; // Reset transform
}

// Add event listeners
document.getElementById("triggerAnimation").addEventListener("click", function() {
  animateBox("spin");
  console.log("Area of 100x100 box:", calculateArea(100, 100));
});

document.getElementById("resetBox").addEventListener("click", resetBox);

// Part 3: Combining CSS & JS
let flipCard = document.getElementById("flipCard");
flipCard.addEventListener("click", function() {
  flipCard.classList.toggle("flip");
});
