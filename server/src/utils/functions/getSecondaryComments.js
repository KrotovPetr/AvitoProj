let ansArr = [];

function getSecondaryComments(commentArr, id){
    ansArr = [];
    let ans = getComments(Number.parseInt(id),commentArr)
    return ansArr;
}


function getComments(id, commentsArr){
    let ans = commentsArr.filter((elem)=>elem.id === id);
    ansArr.push(ans[0]);
    (ans[0].children.length>0) && ans[0].children.forEach((elem)=>{
        getComments(elem, commentsArr)
    })
    return 0;
}

module.exports = getSecondaryComments;