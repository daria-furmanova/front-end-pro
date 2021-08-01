function createCalculator(a) {
    return {
        sum: function(b) {
            return a + b
        },
        mult: function(b) {
            return a * b
        },
        sub: function(b) {
            return a - b
        },
        div: function(b) {
            return a / b
        }
    }
}

const calc = createCalculator(100)

console.log(calc.sum(5))
console.log(calc.mult(10))
console.log(calc.sub(2))
console.log(calc.div(4))