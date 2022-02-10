//using functional programming principles

const R = require('ramda');

function search(array){
    return {
        min: min(array, 0),
        max: max(array, 0),
        mediana: mediana(array)
    };
}

function min(array, pos){
    if(pos < array.length - 1){
        return Math.min(array[pos], min(array, pos + 1));
    }
    else{
        return array[pos];
    }
}

function max(array, pos){
    if(pos < array.length - 1){
        return Math.max(array[pos], max(array, pos + 1));
    }
    else{
        return array[pos];
    }
}

function mediana(array){
    const diff = function(a, b) { return a - b; };
    return R.sort(diff, array)[Math.floor(array.length / 2)];
}

module.exports = search;