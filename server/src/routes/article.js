const Router =require('express');
const router = new Router();
const articles = require('../utils/constants/currentArticles')
const getCurrentArticle = require("../utils/functions/getCurrentArticle");
const getNewest = require("../utils/functions/getNewest");
router.get('/test',(req, res)=>{
    res.json({message:"Ok!"});
})

router.get('/all',(req, res)=>{
    res.json({stasus:200, data: getNewest(articles)});
})

router.get('/current',(req, res)=>{
    res.json({stasus:200, data: getCurrentArticle(req.query.id)});
})
module.exports = router;