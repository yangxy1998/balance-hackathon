const Player=require('./Player');

function rate(rate) {
    return Math.random() <= rate;
}

module.exports = function() {
    let game=this;
    this.score=0;
    this.players={};
    this.operations=[];
    this.aliveList = function(){
        let list = [];
        for(let i in game.players){
            if(game.players[i].alive) {
                game.players[i].score=game.score;
                list.push(game.players[i]);
            }
        }
        return list;
    };
    this.init = function (version) {
        game=this;
        game.score=0;
        game.players={};
        game.operations=[];
        for(let i in version.players) {
            let player=new Player(version.players[i]);
            player.game=game;
            player.doSometing=true;
            player.getGameEnvironment=game.returnEnvironment;
            game.players[player.name]=player;
        }
    };
    this.returnEnvironment=function () {
        let environment={alive:game.aliveList().length};
        for(let i in game.players){
            environment[i]={};
            environment[i].hp=game.players[i].hp;
            environment[i].alive=game.players[i].alive;
        }
        return environment;
    };
    this.doOperation = function(target,operation){
        game.operations.push({target,operation});
        if(game.operations.length===game.aliveList().length)game.check();
    };
    this.check = function(){
        for(let i in game.operations){
            let operation=game.operations[i].operation;
            let target=game.players[game.operations[i].target];
            let type=operation.name;
            switch(type){
                case 'attack':
                    if(target.operation.name!=='defend')
                        if(rate(operation.rate))
                            target.hp-=operation.most;
                        else
                            target.hp-=operation.base;
                    break;
                case 'slam':
                        if(rate(operation.rate))
                            target.hp-=operation.base;
                    break;
                default:break;
            }
            if(target.hp<0){
                target.hp=0;
            }
            if(target.hp===0&&target.alive){
                target.hp=0;
                target.score=game.score;
                game.score+=1;
                target.alive=false;
            }
        }
        game.operations=[];
        for(let i in game.players){
            if(game.players[i].alive)game.players[i].doSometing=true;
        }
    };
};


