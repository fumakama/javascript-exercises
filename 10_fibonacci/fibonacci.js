const fibonacci = function(a) {
    let arr = [1, 1];

    let num = +a;
    if (num < 0) {
        return "OOPS";
    }
    if (num === 0) {
        return 0;
    }
    if (num === 1 || num === 2) {
        return arr[num - 1];
    } else {
        while (arr.length < num) {
            let next = arr[arr.length - 1] + arr[arr.length - 2];
            arr.push(next);
        }
        return arr[arr.length - 1];
    }
};

// Do not edit below this line
module.exports = fibonacci;
