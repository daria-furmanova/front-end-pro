const btnSelect = document.querySelector('.btn-select');
btnSelect.addEventListener('click', validate);

function validate(inpName, inpQuanity, inpPrice) {
    inpName = document.querySelector('.data-input').firstElementChild;
    inpQuanity = document.querySelector('.data-input').childNodes[3];
    inpPrice = document.querySelector('.data-input').childNodes[5];
    let a = Number(inpPrice.value);
    let b = Number(inpQuanity.value);
    if (inpName.value === "" || b === "" || a === "") {
        return alert('Заполните все поля');
    } else if (Number.isNaN(b) || Number.isNaN(a) || b < 0 || a < 0) {
        alert("Значение цены и количества должно быть числовым и больше 0");
    } else {
        create(inpName, inpQuanity, inpPrice);
    }
}

function create(inpName, inpQuanity, inpPrice, price) {
    let dataOutput = document.createElement('tr');
    dataOutput.classList.add('data-output');
    document.querySelector('.table').append(dataOutput);
    let name = document.createElement('td');
    quanity = document.createElement('td');
    price = document.createElement('td');
    let btnDel = document.createElement('td');
    name.classList.add('name');
    quanity.classList.add('quanity');
    price.classList.add('price');
    btnDel.classList.add('btn-del');
    dataOutput.append(name, quanity, price, btnDel);

    name.textContent = inpName.value;
    quanity.textContent = inpQuanity.value;
    price.textContent = inpPrice.value;
    btnDel.textContent = 'x';
    btnDel.addEventListener('click', delLine);
    getSum();
}
debugger

function getSum(sum, arr) {
    let p = document.querySelectorAll('.price');
    arr = [];
    for (let i = 0; i < p.length; i++) {
        arr[i] = p[i].textContent;
    }
    sum = 0;
    for (let i = 0; i < arr.length; i++) {
        arr[i] = parseInt(arr[i]);
        sum += arr[i];
    }
    let totalPrice = document.querySelector('.total-price');
    totalPrice.innerHTML = sum;
    return sum, arr, totalPrice;
}

function delLine(sum, arr) {
    let elem = document.querySelector('.table').lastChild;
    elem.parentNode.removeChild(elem);
    getSub(getSum(sum, arr));
}

function getSub(sum, arr) {
    let sub = sum - arr[i];
    totalPrice.innerHTML = sub;
}