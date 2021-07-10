let radius = Number(prompt(`Введите радиус`));

while (Number.isNaN(radius)) {
    alert(`Значение радиуса должно быть числом`);
    radius = Number(prompt(`Введите радиус`));
}

let operation = Number(prompt(`Введите номер команды чтобы посчитать: 1 - диаметр, 2 - площадь круга, 3 - длинну окружности`));

for (let validValue = false; validValue !== true;) {
    if (operation === 1 || operation === 2 || operation === 3) {
        validValue = true;
    } else if (Number.isNaN(operation)) {
        alert(`Номер команды должен быть числом`);
        operation = Number(prompt(`Введите номер команды чтобы посчитать: 1 - диаметр, 2 - площадь круга, 3 - длинну окружности`));
    } else {
        alert(`Нет такой команды`);
        operation = Number(prompt(`Введите номер команды чтобы посчитать: 1 - диаметр, 2 - площадь круга, 3 - длинну окружности`));
    }
}

if (operation === 1) {
    diametr(radius);
} else if (operation === 2) {
    square(radius);
} else if (operation === 3) {
    circumference(radius);
}

function diametr(radius) {
    let result = radius * 2;
    alert(`Диаметр окружности равен : ` + result);
}

function square(radius) {
    let result = Math.PI * (radius * radius);
    alert(`Площадь круга равна : ` + result);
}

function circumference(radius) {
    let result = 2 * Math.PI * radius;
    alert(`Длинна окружности равна : ` + result);
}
