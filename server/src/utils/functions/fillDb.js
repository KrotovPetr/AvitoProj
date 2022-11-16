const currentArticles = require('../constants/currentArticles')
const checkTime = require("./checkTime");


function fillDb(article) {
    for (let i = article.length - 1; i > article.length - 101; i--) {
        let now = new Date();
        article[i]["time"] = now.getDate() + "/" + now.getMonth() + "/" + now.getFullYear() + "  " + checkTime(now.getHours()) + ":" + checkTime(now.getMinutes());
        currentArticles.unshift(article[i]);
    }
    let count = 399;
    let timer = setInterval(() => {
        if (count > 0) {
            let now = new Date();
            article[count]["time"] = now.getDate() + "/" + now.getMonth() + "/" + now.getFullYear() + "  " + checkTime(now.getHours()) + ":" + checkTime(now.getMinutes());
            currentArticles.unshift(article[count]);
            count--;
        }

    }, 30000)

}

module.exports = fillDb;