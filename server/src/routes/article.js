const Router =require('express');
const router = new Router();
const articleController = require('../controllers/articleController')
router.get('/test',(req, res)=>{
    res.json({message:"Ok!"});
})

router.get('/all', articleController.getAll)
router.get('/current',articleController.getById);

module.exports = router;