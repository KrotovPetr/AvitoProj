function getRoots(arr){
    return arr.filter((elem)=>elem.parent === null);
}

module.exports = getRoots;