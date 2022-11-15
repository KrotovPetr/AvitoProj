const fetch = require("node-fetch");
const getNewest = require("../utils/functions/getNewest")
const fillDB = require("../utils/functions/fillDb");
const articlesStorage = require('../utils/functions/articleStorage')
const improveArticle = require("../utils/functions/improveArticle");

class ArticleController {

    async getAll(req, res) {
        if (articlesStorage.articles.length === 0) {
            let result = await fetch("http://localhost:3001/articles").then(result => result.json()).then(data => {
                return data
            }).catch(e => console.log(e));
            articlesStorage.setArticles(result)
            fillDB(articlesStorage.articles);
            res.json({status: 200, data: getNewest()});
        } else {
            res.json({status: 200, data: getNewest()});
        }

    }

    async getById(req, res) {
        let result = await fetch(`http://localhost:3001/articles?id=${req.query.id}`).then(result => result.json()).then(data => data).catch(e => console.log(e));
        res.json({status: 200, data: improveArticle(result)});
    }
}

module.exports = new ArticleController();