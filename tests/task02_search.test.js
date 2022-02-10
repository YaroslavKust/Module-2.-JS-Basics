const search = require('../tasks/task02_search');

let array = [2, -1, 5, 4, -3];
let res = {
    min: -3,
    max: 5,
    mediana: 2
};

test('result of search min element for array [2, -1, 5, 4, -3]',()=>{
    expect(search(array)).toEqual(res);
});