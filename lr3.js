const originalText = {
    origTxt: ""
}; // Глобальна змінна для початкового тексту

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


let clickData = {
    clickCount: 0,
    targetClicks: 10 // Поріг натискань, після якого відбудеться перехід
};

function btnMove() {
    let btn = document.getElementById("baton");

    let newX = Math.random() * (window.innerWidth - btn.offsetWidth);
    let newY = Math.random() * (window.innerHeight - btn.offsetHeight);

    btn.style.position = "absolute";
    btn.style.left = newX + "px";
    btn.style.top = newY + "px";
}

document.getElementById("baton").addEventListener("click", function () {
    clickData.clickCount++;
    document.getElementById("clickCount").textContent = clickData.clickCount;

    console.log(`Клік: ${clickData.clickCount}, Ціль: ${clickData.targetClicks}`);

    // Якщо клікнули targetClicks разів, переходимо на funny.html
    clickData.clickCount === clickData.targetClicks
        ? (console.log("✅ Перехід на funny.html!"), window.location.href = "funny.html")
        : btnMove(); // Інакше рухаємо кнопку
});