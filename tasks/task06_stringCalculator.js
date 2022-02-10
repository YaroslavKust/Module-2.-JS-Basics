const stringCalculator = {
    sum: function(stringNumberOne, stringNumberTwo){
        let {numberOne, numberTwo} = this.parse(stringNumberOne, stringNumberTwo);
        return numberOne + numberTwo;
    },

    sub: function(stringNumberOne, stringNumberTwo){
        let {numberOne, numberTwo} = this.parse(stringNumberOne, stringNumberTwo);
        return numberOne - numberTwo;
    },

    mul: function(stringNumberOne, stringNumberTwo){
        let {numberOne, numberTwo} = this.parse(stringNumberOne, stringNumberTwo);
        return numberOne * numberTwo;
    },

    div: function(stringNumberOne, stringNumberTwo){
        let {numberOne, numberTwo} = this.parse(stringNumberOne, stringNumberTwo);
        return numberOne / numberTwo;
    },

    divInt: function(stringNumberOne, stringNumberTwo){
        numberOne = parseInt(stringNumberOne);
        numberTwo = parseInt(stringNumberTwo);
        return Math.floor(numberOne / numberTwo);
    },

    parse(numberOne, numberTwo){
        if(numberOne.includes('.'))
            numberOne = parseFloat(numberOne);
        else
            numberOne = parseInt(numberOne);

        if(numberTwo.includes('.'))
            numberTwo = parseFloat(numberTwo);
        else
            numberTwo = parseInt(numberTwo);
        
        return {numberOne, numberTwo};
    }
}

module.exports = stringCalculator;