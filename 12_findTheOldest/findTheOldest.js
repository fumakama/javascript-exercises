const findTheOldest = function(arr) {
    return arr.reduce((oldestPerson, currentPerson) => {
        if (!Object.keys(currentPerson).includes('yearOfDeath')) {
            const date = new Date()
            currentPerson['yearOfDeath'] = date.getFullYear();
        }
        return (currentPerson.yearOfDeath - currentPerson.yearOfBirth) >
        (oldestPerson.yearOfDeath - oldestPerson.yearOfBirth) ? 
        currentPerson : oldestPerson;
    }, arr[0])
};

// Do not edit below this line
module.exports = findTheOldest;
