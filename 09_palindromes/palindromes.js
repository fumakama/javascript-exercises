const palindromes = function (str) {

    let proccessedStr = str.split("").filter(item => (!" ,.?!;:".includes(item))).join("").
    toLowerCase();

    let median = Math.floor(proccessedStr.length / 2);
    for (let i = 0; i<= median; i++) {
        if (proccessedStr[i] !== proccessedStr[proccessedStr.length - (i + 1)]) {
            return false;
        }
    }
    return true;
};
/*
const charFilter = function (char) {
    const filterStr = " ,.?!;:";
    if (filterStr.includes(char)) {
        return true;
    } else return false;
} */

// Do not edit below this line
module.exports = palindromes;
