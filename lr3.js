const originalText = {
    origTxt: ""
}; // Глобальна змінна для початкового тексту

let clickData = {
    clickCount: 0, // Лічильник кліків
};

function lowCase() {
    let inputValue = document.getElementById("input").value;
    document.getElementById("input").value = inputValue.toLowerCase();
}

function handleSelect() {
    const inputElement = document.getElementById("input");
    if (!originalText.origTxt) {
        originalText.origTxt = inputElement.value; // Записуємо лише  стартове значення
    }
}

function showOriginal(event) {
    event.preventDefault(); // Зупиняємо стандартне контекстне меню

    const menu = document.getElementById("custom-menu");

    // Перевіряємо, чи є збережений текст
    if (originalText.origTxt && originalText.origTxt.trim() !== "") {
        menu.innerText = "Початковий текст: " + originalText.origTxt;
    } else {
        menu.innerText = "Текст ще не було вписано!";
    }

    // Позиціюємо меню поруч із курсором
    menu.style.display = "block";
    menu.style.left = event.clientX + "px";
    menu.style.top = event.clientY + "px";
}

// Приховування кастомного меню після кліку будь-де
document.addEventListener("click", () => {
    const menu = document.getElementById("custom-menu");
    menu.style.display = "none";
    menu.innerText = ""; // Очищаємо текст від попереднього значення
});


function btnMove (){
    let btn = document.getElementById("baton");
    let rand = Math.floor(Math.random() * 10) + 1;

    let newX = Math.random() * (window.innerWidth - btn.offsetWidth);
    let newY = Math.random() * (window.innerHeight - btn.offsetHeight);

    btn.style.position = "absolute";
    btn.style.left = newX + "px";
    btn.style.top = newY + "px";

    btn.addEventListener("mouseenter", btnMove);

    btn.addEventListener("click", function () {
        clickData.clickCount++;
        clickData.clickCount === rand ? window.location.href="funny.html" : null;
    })
}