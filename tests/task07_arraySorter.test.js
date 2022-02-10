const arraySorter = require('../tasks/task07_arraySorter');

const array = [2, 4, 1, 5, 3];
const sortedArray = [1, 2, 3, 4, 5];

test('test of bubble sort for array [2, 4, 1, 5, 3]',()=>{
    expect(arraySorter.bubbleSort(array)).toEqual(sortedArray);
});

test('test of quick sort for array [2, 4, 1, 5, 3]',()=>{
    expect(arraySorter.quickSort(array)).toEqual(sortedArray);
});

test('test of insertion sort for array [2, 4, 1, 5, 3]',()=>{
    expect(arraySorter.insertSort(array)).toEqual(sortedArray);
});

test('test of selection sort for array [2, 4, 1, 5, 3]',()=>{
    expect(arraySorter.selectSort(array)).toEqual(sortedArray);
});