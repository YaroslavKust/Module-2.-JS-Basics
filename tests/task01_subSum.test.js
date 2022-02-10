const task01 = require('../tasks/task01_subSum');

let arr1 = [1, -2, 3, 4, -9, 6];
let res1 = 7;

test('calculate getMaxSubSum O(n2) for array [1, -2, 3, 4, -9, 6]', ()=>{
    expect(task01.getMaxSubSumOn2(arr1)).toBe(res1);
});

test('calculate getMaxSubSum O(n) for array [1, -2, 3, 4, -9, 6]', ()=>{
    expect(task01.getMaxSubSumOn(arr1)).toBe(res1);
});


let arr2 = [-1, -2, -3];
let res2 = 0;

test('calculate getMaxSubSum O(n2) for array [-1, -2, -3]', ()=>{
    expect(task01.getMaxSubSumOn2(arr2)).toBe(res2);
});

test('calculate getMaxSubSum O(n) for array [-1, -2, -3]', ()=>{
    expect(task01.getMaxSubSumOn(arr2)).toBe(res2);
});
