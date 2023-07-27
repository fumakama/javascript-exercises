const getTheTitles = function(obj) {
    return obj.reduce((array, item) => {
        array.push(item.title);
        return array;
    }, []);
};

// Do not edit below this line
module.exports = getTheTitles;
