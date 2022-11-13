export function sortArticles(arr: any): any{
    let ans:any = [];
    arr.forEach((elem:any)=>{
        if(elem.parent===null){
            ans.push(elem);
        }
    })
    console.log(ans);
    return ans;
}