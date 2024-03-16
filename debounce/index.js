function onInputChangePrint() {
    console.log("Event Changed");
}

function debounce(fun, time = 1000) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fun.apply(this, args)
        }, time)
    }
}

const onInputChange = debounce(onInputChangePrint, 1000);