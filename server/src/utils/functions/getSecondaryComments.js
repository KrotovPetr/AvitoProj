const fetch = require("node-fetch");


function getSecondaryCommentsFromDb(id, resolve, acc) {
    let result = acc || []
    return new Promise((res, _) => {
        fetch(`http://localhost:3001/comments?id=${id}`).then(result => result.json()).then(async data => {
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


// let ansArr = [];
//
// function getSecondaryCommentsFromDb(id) {
//     ansArr = [];
//
//     return new Promise(async (resolve) => {
//         await getComments(Number.parseInt(id))
//         resolve(ansArr)
//     })
// }
//
//
// async function getComments(id) {
//     let result = await fetch(`http://localhost:3001/comments?id=${id}`).then(result => result.json()).then(data => {
//         return data
//     }).catch(e => console.log(e));
//     console.log(result)
//     ansArr.push(result[0]);
//     (result[0].children.length > 0) && result[0].children.forEach(async (elem) => {
//         await getComments(elem)
//     })
//     return 0;
// }
//
// getSecondaryCommentsFromDb(1)
//     .then((e) => {
//         console.log(e, "res")
//     })

// getSecondaryComments(1)
//     .then((e) => {
//         // console.log("THIS IS RESULT!!!!!!!!")
//         // console.log(e)
//     })

module.exports = getSecondaryCommentsFromDb;