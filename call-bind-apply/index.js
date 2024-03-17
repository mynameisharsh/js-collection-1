const profile = {
    name: "Harsh",
    lname: "Chaudhary"
}

const profile2 = {
    name: "Harsh 1",
    lname: "Chaudhary 1"
}

function printDetails(arg1, arg2) {
   console.log(`${this.name} ${this.lname} ${arg1} ${arg2}`);
}


// Call

// First argument will be instance/object. From second we can pass params
printDetails.call(profile, "Developer", "Front-end");
printDetails.call(profile2, "Developer 2", "Front-end 2");

// Apply

// First argument will be instance/object. From second we can pass params in array
printDetails.call(profile, ["Developer", "Front-end"]);
printDetails.call(profile2, ["Developer 2", "Front-end 2"]);

// Difference between Call and Apply is way argument is passed.

// Bind

const binded1 = printDetails.bind(profile);
const binded2 = printDetails.bind(profile2);

binded1("Developer", "Front-end");
binded2("Developer", "Front-end");



// Polyfill for Bind function
console.log("Polyfill for BIND")
Function.prototype.myBind = function (...args) {
    const obj = this;
    const paramArgs = args.slice(1)
    return function(...args2){
        obj.apply(args[0], [...paramArgs, ...args2])
    }
}

const binded = printDetails.myBind(profile);
binded("Front-end", "Developer");