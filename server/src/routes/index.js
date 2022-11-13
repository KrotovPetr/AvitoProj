const Router =require('express');
const router = new Router();
const articleRouter = require('./article')
const commentRouter = require('./comments')

router.use('/articles', articleRouter);
router.use('/comments', commentRouter);


module.exports = router;