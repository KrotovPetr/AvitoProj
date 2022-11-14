const articles = require('../constants/articles')
const currentArticles = require('../constants/currentArticles')
function fillDb(){

    for(let i=articles.length-1;i>articles.length-101;i--){
        let now = new Date();
        articles[i]["kids"]=[1,5,6];
        articles[i]["time"] = now.getDate() + "/" + now.getMonth() + "/"+ now.getFullYear()+"  "+now.getHours()+":"+now.getMinutes();
        currentArticles.unshift(articles[i]);
    }
    let count = 399;
    console.log(currentArticles.length)
    let timer = setInterval(()=>{
        console.log(currentArticles.length)
        if(count>0){
            let now = new Date();
            articles[count]["kids"]=[1,5,6];
            articles[count]["time"] = now.getDate() + "/" + now.getMonth() + "/"+ now.getFullYear()+"  "+now.getHours()+":"+now.getMinutes();
            currentArticles.unshift(articles[count]);
            count--;
        }

    },30000)


}

module.exports = fillDb;