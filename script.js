let shoes = document.querySelectorAll(".shoes");
let index = 0;
let videoBtn = document.querySelectorAll(".vid-btn");

function next() {
  shoes[index].classList.remove("active");
  index = (index + 1) % shoes.length;
  shoes[index].classList.add("active");
}

function prev() {
  shoes[index].classList.remove("active");
  index = (index - 1 + shoes.length) % shoes.length;
  shoes[index].classList.add("active");
}

window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

videoBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".controls .active").classList.remove("active");
    btn.classList.add("active");
    let src = btn.getAttribute("data-src");
    document.querySelector("#video-slider").src = src;
  });
});

VanillaTilt.init(document.querySelectorAll(".box"), {
  max: 45,
  speed: 1000,
  scale: 1.1,
  //   glare: true,
});

const scriptURL =
  "https://script.google.com/macros/s/AKfycbzBqO7aVYadlrEoHmw8tnc0XOIyg1lt5c1ySLDzDEyoZ6muKf12CSTnNbKEFEWrRx60/exec";
const form = document.forms["contact-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      form.reset();
      alert("SUCCESS!  TANHKS FOR MESSAGE:)");
    })
    .catch((error) => console.error("Error!", error.message));
});

let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}
