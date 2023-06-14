const sumAll = function(a, b) {
    if ((Number.isInteger(a) && Number.isInteger(b)) && ((a > 0) && (b > 0))) {
        let sumResult = 0;

        if (a < b) {
            for (let i = a; i <= b; i++) {
                sumResult += i;
            }
        } else if (a > b) {
            for (let i = b; i <= a; i++) {
                sumResult += i;
            }
        }
        return sumResult;
    } else {return 'ERROR'};
};

// Do not edit below this line
module.exports = sumAll;
