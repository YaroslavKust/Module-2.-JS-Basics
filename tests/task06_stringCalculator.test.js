const calculator = require('../tasks/task06_stringCalculator');

let strNum1 = '3.5';
let strNum2 = '2';

test('a + b',()=>{
    expect(calculator.sum(strNum1,strNum2)).toBe(5.5);
});

test('a - b',()=>{
    expect(calculator.sub(strNum1,strNum2)).toBe(1.5);
});

test('a * b',()=>{
    expect(calculator.mul(strNum1,strNum2)).toBe(7);
});

test('a / b',()=>{
    expect(calculator.div(strNum1,strNum2)).toBe(1.75);
});

test('a / b (integer division)',()=>{
    expect(calculator.divInt(strNum1,strNum2)).toBe(1);
});