
const largeFunction = (a, b) => {
    for(var i = 0; i < 10000000; i++) {

    }
    return a+b;
}

const memorize = (fn) => {
    cache={};
    return (...args) => {
        const key = JSON.stringify(args);
        if(!cache[key]) {
            cache[key] = fn.apply(this, args)
            return cache[key];
        }
        return cache[key];
    }
}

const fn1 = memorize(largeFunction);

console.time("first");
fn1(1, 2)
console.timeEnd("first");


console.time("second");
fn1(1, 2)
console.timeEnd("second");