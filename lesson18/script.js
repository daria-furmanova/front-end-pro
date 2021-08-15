document.querySelector(".btn-login").addEventListener('click', function(event) {
    event.preventDefault();
})

function setCookie() {
    let value = document.getElementById('inpText').value;
    document.cookie = value;
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
    name.textContent = document.cookie;
    sayWelcome.append(name);
}

function funcOnLoad(value) {
    if (document.cookie !== "") {
        sayWelcome(value);
    }
}