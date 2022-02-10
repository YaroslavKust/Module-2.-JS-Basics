const selection = require('../tasks/task03_selection');

let array = [1, 2, 1, 4, 5, 6];
let subArray = [1, 4, 5, 6];

test('test of selection for array [1, 2, 1, 4, 5, 6]',()=>{
    expect(selection(array)).toEqual(subArray);
})