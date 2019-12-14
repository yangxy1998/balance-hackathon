const fs=require('fs');
const version = require('../Game/version');
const Game = require('../Game/Game');
const BaseAI = require('./BaseAI');
module.exports  = function(){
    let generator=this;
    this.game = new Game();
    this.AIs=[];
    this.records=[];
    this.winRate={};
    this.totalScore=0.0;
    this.init=function (AI) {
        generator=this;
        generator.game=new Game();
        generator.AIs=[];
        generator.game.init(version(parseInt(Math.random()*18)));
        for(let i in generator.game.players){
            generator.AIs.push(new AI(generator.game.players[i]));
        }
    };
    this.run=function () {
        while(true) {
            let alive=generator.game.aliveList().length;
            if (alive === 1) {
                console.log('Game Over,' + generator.game.aliveList()[0].name + ' finally wins!');
                for(let i in generator.game.players){
                    generator.winRate[generator.game.players[i].name]+=generator.game.players[i].score;
                    generator.totalScore+=generator.game.players[i].score;
                }
                for (let i in generator.AIs) {
                    let AI = generator.AIs[i];
                    generator.records=generator.records.concat(AI.fetchRecords());
                }
                return;
            }
            else if(alive===0){
                console.log('Game Over, draw!');
                for(let i in generator.game.players){
                    generator.winRate[generator.game.players[i].name]+=generator.game.players[i].score;
                    generator.totalScore+=generator.game.players[i].score;
                }
                for (let i in generator.AIs) {
                    let AI = generator.AIs[i];
                    generator.records=generator.records.concat(AI.fetchRecords());
                }
                return;
            }
            for (let i in generator.AIs) {
                let AI = generator.AIs[i];
                AI.operate();
            }
        }
    };
    this.createDataSet=function (trainTime,testTime) {
        let i=0;
        for(let i in generator.game.players){
            generator.winRate[generator.game.players[i].name]=0;
        }
        while(i<trainTime){
            generator.init(BaseAI);
            generator.run();
            i++;
        }
        fs.writeFileSync(`${__dirname}/../data/base/train_data.json`,JSON.stringify(generator.records));
        console.log(generator.winRate);
        generator.records=[];
        i=0;
        for(let i in generator.game.players){
            generator.winRate[generator.game.players[i].name]=0;
        }
        while(i<testTime){
            generator.init(BaseAI);
            generator.run();
            i++;
        }
        fs.writeFileSync(`${__dirname}/../data/base/test_data.json`,JSON.stringify(generator.records));
        console.log(generator.winRate);
    }
};
