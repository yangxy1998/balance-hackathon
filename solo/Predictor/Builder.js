const Predictor = require('./Predictor');
const Mapper = require('./Mapper');
const fs=require('fs');
module.exports = function () {
    const train_data=JSON.parse(fs.readFileSync(`${__dirname}/../data/tree/train_rate_data.json`));
    const test_data=JSON.parse(fs.readFileSync(`${__dirname}/../data/tree/test_rate_data.json`));
    const predictor=new Predictor();
    for(let i in train_data){
        let data=train_data[i];
        predictor.pushMap(mapKeys(data).values, mapValues(data).values);
    }
    predictor.initMLR();
    for(let i in test_data){
        let data=test_data[i];
        console.log('predict:'+predictor.predict(mapKeys(data).values)
            +'reality:'+mapValues(data).values);
    }
    console.log(predictor.getWeights());
    predictor.save();
};
const mapKeys=function (data) {
    return Mapper({
        A_Hp:data.version.players[0].hp,
        A_Attack_Base:data.version.players[0].operations[0].base,
        A_Attack_Rate:data.version.players[0].operations[0].rate,
        A_Attack_Most:data.version.players[0].operations[0].most,
        A_Slam_Base:data.version.players[0].operations[1].base,
        A_Slam_Rate:data.version.players[0].operations[1].rate,
        B_Hp:data.version.players[0].hp,
        B_Attack_Base:data.version.players[1].operations[0].base,
        B_Attack_Rate:data.version.players[1].operations[0].rate,
        B_Attack_Most:data.version.players[1].operations[0].most,
        B_Slam_Base:data.version.players[1].operations[1].base,
        B_Slam_Rate:data.version.players[1].operations[1].rate,
        C_Hp:data.version.players[2].hp,
        C_Attack_Base:data.version.players[2].operations[0].base,
        C_Attack_Rate:data.version.players[2].operations[0].rate,
        C_Attack_Most:data.version.players[2].operations[0].most,
        C_Slam_Base:data.version.players[2].operations[1].base,
        C_Slam_Rate:data.version.players[2].operations[1].rate
    });
};
const mapValues=function (data) {
    return Mapper({
        A_Average_Score:data.A,B_Average_Score:data.B,C_Average_Score:data.C
    });
};