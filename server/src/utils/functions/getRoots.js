const checkTime = require("./checkTime");

function getRoots(arr) {
    let now = new Date();
    let newArr = arr.filter((elem) => elem.parent === null);
    newArr.forEach((elem) => {
        elem.time = checkTime(now.getHours()) + ":" + checkTime(now.getMinutes());
    })
    return newArr
}

module.exports = getRoots;