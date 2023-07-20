const palindromes = function (str) {

    let proccessedStr = str.split(" ").join("").split(",").
    join("").split(".").join("").toLowerCase();

    let median = Math.floor(proccessedStr.length / 2);
    for (let i = 0; i<= median; i++) {
        if (proccessedStr[i] !== proccessedStr[proccessedStr.length - (i + 1)]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
