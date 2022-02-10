function getMaxSubSumOn(array){
    let maxSubSum = 0;
    let subSum = 0;
    for(let elm of array){
        subSum += elm;
        if(subSum < 0)
            subSum = 0;
        maxSubSum = Math.max(subSum, maxSubSum);
    }
    return maxSubSum;
}

function getMaxSubSumOn2(array){
    let maxSubSum = 0;
    for(let i = 0; i < array.length; i++){
        let subSum = 0;
        for(let j = i; j < array.length; j++){
            subSum += array[j];
            maxSubSum = Math.max(subSum, maxSubSum);
        }
    }
    return maxSubSum;
}

module.exports = {getMaxSubSumOn, getMaxSubSumOn2}