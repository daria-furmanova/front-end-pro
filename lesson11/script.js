let btn = document.getElementById("button-submit").addEventListener('click', onClickSubmit);

function onClickSubmit() {
    let item = document.createElement('li');

    item.classList.add('list-item');

    let toDo = document.getElementById('textInput');

    item.textContent = toDo.value;

    document.getElementById('list').append(item);

    let btnDelete = document.createElement('span')

    btnDelete.classList.add('btn-item-list')

    document.querySelector('.container-btn-delete').append(btnDelete)

    btnDelete.addEventListener('click', deleteField)

    item.addEventListener('click', onClickDone)
}


function onClickDone(event) {
    event.target.classList.toggle('list-item-done')
}

function deleteField(event) {
}