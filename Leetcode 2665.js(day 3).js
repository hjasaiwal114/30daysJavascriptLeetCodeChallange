/**
 * @param {integer} init 
 * @return {increment: FUnction, decrement: Function, reset: Funtion }
 */
var createCounter = function(init) {
    let count = init;
    
    function increment() {
        return ++ count;
    }

    function decrement() {
        return --count;
    }

    function reset() {
        count = init;
        return count;
    }

    return {
        increment: increment,
        decrement: decrement,
        reset: reset

    }
};

class Counter{
    constructor(init) {
        this.init = init;
        this.count = init;
    }
    
}