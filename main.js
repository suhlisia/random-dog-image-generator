// Create a random image generator

// Load event listener

document.addEventListener("load", getRandomDog());

function getRandomDog() {
  const dogs = ["bernese.jpg", "collie.jpeg", "labrador.jpg", "spaniel.jpg"];

  const img = document.getElementById("random-dog");
  img.src = `./images/${dogs[Math.floor(Math.random() * dogs.length)]}`;
}

document.getElementById("button").addEventListener("click", function () {
  window.location.reload();
});