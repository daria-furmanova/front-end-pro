let btn = document.getElementById("btn-create").addEventListener('click', createCounter);

function createCounter() {
    let spanCounterValue = document.createElement('span');
    spanCounterValue.textContent = 'Counter value';
    spanCounterValue.classList.add('str');
    document.querySelector('.container-count').append(spanCounterValue);

    let valueCounter = document.createElement('span');
    let inputText = document.getElementById('input');
    valueCounter.textContent = inputText.value;

    let btnCount = document.createElement('button');
    btnCount.textContent = 'Count';
    btnCount.classList.add('count');
    document.querySelector('.container-count').append(btnCount);

}

createCounter()