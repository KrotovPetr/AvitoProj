const currentArticles = require('../constants/currentArticles')


function fillDb(article) {
    for (let i = article.length - 1; i > article.length - 101; i--) {
        currentArticles.unshift(article[i]);
    }
    let count = 399;
    let timer = setInterval(() => {
        if (count > 0) {
            currentArticles.unshift(article[count]);
            count--;
        }

    }, 30000)

}

module.exports = fillDb;