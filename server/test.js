const fetch = require('node-fetch');
function  getData(){
    let result = fetch("http://localhost:3001/comments").then(result=>result.json()).then(data=>console.log(data)).catch(e=>console.log(e))
}


getData();