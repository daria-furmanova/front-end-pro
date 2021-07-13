let elems = document.querySelectorAll('[data-id]')

function getSum(elems) {

    let arr = []

    for (let i = 0; i < elems.length; i++) {
        arr[i] = elems[i].textContent;
    }

    let sum = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i][arr[i].length - 1] === 'B') {
            arr[i] = parseInt(arr[i]) * 1e12;
            sum += arr[i]
        } else if (arr[i][arr[i].length - 1] === 'M') {
            arr[i] = parseInt(arr[i]) * 1e6;
            sum += arr[i]
        } else {
            arr[i] = parseInt(arr[i]);
            sum += arr[i]
        }
    }
    return sum;
}

getSum(elems)

let total = document.getElementById('summ')

let newElem = document.createElement('span');

newElem.innerHTML = getSum(elems);

total.after(newElem);
