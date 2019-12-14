function random(array){
    let choice;
    while(!choice){
        choice=array[parseInt(Math.random()*array.length)];
    }
    return choice;
}
function randomInt(array){
    let choice=parseInt(Math.random()*array.length);
    while(choice>=array.length){
        choice=parseInt(Math.random()*array.length);
    }
    return choice;
}
module.exports = function(player){
    let baseAI=this;
    this.player = player;
    this.records=[];
    this.parseEnvironment=function (environment) {
        let ret={};
        for(let i in environment){
            if(i!=='alive')
                ret[i]=environment[i].hp;
        }
        return ret;
    };
    this.operate=function () {
        if(!baseAI.player.alive)return;
        let others=[];
        let environment=baseAI.player.getGameEnvironment();
        for(let i in environment){
            if(i!==player.name&&environment[i].alive)
                others.push(i);
        }
        let target=random(others);
        let operation=randomInt(baseAI.player.operations);
        baseAI.player.operate(target, operation);
        let data=baseAI.parseEnvironment(environment);
        data.target=target;
        data.operation=operation;
        data.player=baseAI.player.name;
        baseAI.record(data);
    };
    this.record=function (data) {
        baseAI.records.push(data);
        console.log(JSON.stringify(data));
    };
    this.fetchRecords=function () {
        for(let i in baseAI.records){
            baseAI.records[i].score=baseAI.player.score;
        }
        return baseAI.records;
    }
};