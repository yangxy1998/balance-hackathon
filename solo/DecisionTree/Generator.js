const fs=require('fs');
const version = require('../Game/version');
const Game = require('../Game/Game');
const TreeAI = require('./TreeAI');
module.exports  = function(){
    let generator=this;
    this.game = new Game();
    this.AIs=[];
    this.winRate={};
    this.version={};
    this.totalScore=0.0;
    let totalRecords=[];
    //let operationRecords=[];
    this.init=function (AI,versionNum) {
        generator.version=version(versionNum);
        generator.reset(AI);
        for(let i in generator.game.players){
            generator.winRate[generator.game.players[i].name]=0;
        }
    };
    this.reset=function (AI) {
        generator.game=new Game();
        generator.AIs=[];
        generator.game.init(generator.version);
        for(let i in generator.game.players){
            generator.AIs.push(new AI(generator.game.players[i]));
        }
    };
    this.run=function () {
        while(true) {
            let alive=generator.game.aliveList().length;
            if (alive === 1) {
                for(let i in generator.game.players){
                    generator.winRate[generator.game.players[i].name]+=generator.game.players[i].score;
                    generator.totalScore+=generator.game.players[i].score;
                }
                for (let i in generator.AIs) {
                    let AI = generator.AIs[i];
                    //operationRecords=operationRecords.concat(AI.fetchRecords());
                }
                return;
            }
            else if(alive===0){
                for(let i in generator.game.players){
                    generator.winRate[generator.game.players[i].name]+=generator.game.players[i].score;
                    generator.totalScore+=generator.game.players[i].score;
                }
                for (let i in generator.AIs) {
                    let AI = generator.AIs[i];
                    //operationRecords=operationRecords.concat(AI.fetchRecords());
                }
                return;
            }
            for (let i in generator.AIs) {
                let AI = generator.AIs[i];
                AI.operate();
            }
        }
    };
    this.createDataSet=function (trainTime,testTime,gameTime) {
        totalRecords=[];
        //operationRecords=[];
        for(let v=0;v<1;v++){
            let i=0;
            while(i<trainTime){
                generator.playSomeGame(gameTime,v);
                let winRate={};
                for(let i in generator.winRate){
                    winRate[i]=generator.winRate[i];
                }
                winRate[0]=generator.version.players[0].operations[0].rate;
                totalRecords.push(winRate);
                i++;
            }
        }
        fs.writeFileSync(`${__dirname}/../data/tree/train_rate_data.json`,JSON.stringify(totalRecords));
        //fs.writeFileSync(`${__dirname}/../data/tree/train_detail_data.json`,JSON.stringify(operationRecords));
        i=0;
        totalRecords=[];
        //operationRecords=[];
        for(let v=0;v<18;v++){
            while(i<testTime){
                generator.playSomeGame(gameTime,v);
                let winRate={};
                for(let i in generator.winRate){
                    winRate[i]=generator.winRate[i];
                }
                totalRecords.push(winRate);
                i++;
            }
        }
        fs.writeFileSync(`${__dirname}/../data/tree/test_rate_data.json`,JSON.stringify(totalRecords));
        //fs.writeFileSync(`${__dirname}/../data/tree/test_detail_data.json`,JSON.stringify(operationRecords));
    };
    this.playSomeGame=function(gameTime,v){
        let i=0;
        generator.init(TreeAI,v);
        while(i<gameTime){
            generator.reset(TreeAI);
            generator.run();
            i++;
        }
        for(let i in generator.winRate){
            generator.winRate[i]/=gameTime;
        }
        generator.winRate.version=generator.version;
        console.log(JSON.stringify(generator.winRate));
    }
};
