module.exports = function (map) {
    let names=[];
    let values=[];
    for(let i in map){
        names.push(i);
        values.push(map[i]);
    }
    return {
        names:names,values:values
    }
};