const Router =require('express');
const router = new Router();
const articleArr = require('../utils/constants/articles')
router.get('/test',(req, res)=>{
    res.json({message:"Ok!"});
})

router.get('/all',(req, res)=>{
    res.json({stasus:200, data: articleArr});
})
module.exports = router;