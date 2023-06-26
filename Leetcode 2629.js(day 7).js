/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
	return function(x) {
        for (const fn of functions.reverse()) {
            x = fn(x);
        }
        return x;
    }
};

// const fn1 = x => x + 1;
// const fn2 = x => 2 * x;

// console.log(fn1(fn2(4)))

// const fn = compose([x => x + 1, x => 2 * x])
// fn(4) // 9
 