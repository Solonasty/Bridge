// BURGER

let burger = document.querySelector(".burger");
let popupBurger = document.querySelector(".popup_burger");
let body = document.body;
let padding = document.querySelector(".header_logo");

// Clone menu for creating styles for mobile
let nav = document.querySelector(".nav").cloneNode(1);

// Add to icon burger action hambHandler
burger.addEventListener("click", hambHandler);

// Click actions:
function hambHandler(e) {
  e.preventDefault();
  // Change styles on click
  popupBurger.classList.toggle("popup_open");
  burger.classList.toggle("popup_active");
  body.classList.toggle("noscroll");
  padding.classList.toggle("header_logo_padding");
  renderPopup();
}

// Copy nav to burger
function renderPopup() {
  popupBurger.appendChild(nav);
}

// Code for closing menu
let links = Array.from(nav.children);

// For each clicked menu item call the function closeOnClick
links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

// Closing the pop-up on click on the menu
function closeOnClick() {
  popupBurger.classList.remove("popup_open");
  burger.classList.remove("popup_active");
  padding.classList.remove("header_logo_padding");
  body.classList.remove("noscroll");
}


// INTRO SLIDER

let slideIndex = 0;
let timeoutId = null;
let slides = document.getElementsByClassName("intro_inner");

showSlides();

function currentSlide(index) {
    slideIndex = index;
    showSlides();
}

function plusSlides(step) {

    if(step < 0) {
        slideIndex -= 2;
        if(slideIndex < 0) {
            slideIndex = slides.length - 1;
        }
    }
        showSlides();
}

function showSlides() {
    for(let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('block');
    }

    slideIndex++;
    if(slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].classList.add('block');
        if(timeoutId) {
        clearTimeout(timeoutId);
        }
    timeoutId = setTimeout(showSlides, 4000);
}


// REGISTRATION

let registerbtn = document.getElementById('registerbtn');
registerbtn.addEventListener('click', store);

function store(event){
    event.preventDefault();
    let userName = document.getElementById('userName');
    let registerMail = document.getElementById('registerMail');
    let userPhone = document.getElementById('userPhone');
    let pw = document.getElementById('pw');
    let lowerCaseLetters = /[a-z]/g;
    let upperCaseLetters = /[A-Z]/g;
    let numbers = /[0-9]/g;

    if(userName.value.length == 0){
        alert('Please fill in your name');
    }
    else if(registerMail.value.length == 0){
        alert('Please fill in email');
    }
    else if(userPhone.value.length == 0){
        alert('Please fill in phone number');

    }else if(pw.value.length == 0){
        alert('Please fill in password');

    }else if(registerMail.value.length == 0 && pw.value.length == 0){
        alert('Please fill in email and password');

    }else if(pw.value.length < 8){
        alert('Min password length is 8 characters');

    }else if(!pw.value.match(numbers)){
        alert('Password must contain at least 1 number or special character');

    }else if(!pw.value.match(upperCaseLetters)){
        alert('Password must contain at least 1 uppercase letter');

    }else if(!pw.value.match(lowerCaseLetters)){
        alert('Password must contain at least 1 lovercase letter');

    }else{
        localStorage.setItem('registerMail', registerMail.value);
        localStorage.setItem('pw', pw.value);
        alert('Your account has been created');
    }
}

// checking

let signbtn = document.getElementById('signbtn');
signbtn.addEventListener('click', check);

function check(event){
    event.preventDefault();
    let storedMail = localStorage.getItem('registerMail');
    let storedPw = localStorage.getItem('pw');
    let userMail = document.getElementById('userMail');
    let userPw = document.getElementById('userPw');

    if(userMail.value == storedMail && userPw.value == storedPw){
        alert('You are logged in.');
    }else{
        alert('Error on login');
    }
}

// REVIEWS

let slideIndexDot = 1;
showSlidesDot(slideIndexDot);

function plusSlidesDot(n) {
    showSlidesDot(slideIndexDot += n);
}

function currentSlideDot(n) {
    showSlidesDot(slideIndexDot = n);
}

function showSlidesDot(n) {
  let i;
  let slides = document.getElementsByClassName("carousel_item");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndexDot = 1}    
  if (n < 1) {slideIndexDot = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexDot-1].style.display = "block";  
  dots[slideIndexDot-1].className += " active";
}

// COUNTER

let register_content = document.querySelector('.register_content');

let number_members = document.querySelector('.number_members');
let number_classes = document.querySelector('.number_classes');
let number_videos = document.querySelector('.number_videos');
let number_score = document.querySelector('.number_score');

let timerId;

function startCountdown () {
    timerId = setInterval( () => {

        // Members
        let val_members = +number_members.textContent;
        if (val_members >= 50) {
            return;
        }
        val_members = +number_members.textContent + 1;
        number_members.textContent = val_members;

        // Classes
        let val_classes= +number_classes.textContent;
        if (val_classes >= 30) {
            return;
        }
        val_classes = +number_classes.textContent + 1;
        number_classes.textContent = val_classes;

        // Videos
        let val_videos= +number_videos.textContent;
        if (val_videos >= 20) {
            return;
        }
        val_videos = +number_videos.textContent + 1;
        number_videos.textContent = val_videos;

        // Score
        let val_score= +number_score.textContent;
        if (val_classes >= 6) {
            return;
        }
        val_score = +number_score.textContent + 1;
        number_score.textContent = val_score;

    }, 50);
}

function stopCountdown () {
  clearInterval(timerId);
}

register_content.addEventListener("mouseover", startCountdown);
register_content.addEventListener('mouseout', stopCountdown);




