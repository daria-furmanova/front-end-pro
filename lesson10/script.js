function taskOne() {
    let year = document.createElement('span');
    year.textContent = "2020"
    document.getElementById('title').append(year)
    document.getElementById('title').firstElementChild.remove()
}
taskOne()


function taskTwo() {
    document.querySelector('[my-attribute]').removeAttribute("my-attribute")
}
taskTwo()


function taskThree() {
    let attr = document.querySelectorAll('[data-id]')
    for (let i = 0; i < attr.length; i++) {
        attr[i].style.backgroundColor = '#ABBD8A'
    }
}
taskThree()

function taskFour() {
    let elTable = document.querySelector('[data-id]').parentNode
    let newElem = elTable.cloneNode(true);
    let lastElTable = document.getElementById('summ').parentNode.parentNode;
    lastElTable.before(newElem);
}
taskFour()

function taskFive() {
    let elemRemove = document.querySelector('[data-id]').parentNode;
    elemRemove.remove();
}
taskFive()