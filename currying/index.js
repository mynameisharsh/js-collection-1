 // Simple Currying
 function test (a) {
    return function test1(b){
        return function test2(c){
            return a*b*c;
        }
    }
}
const r = test(1)(2)(3);
console.log(r);

// Currying with placeholder

function curry(func) {
    return function carried(...args) {
        const realArgs = args.splice(0, func.length);

        const isPlaceHolder = realArgs.some((x) => x === curry.placeholder);
        if(!isPlaceHolder && realArgs.length === func.length) {
            return func.apply(this, realArgs);
        }

        return function next(...nextArgs) {
            return carried.apply(this, mergedArgs(realArgs, nextArgs))
        }
    }
}

function mergedArgs(realArgs, nextArgs) {
    let result = [];
    realArgs.forEach((arg) => {
        if(arg === curry.placeholder) {
            result.push(nextArgs.shift());
        } else {
            result.push(arg)
        }
    })

    return [...result, ...nextArgs]
}

const join = (a, b, c) => {
    return `${a}_${b}_${c}`;
}

const carriedFunc = curry(join);
const _ = curry.placeholder;

const res1= carriedFunc(1,2,3,4,5);
console.log("res1: ", res1)


const res2= carriedFunc(_, 2)(1,3);
console.log("res2: ", res2)

const res3= carriedFunc(_, _, _)(1)(_,3)(2);
console.log("res3: ", res3)