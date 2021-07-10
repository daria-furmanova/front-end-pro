let a = Number(prompt (`Введите число`));

let b = Number(prompt (`Введите еще одно число`));

let operation = (prompt (`Введите функцию`));

if (Number.isNaN(a) || Number.isNaN(b)){
    alert("invalid values");
}else if (operation === `+` || operation === `add`) {
    let result = a + b;
    alert ( a + `+` + b + `=` + result );
} else if (operation === `-` || operation === `sub`) {
    let result = a - b;
    alert ( a + `-` + b + `=` + result );
} else if (operation === `*` || operation === `mult`) {
    let result = a * b;
    alert ( a + `*` + b + `=` + result );
} else if (operation === `/` || operation === `div`) {
    let result = a / b;
    alert ( a + `/` + b + `=` + result );
} else if (operation === `%` || operation === `mod`) {
    let result = a % b;
    alert ( a + `%` + b + `=` + result );
} else alert(`Invalid operator`);





    