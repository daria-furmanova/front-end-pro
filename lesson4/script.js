
let radius = Number(prompt(`Введите радиус круга`));

let numberOfFunction = Number(prompt(`Введите номер команды чтобы посчитать: 1 - диаметр, 2 - площадь круга, 3 - длинну окружности`));


if (Number.isNaN(radius)) {
    alert(`Значение радиуса должно быть числом`);
} else if (Number.isNaN(numberOfFunction)) {
    alert(`Номер команды должен быть числом`);
} else if (numberOfFunction === 1) {
    diametr(radius)
} else if (numberOfFunction === 2) {
    square(radius)
} else if (numberOfFunction === 3) {
    circumference(radius)
} else alert(`Нет такой команды`);



function diametr() {
    let result = radius * 2;
    alert(`Диаметр окружности равен :` + result);
}

function square() {
    let result = Math.PI * (radius * radius);
    alert(`Площадь круга равна : ` + result);
}

function circumference() {
    let result = 2 * Math.PI * radius;
    alert(`Длинна окружности равна : ` + result);
}
