class Hamburger {

    static SIZE_SMALL = { price: 50, calories: 20 };
    static SIZE_MEDIUM = { price: 75, calories: 30 };
    static SIZE_SMALL = { price: 100, calories: 40 };

    static TOPPING_MAYO = { price: 20, calories: 5 };
    static TOPPING_CHEESE = { price: 10, calories: 20 };
    static TOPPING_POTATO = { price: 15, calories: 10 };
    static TOPPING_SALAD = { price: 20, calories: 5 };
    static TOPPING_SEASONING = { price: 15, calories: 0 };

    constructor(size) {
        this.size = size;
        this.toppings = [];
    }
    getPrice = function() {
        let sizePrice = this.size.price;
        let toppingPrice = this.toppings.reduce((sum, item) => sum + item.price, 0);
        return toppingPrice + sizePrice;
    };

    getCalories = function() {
        let sizeCalories = this.size.calories;
        let toppingCalories = this.toppings.reduce((sum, item) => sum + item.calories, 0);
        return sizeCalories + toppingCalories;
    };

    addTopping = function(topping) {
        this.toppings.push(topping);
    };
}

const hamburger = new Hamburger(Hamburger.SIZE_SMALL);

hamburger.addTopping(Hamburger.TOPPING_MAYO);
hamburger.addTopping(Hamburger.TOPPING_POTATO);

console.log('Price with sauce: ' + hamburger.getPrice());
console.log('Callories with sauce: ' + hamburger.getCalories());