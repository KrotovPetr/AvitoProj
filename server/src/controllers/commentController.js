const fetch = require("node-fetch");
const getSecondaryComments = require("../utils/functions/getSecondaryComments");
const commentsArr = require("../utils/constants/comments");

class CommentController{
    async getRootsComment(req, res){
        let result = await fetch(`http://localhost:3001/comments?${req.query.id}`).then(result=>result.json()).then(data=>data).catch(e=>console.log(e));
        res.json({status: 200, data: result});
    }
    //
    // async getSecondaryComments(req, res){
    //     let result = getSecondaryCommentsFromDB(req.query.id)
    //     res.json(result);
    // }
}

module.exports = new CommentController();