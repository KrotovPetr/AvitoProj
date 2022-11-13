const Router =require('express');
const router = new Router();
const commentsArr = require('../utils/constants/comments')
const getRoots = require('../utils/functions/getRoots')
const getSecondaryComments = require("../utils/functions/getSecondaryComments");

router.get('/test',(req, res)=>{
    res.json({message:"Ok!"});
})

router.get('/secondary',(req, res)=>{
    res.json({status: 200, data: getSecondaryComments(commentsArr, req.query.id)});
})

router.get('/roots',(req, res)=>{
    res.json({status: 200, data: getRoots(commentsArr)});
})
module.exports = router;