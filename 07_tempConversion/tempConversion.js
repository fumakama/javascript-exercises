const convertToCelsius = function(temp) {
    let result = Math.round((temp - 32) * 5 / 9 * 10) / 10;
    return result;
};

const convertToFahrenheit = function(temp) {
    let result = Math.round((temp * 9 / 5 + 32) * 10) / 10;
    return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
