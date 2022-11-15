const currentArticles = require("../constants/currentArticles")

function getNewest() {
    return currentArticles.slice(0, 100);
}

module.exports = getNewest;