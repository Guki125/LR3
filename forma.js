function showMethodFields() {
    const selectedMethod = document.getElementById("methodSelect").value;
    const methodFields = document.getElementById("methodFields");

    methodFields.innerHTML = ""; // Очищуємо перед відображенням нового методу

    switch (selectedMethod) {
        case "radius":
            methodFields.innerHTML = `
                <label>Введіть радіус (r): </label>
                <input type="number" id="radius" placeholder="Радіус" min="0">
                <button onclick="calculateArea('radius')">Обчислити площу</button>
            `;
            break;
        case "diameter":
            methodFields.innerHTML = `
                <label>Введіть діаметр (d): </label>
                <input type="number" id="diameter" placeholder="Діаметр" min="0">
                <button onclick="calculateArea('diameter')">Обчислити площу</button>
            `;
            break;
        case "circumference":
            methodFields.innerHTML = `
                <label>Введіть довжину кола (C): </label>
                <input type="number" id="circumference" placeholder="Довжина кола" min="0">
                <button onclick="calculateArea('circumference')">Обчислити площу</button>
            `;
            break;
        case "sector":
            methodFields.innerHTML = `
                <label>Введіть радіус (r): </label>
                <input type="number" id="sectorRadius" placeholder="Радіус" min="0">
                <label>Введіть кут (θ): </label>
                <input type="number" id="sectorAngle" placeholder="Кут у градусах" min="0">
                <button onclick="calculateArea('sector')">Обчислити площу</button>
            `;
            break;
        case "coordinates":
            methodFields.innerHTML = `
                <label>Введіть координати трьох точок:</label>
                <input type="number" id="x1" placeholder="x1">
                <input type="number" id="y1" placeholder="y1">
                <input type="number" id="x2" placeholder="x2">
                <input type="number" id="y2" placeholder="y2">
                <input type="number" id="x3" placeholder="x3">
                <input type="number" id="y3" placeholder="y3">
                <button onclick="calculateArea('coordinates')">Обчислити площу</button>
            `;
            break;
    }
}

function calculateArea(method) {
    let area = 0;

    switch (method) {
        case "radius":
            let radius = parseFloat(document.getElementById("radius").value);
            if (isNaN(radius) || radius <= 0) {
                alert("Будь ласка, введіть коректний радіус!");
                return;
            }
            area = Math.PI * Math.pow(radius, 2);
            break;

        case "diameter":
            let diameter = parseFloat(document.getElementById("diameter").value);
            if (isNaN(diameter) || diameter <= 0) {
                alert("Будь ласка, введіть коректний діаметр!");
                return;
            }
            area = Math.PI * Math.pow(diameter / 2, 2);
            break;

        case "circumference":
            let circumference = parseFloat(document.getElementById("circumference").value);
            if (isNaN(circumference) || circumference <= 0) {
                alert("Будь ласка, введіть коректну довжину кола!");
                return;
            }
            area = Math.pow(circumference / (2 * Math.PI), 2) * Math.PI;
            break;

        case "sector":
            let sectorRadius = parseFloat(document.getElementById("sectorRadius").value);
            let sectorAngle = parseFloat(document.getElementById("sectorAngle").value);
            if (isNaN(sectorRadius) || isNaN(sectorAngle) || sectorRadius <= 0 || sectorAngle <= 0) {
                alert("Будь ласка, введіть коректні значення!");
                return;
            }
            area = (sectorAngle / 360) * Math.PI * Math.pow(sectorRadius, 2);
            break;

        case "coordinates":
            let x1 = parseFloat(document.getElementById("x1").value);
            let y1 = parseFloat(document.getElementById("y1").value);
            let x2 = parseFloat(document.getElementById("x2").value);
            let y2 = parseFloat(document.getElementById("y2").value);
            let x3 = parseFloat(document.getElementById("x3").value);
            let y3 = parseFloat(document.getElementById("y3").value);
            if (isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2) || isNaN(x3) || isNaN(y3)) {
                alert("Будь ласка, введіть коректні координати!");
                return;
            }
            area = Math.abs((x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)) / 2);
            break;
    }

    document.getElementById("result").innerText = `Площа круга: ${area.toFixed(2)} квадратних одиниць`;
    drawCircle(area);
}

function drawCircle(area) {
    const canvas = document.getElementById("circleCanvas");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (area > 0) {
        const radius = Math.sqrt(area / Math.PI) * 10;
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0, 2 * Math.PI);
        ctx.fillStyle = "#4CAF50";
        ctx.fill();
        ctx.stroke();
    }
}
