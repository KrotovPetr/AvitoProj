const checkTime = require("./checkTime");

function improveArticle(data) {
    let now = new Date();
    data[0].kids = [1, 5, 6];
    data[0].descendants = 12;
    data[0].time = now.getDate() + "/" + now.getMonth() + "/" + now.getFullYear() + "  " + checkTime(now.getHours()) + ":" + checkTime(now.getMinutes());
    return data
}

module.exports = improveArticle;