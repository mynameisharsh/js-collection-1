const obj = {
    a: 1,
    b: [2, 3],
    c: {
      d: 4,
      e: [5, 6],
      f: {
          g: 7
         }
     }
   };

function flat(obj, prefix = "") {
    console.log(Object.keys(obj))

    const result = Object.keys(obj).reduce((acc, item) => {
        const pre = prefix ? prefix + "_" : "";
        if(typeof obj[item] === "object" && obj[item] !== null) {
           Object.assign(acc, flat(obj[item], pre+item))
        } else {
        acc[pre + item] = item
        }
        return acc
    }, {})
    return result
}

console.log(flat(obj))