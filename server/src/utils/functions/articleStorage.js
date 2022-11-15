const checkTime = require("./checkTime");

class ArticlesStorage {
    articles = [];

    setArticles(arr) {
        let now = new Date();
        arr.forEach((elem) => {
            elem.kids = [1, 5, 6];
            elem.descendants = 12;
            elem.time = now.getDate() + "/" + now.getMonth() + "/" + now.getFullYear() + "  " + checkTime(now.getHours()) + ":" + checkTime(now.getMinutes());
            if (!elem.url) {
                elem.url = "The author did not specify the link, sorry";
            }
        })
        this.articles = arr;
    }

}

module.exports = new ArticlesStorage();