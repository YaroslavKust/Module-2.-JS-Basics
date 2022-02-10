class Calculator{
    #cache = [];

    #cacheFunc(key, value) 
    {
        if (typeof value == 'undefined') {
            return this.#cache[key];
        }
        this.#cache[key] = value;
    }

    sum(a, b){
        if(typeof a != 'number')
            a = Number(a);
        if(typeof b != 'number')
            b = Number(b);
        let cache_key = 'sum' + '_' + a + '_' + b;
        let result = this.#cacheFunc(cache_key);
        if(result == undefined){
            result = a + b;
            this.#cacheFunc(cache_key, result);
        }
        else{
            console.log("result has taken from cache");
        }
        return result;
    }

    sub(a, b){
        let cache_key = 'sub' + '_' + a + '_' + b;
        let result = this.#cacheFunc(cache_key);
        if(result == undefined){
            result = a - b;
            this.#cacheFunc(cache_key, result);
        }
        else{
            console.log("result has taken from cache");
        }

        return result;
    }

    mul(a, b){
        let cache_key = 'mul' + '_' + a + '_' + b;
        let result = this.#cacheFunc(cache_key);
        if(result == undefined){
            result = a * b;
            this.#cacheFunc(cache_key, result);
        }
        else{
            console.log("result has taken from cache");
        }
        return result;
    }

    div(a, b){
        let cache_key = 'div' + '_' + a + '_' + b;
        let result = this.#cacheFunc(cache_key);
        if(result == undefined){
            result = a / b;
            this.#cacheFunc(cache_key, result);
        }
        else{
            console.log("result has taken from cache");
        }
        return result;
    }
}

module.exports = Calculator;