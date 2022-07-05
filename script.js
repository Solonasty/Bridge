// Берём кнопку вперёд
let left = document.querySelector(".left");
// Берём слайды
let sliders = document.querySelectorAll(".slide");
// Объявляем переменную i 
let i = 0;
 
// Объявляем событие нажатия на кнопку вперёд
btnRight.addEventListener("click", function () {
    // Увеличиваем переменную i
    ++i
    // Условие если переменная i больше или равна количеству слайдов
    if (i >= sliders.length) {
        // Удаляем класс block предыдущему слайду
        sliders[i-1].classList.remove("first_slide");
        // Присваиваем переменной i ноль
        i = 0;
        // Добавляем класс block следующему слайду
        sliders[i].classList.add("first_slide");
    } else { // Иначе
        // Удаляем класс block предыдущему слайду
        sliders[i-1].classList.remove("first_slide");
        // Добавляем класс block следующему слайду
        sliders[i].classList.add("first_slide");
    }
})