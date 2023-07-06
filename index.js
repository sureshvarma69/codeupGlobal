/// carousel 1
let slideIndex = 1;
let slideIndex2 = 1;
let slideIndex3 = 1;

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
}

showSlides(slideIndex);

/// carousel 2




// Next/previous controls
function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}

// Thumbnail image controls
function currentSlide2(n) {
  showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
  let i;
  let slides2 = document.getElementsByClassName("mySlidesTwo");
  let dots2 = document.getElementsByClassName("dot2");
  if (n > slides2.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = slides2.length}
  for (i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";
  }
  for (i = 0; i < dots2.length; i++) {
    dots2[i].className = dots2[i].className.replace(" active", "");
  }
  slides2[slideIndex2-1].style.display = "block";
//   dots2[slideIndex2-1].className += " active";
}


function plusSlides3(n) {
    showSlides3(slideIndex3 += n);
  }
  
  // Thumbnail image controls
  function currentSlide3(n) {
    showSlides3(slideIndex3 = n);
  }
  
  function showSlides3(n) {
    let i;
    let slides3 = document.getElementsByClassName("mySlidesThree");
    // let dots2 = document.getElementsByClassName("dot");
    if (n > slides3.length) {slideIndex3 = 1}
    if (n < 1) {slideIndex3 = slides3.length}
    for (i = 0; i < slides3.length; i++) {
      slides3[i].style.display = "none";
    }
    // for (i = 0; i < dots2.length; i++) {
    //   dots2[i].className = dots2[i].className.replace(" active", "");
    // }
    slides3[slideIndex3-1].style.display = "block";
  //   dots2[slideIndex2-1].className += " active";
  }
  

showSlides2(slideIndex2);
// showSlides3(slideIndex3);

function loadcarousel(){
    showSlides(1);
    showSlides2(1);
    showSlides3(1);
}
