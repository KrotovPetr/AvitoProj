const fetch = require("node-fetch");
const getNewest = require("../utils/functions/getNewest")
const fillDB = require("../utils/functions/fillDb");
const articlesStorage = require('../utils/functions/articleStorage')
const improveArticle = require("../utils/functions/improveArticle");

// const articles = require('../utils/constants/articles')

class ArticleController {

    async getAll(req, res) {
        // console.log(articlesStorage.articles)
        if (articlesStorage.articles.length === 0) {
            let result = await fetch("http://localhost:3001/articles").then(result => result.json()).then(data => {
                return data
            }).catch(e => console.log(e));
            articlesStorage.setArticles(result)
            // console.log(articlesStorage.articles)
            fillDB(articlesStorage.articles);
            res.json({stasus: 200, data: getNewest()});
        } else {
            res.json({stasus: 200, data: getNewest()});
        }

    }

    async getById(req, res) {
        let result = await fetch(`http://localhost:3001/articles?id=${req.query.id}`).then(result => result.json()).then(data => data).catch(e => console.log(e));
        res.json({status: 200, data: improveArticle(result)});
    }
}

module.exports = new ArticleController();