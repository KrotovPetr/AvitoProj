const fetch = require("node-fetch");
const checkTime = require("./checkTime");


function getSecondaryCommentsFromDb(id, resolve, acc) {
    let result = acc || []
    return new Promise((res, _) => {
        fetch(`http://localhost:3001/comments?id=${id}`).then(result => result.json()).then(async data => {
            let now = new Date();
            data[0]["time"] = checkTime(now.getHours()) + ":" + checkTime(now.getMinutes());
            result.push(data[0])
            if (!data || data[0].children.length === 0) {
                resolve(acc)
            }
            for (const elem of data[0].children) {
                await getSecondaryCommentsFromDb(elem, res, result)
            }
        }).catch(e => _(e));
    })
}

module.exports = getSecondaryCommentsFromDb;