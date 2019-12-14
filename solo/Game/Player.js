module.exports = function(attr) {
    let player=this;
    this.hp=attr.hp;
    this.alive=true;
    this.score=0;
    this.operations=attr.operations;
    this.name=attr.name;
    this.game=null;
    this.doSometing=false;
    this.operation=null;
    this.getGameEnvironment=null;
    this.operate=function (target,code) {
        if(!player.doSometing||!player.alive)return;
        player.operation=player.operations[code];
        player.doSometing = false;
        player.game.doOperation(target,player.operation);
    };
};