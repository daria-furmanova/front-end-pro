function arrayFill(a, b) {
    return new Array(b).fill(a)
}

console.log(arrayFill(2, 10))


function sumArray() {
    let sum = 0
    let arr = [
        [1, 2],
        [3, 4],
        [5, 8]
    ]
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            sum += arr[i][j]
        }
    }
    console.log(sum)
}

sumArray()

function sumArrayReduce() {
    let array = [
        [1, 2],
        [3, 4],
        [5, 8]
    ]

    let newArr = array.flat().reduce((prev, curr) => prev + curr)
    console.log(newArr)

}

sumArrayReduce()


let btn = document.getElementById("btn-create");
btn.addEventListener('click', prevDef);
btn.addEventListener('click', createCounter);

function prevDef(event) {
    event.preventDefault();
}

function createCounter() {
    let container = document.createElement('div');
    container.classList.add('container');
    document.querySelector('.wrapper-counter').append(container);

    let spanCounterValue = document.createElement('span');
    spanCounterValue.textContent = 'Counter value';
    spanCounterValue.classList.add('str');


    let valueCounter = document.createElement('span');
    let inputText = document.getElementById('input');
    valueCounter.textContent = inputText.value;
    valueCounter.classList.add('str');


    let btnCount = document.createElement('button');
    btnCount.textContent = 'Count';
    btnCount.classList.add('count');
    btnCount.addEventListener('click', countValue);
    btnCount.addEventListener('click', prevDef);

    document.querySelector('.wrapper-counter').lastElementChild.append(spanCounterValue, valueCounter, btnCount);

    function countValue() {
        let a = Number(valueCounter.textContent)
        return valueCounter.textContent = a + 1;
    }
}