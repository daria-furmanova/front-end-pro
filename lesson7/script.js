let str = numbers(5);

console.log(str);

let arrNums = arrNumsFromString(str);



function numbers(n) {
    if (n === 1) {
        return 1;
    } else {
        return numbers(n - 1) + " " + n;
    }
}

function arrNumsFromString(str) {
    let arrStr = str.split(` `);
    for (let i = 0; i < arrStr.length; i++) {
        arrStr[i] = Number(arrStr[i]);
    }
return arrStr;
}

function sumOfNums (arrNums) {
    if (arrNums.length === 1) {
        return arrNums[0];
    } else {
        let el = arrNums.pop();
        return sumOfNums(arrNums) + el;
    }
}
console.log (`Сумма чисел: ` + sumOfNums(arrNums))