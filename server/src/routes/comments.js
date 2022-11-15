const Router = require('express');
const router = new Router();
const commentsController = require("../controllers/commentController");
router.get('/test', (req, res) => {
    res.json({message: "Ok!"});
})

router.get('/secondary', commentsController.getSecondaryComments);
router.get('/roots', commentsController.getRootsComment);

module.exports = router;