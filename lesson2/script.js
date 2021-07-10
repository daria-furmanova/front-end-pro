let count = 0;

let questionOne = prompt(`Сколько будет 2+"2" в JavaScript?`);
if (questionOne == 22)  count + 10;

let questionTwo = prompt(`Назовите оператор присваивания в JavaScript`);
if (questionTwo == "=")  count += 10;

let questionThree = prompt(`Сколько будет 5 / 0?`);
if (questionThree == "infinity")  count += 10;

let questionFour = prompt(`Одинаково ли работает == и === в JavaScript?`);
if (questionFour == "no")  count += 10;

let questionFive = prompt(`Чему равно выражение Boolean(null) в JavaScript?`);
if (questionFive == "false")  count += 10;

alert (`Ваш результат ${count} баллов!`);

count = count +10;
count+=10;
