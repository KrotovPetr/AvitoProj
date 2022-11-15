const Router =require('express');
const router = new Router();
const commentsArr = require('../utils/constants/comments')
const getRoots = require('../utils/functions/getRoots')
const getSecondaryComments = require("../utils/functions/getSecondaryComments");
const commentsController = require("../controllers/commentController");
router.get('/test',(req, res)=>{
    res.json({message:"Ok!"});
})

// router.get('/secondary',commentsController.getRootsComment);
//

router.get('/roots',commentsController.getRootsComment);

module.exports = router;