function load() {
    document.getElementById('removeAttrBtn').addEventListener('click', taskTwo, true);
    document.getElementById('setGreenBtn').addEventListener('click', taskThree, false);
    document.getElementById('addRowBtn').addEventListener('click', taskFour, false);
    document.getElementById('removeSecondRowBtn').addEventListener('click', taskFive);
}

function taskOne() {
    let year = document.getElementById('title').firstElementChild
    let inputText = document.querySelector('.form-control');
    year.textContent = inputText.value
}

function taskTwo() {
    document.querySelector('[my-attribute]').removeAttribute("my-attribute")
}

function taskThree() {
    let attr = document.querySelectorAll('[data-id]')
    for (let i = 0; i < attr.length; i++) {
        attr[i].style.backgroundColor = '#ABBD8A'
    }
}

function taskFour() {
    let elTable = document.querySelector('[data-id]').parentNode
    let newElem = elTable.cloneNode(true);
    let lastElTable = document.getElementById('summ').parentNode.parentNode;
    lastElTable.before(newElem);
}

function taskFive() {
    let elems = document.querySelectorAll('[data-id]')
    for (i = 0; i < elems.length; i++) {
        elems[1].parentNode.remove()
    }
}

document.addEventListener('DOMContentLoaded', ready);

function ready() {
    document.getElementById('title').style.fontSize = '24px';
}