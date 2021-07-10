const items = [
    {
        title: "IPhone 12",
        quantity: 2,
        price: 1000,
    },
    {
        title: "Magic Mouse",
        quantity: 3,
        price: 100,
    },
    {
        title: "MI Band 6",
        quantity: 4,
        price: 50,
    },
    {
        title: "Monitor ASUS",
        quantity: 1,
        price: 700,
    },
    {
        title: "USB Flash Drive",
        quantity: 5,
        price: 20,
    },
];

alert(` Общая стоимость вашего заказа: ` + totalAmout(items) + ` $ `);
alert (` Средняя цена 1 товара: ` + avaragePriceOfOneProduct(items) + ` $ ` );
printSorted(items);
function totalAmout(products) {
    let sum = 0;
    for (let counter = 0; counter < products.length; counter++) {
        sum = sum + products[counter].quantity * products[counter].price;
    }
   return sum;
}
  
 function avaragePriceOfOneProduct(products) {
     let totalQuantity = 0;
     let sum = totalAmout(products);
     for (let counter = 0; counter < products.length; counter++) {
         totalQuantity = totalQuantity + products[counter].quantity;
     }
    return result = sum / totalQuantity;
 } 

 function printSorted(items){
     let newArr = items.sort(price);
     console.log(newArr);
 }

