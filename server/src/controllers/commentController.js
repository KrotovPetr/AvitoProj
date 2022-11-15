const fetch = require("node-fetch");
const getSecondaryComments = require("../utils/functions/getSecondaryComments");
const getRoots = require("../utils/functions/getRoots");
const getSecondaryCommentsFromDb = require("../utils/functions/getSecondaryComments");

class CommentController {
    async getRootsComment(req, res) {
        let result = await fetch(`http://localhost:3001/comments`).then(result => result.json()).then(data => data).catch(e => console.log(e));
        res.json({status: 200, data: getRoots(result)});
    }


    async getSecondaryComments(req, res) {
        let result = await getSecondaryCommentsFromDb(req.query.id).then(result => {
            res.json({status: 200, data: result})
        });
    }
}

module.exports = new CommentController();