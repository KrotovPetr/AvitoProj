const fetch = require("node-fetch");
let ansArr = [];

function getSecondaryCommentsFromDb(id){
    ansArr = [];
    let ans = getComments(Number.parseInt(id))
    return ansArr;
}


async function getComments(id){
    let result = await fetch(`http://localhost:3001/comments?id=${id}`).then(result=>result.json()).then(data=>{

        return data}).catch(e=>console.log(e));
    ansArr.push(result[0]);
    (result[0].children.length>0) && result[0].children.forEach((elem)=>{
        getComments(elem)
    })
    return 0;
}

console.log(getSecondaryCommentsFromDb(1))
console.log(ansArr);

// module.exports = getSecondaryCommentsFromDb;