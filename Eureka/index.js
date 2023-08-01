 
document.onreadystatechange = function() {
  if (document.readyState !== "complete") {
      document.querySelector("body").style.visibility = "hidden";
      document.querySelector("#spinner").style.visibility = "visible";
    } 
  else {
      document.querySelector("#spinner").style.display = "none";
      document.querySelector("body").style.visibility = "visible";
  }
};
let slidePosition = 1;
SlideShow(slidePosition);

// forward/Back controls
function plusSlides(n) {
  SlideShow(slidePosition += n);
  document.getElementsByClassName("butt").style.top = 0
  setTimeout(plusSlides, 2000)
}

//  images controls
function currentSlide(n) {
  SlideShow(slidePosition = n);
}

function SlideShow(n) {
  let i;
  let slides = document.getElementsByClassName("Containers");
  let circles = document.getElementsByClassName("dots");
  if (n > slides.length) {slidePosition = 1}
  if (n < 1) {slidePosition = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
      circles[i].className = circles[i].className.replace("enable", "");
  }
  slides[slidePosition-1].style.display = "block";
  circles[slidePosition-1].className += "enable";
}

 slidePosition = 0;
SlideShow();

/*function SlideShow() {
  let i;
  let slides = document.getElementsByClassName("blog-card");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slidePosition++;
  if (slidePosition > slides.length) {slidePosition = 1}
  slides[slidePosition-1].style.display = "grid";
  setTimeout(SlideShow, 10000); // Change image every 10 seconds
}*/
function myFunction() {
  let links = document.getElementById("myLinks");
  if (links.style.display === "block") {
    links.style.display = "none";
  } else {
    links.style.display = "block";
  }
  console.log("otondo")
}