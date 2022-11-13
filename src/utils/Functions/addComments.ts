import {commentArr} from "../Constants/comments";
let ansArr:any = [];
export function addSecondaryComments(data: any){
    let ans:any = [];
    ansArr = [];
    ans = getComments(data,commentArr)
    console.log(ans)
    return ansArr;
}

function getComments(id:any, commentsArr:any){
    let ans = commentsArr.filter((elem:any)=>elem.id === id);
    ansArr.push(ans[0]);
    (ans[0].children.length>0) && ans[0].children.forEach((elem:any)=>{
        getComments(elem, commentsArr)
    })
    return 0;

}
