const Router =require('express');
const router = new Router();
const commentsArr = require('../utils/constants/comments')
const getRoots = require('../utils/functions/getRoots')

router.get('/test',(req, res)=>{
    res.json({message:"Ok!"});
})

router.get('/all',(req, res)=>{

    res.json({status: 200, data: commentsArr});
})

router.get('/roots',(req, res)=>{
    res.json({status: 200, data: getRoots(commentsArr)});
})
module.exports = router;