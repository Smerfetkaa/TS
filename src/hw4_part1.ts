interface ICalc {
  add: (a: number, b: number) => number;
  subtract: (a: number, b: number) => number;
  multiply: (a: number, b: number) => number;
  divide: (a: number, b: number) => number | string;
}
type operations = 'add' | 'subtract' | 'multiply' | 'divide';

const calc: ICalc = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => (b !== 0 ? a / b : 'на нуль ділити не можна ;)'),
};
const calcFn = (calc: ICalc, operation: operations, a: number, b: number) => {
  return calc[operation](a, b);
};

const result = calcFn(calc, "multiply", 5, 5);
console.log(result);
