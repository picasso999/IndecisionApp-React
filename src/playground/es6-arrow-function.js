const square = function (x) {
 return x * x;
};

console.log(square(9));


const multiplier = {
    multiplyBy: 2,
    numbers: [2,6,4,9,8,5],
    multiply() {
        return this.numbers.map((number) => this.multiplyBy * number);
    }
};

console.log(multiplier.multiply());