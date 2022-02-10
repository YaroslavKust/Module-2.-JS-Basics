const Calculator = require('../tasks/task09_calculator/task09_calculator');
const calc = new Calculator();

let a = '7';
let b = '3.5';

test('a + b',()=>{
    expect(calc.sum(a,b)).toBe(10.5);
});

test('a - b',()=>{
    expect(calc.sub(a,b)).toBe(3.5);
});

test('a * b',()=>{
    expect(calc.mul(a,b)).toBe(24.5);
});

test('a / b',()=>{
    expect(calc.div(a,b)).toBe(2);
});