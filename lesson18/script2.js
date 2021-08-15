document.querySelector(".btn-login").addEventListener('click', function(event) {
    event.preventDefault();
})

function setItem() {
    let value = document.getElementById('inpText').value;
    localStorage.setItem('name', value)
    if (value === "") {
        alert('Enter your name');
    } else {
        sayWelcome(value)
    }
}

function sayWelcome() {
    document.querySelector('.wrapper').classList.add('hidden');
    let sayWelcome = document.querySelector('.welcome');
    sayWelcome.classList.remove('welcome-hidden');

    let name = document.createElement('span');
    let valueName = localStorage.getItem('name')
    name.textContent = valueName;
    sayWelcome.append(name);
}

function funcOnLoad(valueName) {
    valueName = localStorage.getItem('name');
    console.log(valueName)
    if (valueName !== "" && valueName !== null) {
        sayWelcome();
    }
}