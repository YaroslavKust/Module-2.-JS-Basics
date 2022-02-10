function selection(array){
    let maxLength = 0;
    let subLength = 1;
    let endPos = 0;

    for(let i = 0; i < array.length - 1; i++){
        if(array[i] < array[i + 1]){
            subLength++;
            if(maxLength < subLength){
                maxLength = subLength;
                endPos = i + 1;
            }
        }
        else{
            subLength = 1;
        }
    }

    let startPos = endPos + 1 - maxLength;
    let subArray = array.slice(startPos, endPos + 1);

    return subArray;
}

module.exports = selection;