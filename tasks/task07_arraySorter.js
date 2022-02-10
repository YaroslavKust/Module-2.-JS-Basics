const arraySorter = {
    bubbleSort: function(array){
        let sortedArray = [...array];
        for(let i = 0; i < sortedArray.length - 1; i++){
            for(let j = i + 1; j < sortedArray.length; j++){
                if(sortedArray[i] > sortedArray[j]){
                    [sortedArray[i], sortedArray[j]] = [sortedArray[j], sortedArray[i]];
                }
            }
        }
        return sortedArray;
    },

    quickSort: function(array){

        let sortedArray = [...array];

        let sortFunc = function(array, left, right){
            if (array.length > 1) {
                let pivot = array[Math.floor((right + left) / 2)], i = left, j  = right;
                while (i <= j) {
                    while (array[i] < pivot) {
                        i++;
                    }
                    while (array[j] > pivot) {
                        j--;
                    }
                    if (i <= j) {
                        [array[i], array[j]] = [array[j], array[i]];
                        i++;
                        j--;
                    }
                }

                let index = i;

                if (left < index - 1) {
                    sortFunc(array, left, index - 1);
                }
                if (index < right) {
                    sortFunc(array, index, right);
                }
            }

            return array;
        }

        return sortFunc(sortedArray, 0, sortedArray.length - 1);
    },

    insertSort: function(array){
        let sortedArray = [...array];

        for (let i = 1; i < sortedArray.length; i++) {
            let current = sortedArray[i];
            let j = i;
            while (j > 0 && sortedArray[j - 1] > current) {
                sortedArray[j] = sortedArray[j - 1];
                j--;
            }
            sortedArray[j] = current;
        }
        return sortedArray;
    },

    selectSort: function(array){
        let sortedArray = [...array];

        for (let i = 0, l = sortedArray.length; i  < l - 1; i++){
            let imin = i;
            for (let j = i + 1; j < l; j++){
                if (sortedArray[imin] > sortedArray[j]){
                    imin = j;
                }
            }
            if (imin !== i){
                [sortedArray[i], sortedArray[imin]] = [sortedArray[imin], sortedArray[i]];
            }
        }
        return sortedArray;
    }
}

module.exports = arraySorter;