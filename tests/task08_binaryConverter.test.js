const binaryConverter = require('../tasks/task08_binaryConverter');

let binary = [1,1,0,0,1];
let decimal = [2,5];
let octal = [3,1];
let decimalNum = 25;

test('convert from binary to decimal',()=>{
    expect(binaryConverter.fromBinaryToDecimal(binary)).toEqual(decimal);
});

test('convert from decimal to binary',()=>{
    expect(binaryConverter.fromDecimalToBinary(decimal)).toEqual(binary);
});

test('convert from decimal to octal',()=>{
    expect(binaryConverter.fromAnyToAny(decimal, 10, 8)).toEqual(octal);
});

test('convert from array number to decimal number',()=>{
    expect(binaryConverter.fromArrayToDecimalNumber(octal, 8)).toBe(decimalNum);
});