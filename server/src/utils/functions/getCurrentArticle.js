const currentArticles = require('../constants/currentArticles')
function getCurrentArticle(id){
    return currentArticles.filter((elem)=>elem.id == id)
}

module.exports = getCurrentArticle;