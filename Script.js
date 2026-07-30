const text = "Technology Enthusiast • Future Software Developer • Web Designer";

let i = 0;
const speed = 70;

function typeWriter() {
  const element = document.getElementById("typing");

  if (!element) return;

  if (i < text.length) {
    element.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter;
