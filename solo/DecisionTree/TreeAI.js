const DecisionTree = require('decision-tree');
const fs = require('fs');
function rate(rate) {
    return Math.random() <= rate;
}
function random(array){
    let choice;
    while(!choice){
        choice=array[parseInt(Math.random()*array.length)];
    }
    return choice;
}
function randomInt(array){
    let length=parseInt(Math.random()*array.length);
    while(length>=array.length)length=parseInt(Math.random()*array.length);
    return length;
}
module.exports = function(player){
    let treeAI=this;
    this.player=player;
    this.records=[];
    let predictor = new DecisionTree(JSON.parse(fs.readFileSync(`${__dirname}/../modules/tree/tree.json`)));
    this.parseEnvironment=function (environment) {
        let ret={};
        for(let i in environment){
            if(i!=='alive')
                ret[i]=environment[i].hp;
        }
        return ret;
    };
    this.operate=function () {
        if(!treeAI.player.alive)return;
        let others=[];
        let environment=treeAI.player.getGameEnvironment();
        for(let i in environment){
            if(i!==player.name&&environment[i].alive)
                others.push(i);
        }
        let max=-1;
        let choices=[];
        for(let i in others){
            for(let j in treeAI.player.operations){
                let data=treeAI.parseEnvironment(environment);
                data.target=others[i];
                data.operation=j;
                data.player=treeAI.player.name;
                let predict=predictor.predict(data);
                if(predict>max){
                    choices=[];
                    max=predict;
                }
                choices.push({target:data.target,
                operation:rate(0.1)
                    ? randomInt(treeAI.player.operations)
                    : data.operation});
            }
        }
        let choice=random(choices);
        treeAI.player.operate(choice.target, choice.operation);
        let data=treeAI.parseEnvironment(environment);
        data.target=choice.target;
        data.operation=choice.operation;
        data.player=treeAI.player.name;
        treeAI.record(data);
    };
    this.record=function (data) {
        treeAI.records.push(data);
    };
    this.fetchRecords=function () {
        for(let i in treeAI.records){
            treeAI.records[i].score=treeAI.player.score;
        }
        return treeAI.records;
    }
};