const binaryConverter = {
    fromBinaryToDecimal: function(bin){
        let dec = 0;
        let decArr = [];
        let size = bin.length - 1;

        for(let i = 0; i < bin.length; i++){
            dec += bin[i]*2**(size - i);
        }

        while(dec >= 1){
            decArr.unshift(dec % 10);
            dec = Math.floor(dec / 10);
        }

        return decArr;
    },

    fromDecimalToBinary: function(dec){
        let bin = [];
        if(Array.isArray(dec))
            dec = this.fromArrayToDecimalNumber(dec, 10);
        while(dec>=1){
            bin.unshift(dec % 2);
            dec = Math.floor(dec / 2);
        }
        return bin;
    },

    fromArrayToDecimalNumber: function(num, base){
        let dec = 0;

        let size = num.length - 1;
        for(let i = 0; i < num.length; i++){
            dec += num[i]*base**(size - i);
        }

        return dec;
    },

    fromAnyToAny: function(num, baseFrom, baseTo){
        let dec = this.fromArrayToDecimalNumber(num, baseFrom);
        let res = [];

        while(dec>=1){
            res.unshift(dec % baseTo);
            dec = Math.floor(dec / baseTo);
        }

        return res;
    }
}

module.exports = binaryConverter;