function Hamburger(size) {
    this.size = size;
    this.toppings = [];
    this.getPrice = function() {
        let sizePrice = this.size.price;
        let toppingPrice = 0
        for (let i = 0; i < this.toppings.length; i++) {
            toppingPrice += this.toppings[i]['price'];
        }
        return toppingPrice + sizePrice;
    };

    this.getCalories = function() {
        let sizeCalories = this.size.calories;
        let toppingCalories = 0
        for (let i = 0; i < this.toppings.length; i++) {
            toppingCalories += this.toppings[i]['calories'];
        }
        return sizeCalories + toppingCalories;
    };

    this.addTopping = function(topping) {
        this.toppings.push(topping);
    };
}

Hamburger.SIZE_SMALL = { price: 50, calories: 20 };
Hamburger.SIZE_MEDIUM = { price: 75, calories: 30 };
Hamburger.SIZE_SMALL = { price: 100, calories: 40 };

Hamburger.TOPPING_MAYO = { price: 20, calories: 5 };
Hamburger.TOPPING_CHEESE = { price: 10, calories: 20 };
Hamburger.TOPPING_POTATO = { price: 15, calories: 10 };
Hamburger.TOPPING_SALAD = { price: 20, calories: 5 };
Hamburger.TOPPING_SEASONING = { price: 15, calories: 0 };

const hamburger = new Hamburger(Hamburger.SIZE_SMALL);

hamburger.addTopping(Hamburger.TOPPING_MAYO);
hamburger.addTopping(Hamburger.TOPPING_POTATO);

console.log('Price with sauce: ' + hamburger.getPrice());
console.log('Callories with sauce: ' + hamburger.getCalories());