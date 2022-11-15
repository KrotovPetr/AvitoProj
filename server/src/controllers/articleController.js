const fetch = require("node-fetch");
const currentArticles = require("../utils/constants/currentArticles");
const articles = require("../utils/constants/articles")
const getNewest = require("../utils/functions/getNewest")
const fillDB = require("../utils/functions/fillDb");

class ArticleController {

    async getAll(req, res){
        console.log(articles)
        if(articles.length === 0){
            let result = await fetch("http://localhost:3001/articles").then(result=>result.json()).then(data=>{
                // articles.concat(data);
                // fillDB();
                return data}).catch(e=>console.log(e));
            // res.json({stasus:200, data: getNewest()});
        } else {
            // res.json({stasus:200, data: getNewest()});
        }

    }

    async getById(req, res){
        let result = await fetch(`http://localhost:3001/articles?${req.query.id}`).then(result=>result.json()).then(data=>data).catch(e=>console.log(e));
        res.json({status:200, data:result});
    }
}

module.exports = new ArticleController();