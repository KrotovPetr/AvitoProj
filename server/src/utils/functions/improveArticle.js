const checkTime = require("./checkTime");

function improveArticle(data) {
    let now = new Date();
    data[0].kids = [1, 5, 6];
    data[0].descendants = 12;
    let month = now.getMonth() + 1
    data[0].time = now.getDate() + "/" + month + "/" + now.getFullYear() + "  " + checkTime(now.getHours()) + ":" + checkTime(now.getMinutes());
    if (!data[0].url) {
        data[0].url = "";
    }
    return data
}

module.exports = improveArticle;