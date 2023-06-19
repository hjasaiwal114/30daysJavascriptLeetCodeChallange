/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const res  =  [];

    for (const i in arr) {
        res.push(fn(arr[i], Number(i)));
    }
    return res;

    // return arr.map(fn);
};
// Functional progrMMING VS procedural programming
// No state, no variables