// BURGER

const burger = document.querySelector(".burger");
const popupBurger = document.querySelector(".popup_burger");
const body = document.body;
const padding = document.querySelector(".header_logo");

// Клонируем меню, чтобы задать свои стили для мобильной версии
const nav = document.querySelector(".nav").cloneNode(1);

// При клике на иконку hamb вызываем ф-ию hambHandler
burger.addEventListener("click", hambHandler);

// Выполняем действия при клике ..
function hambHandler(e) {
  e.preventDefault();
  // Переключаем стили элементов при клике
  popupBurger.classList.toggle("popup_open");
  burger.classList.toggle("popup_active");
  body.classList.toggle("noscroll");
  padding.classList.toggle("header_logo_padding");
  renderPopup();
}

// Здесь мы рендерим элементы в наш попап
function renderPopup() {
  popupBurger.appendChild(nav);
}

// Код для закрытия меню при нажатии на ссылку
const links = Array.from(nav.children);

// Для каждого элемента меню при клике вызываем ф-ию
links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

// Закрытие попапа при клике на меню
function closeOnClick() {
  popupBurger.classList.remove("popup_open");
  burger.classList.remove("popup_active");
  padding.classList.remove("header_logo_padding");
  body.classList.remove("noscroll");
}


// // INTRO SLIDER

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
    timeoutId = setTimeout(showSlides, 2000);
}


// REGISTRATION

let registerbtn = document.getElementById('registerbtn');
registerbtn.addEventListener('click', store);

function store(event){
    event.preventDefault();
    var userName = document.getElementById('userName');
    var registerMail = document.getElementById('registerMail');
    var userPhone = document.getElementById('userPhone');
    var pw = document.getElementById('pw');
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

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
    var storedMail = localStorage.getItem('registerMail');
    var storedPw = localStorage.getItem('pw');
    var userMail = document.getElementById('userMail');
    var userPw = document.getElementById('userPw');

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




