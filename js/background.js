const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpeg", "5.jpeg", "6.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
