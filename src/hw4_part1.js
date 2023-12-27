var calc = {
    add: function (a, b) { return a + b; },
    subtract: function (a, b) { return a - b; },
    multiply: function (a, b) { return a * b; },
    divide: function (a, b) { return (b !== 0 ? a / b : 'на нуль ділити не можна ;)'); },
};
var calcFn = function (calc, operation, a, b) {
    return calc[operation](a, b);
};
var result = calcFn(calc, "multiply", 5, 5);
console.log(result);
