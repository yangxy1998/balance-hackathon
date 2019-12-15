

const mapKeys=function (data) {
    return Index.Mapper({
        A_Hp:data.version.players[0].hp,
        A_Attack_Base:data.version.players[0].operations[0].base,
        A_Attack_Rate:data.version.players[0].operations[0].rate,
        //A_Attack_Most:data.version.players[0].operations[0].most,
        A_Slam_Base:data.version.players[0].operations[1].base,
        A_Slam_Rate:data.version.players[0].operations[1].rate,
        B_Hp:data.version.players[1].hp,
        B_Attack_Base:data.version.players[1].operations[0].base,
        B_Attack_Rate:data.version.players[1].operations[0].rate,
       // B_Attack_Most:data.version.players[1].operations[0].most,
        B_Slam_Base:data.version.players[1].operations[1].base,
        B_Slam_Rate:data.version.players[1].operations[1].rate,
        /*C_Hp:data.version.players[2].hp,
        C_Attack_Base:data.version.players[2].operations[0].base,
        C_Attack_Rate:data.version.players[2].operations[0].rate,
       // C_Attack_Most:data.version.players[2].operations[0].most,
        C_Slam_Base:data.version.players[2].operations[1].base,
        C_Slam_Rate:data.version.players[2].operations[1].rate*/
    });
};
const mapValues=function (data) {
    return Index.Mapper({
        A:data.A,B:data.B
        //,C:data.C
    });
};
const kValues = function (data) {
    return Index.Mapper({
        A_Hp_A_rate:data.weight[0][0],
        A_Hp_B_rate:data.weight[0][1],
        A_Attack_Base_A_rate:data.weight[1][0],
        A_Attack_Base_B_rate:data.weight[1][1],
        A_Attack_Rate_A_rate:data.weight[2][0],
        A_Attack_Rate_B_rate:data.weight[2][1],
        A_Slam_Base_A_rate:data.weight[3][0],
        A_Slam_Base_B_rate:data.weight[3][1],
        A_Slam_Rate_A_rate:data.weight[4][0],
        A_Slam_Rate_B_rate:data.weight[4][1],
        B_Hp_A_rate:data.weight[5][0],
        B_Hp_B_rate:data.weight[5][1],
        B_Attack_Base_A_rate:data.weight[6][0],
        B_Attack_Base_B_rate:data.weight[6][1],
        B_Attack_Rate_A_rate:data.weight[7][0],
        B_Attack_Rate_B_rate:data.weight[7][1],
        B_Slam_Base_A_rate:data.weight[8][0],
        B_Slam_Base_B_rate:data.weight[8][1],
        B_Slam_Rate_A_rate:data.weight[9][0],
        B_Slam_Rate_B_rate:data.weight[9][1]
    });
};

// function execute(data) {
//     var dom = document.getElementById("container");
//     var myChart = echarts.init(dom);
//     var app = {};
//     option = null;
//     var rawData = [];
//     //console.log(data);
//     for(var k = 0;k<6;++k) {
//         var rows0 = [],rows1 = [],rows2 = [];
//         for (let i in data){
//             let keys = mapValues(data[i]);
//             for (let j in keys.values) {
//                 let raw = mapKeys(data[i]).values;
//                 var temp = [];
//                 temp.push(raw[j*6+k]);
//                 temp.push(keys.values[j]);
//                 if(j === "0")rows0.push(temp);
//                 if(j === "1")rows1.push(temp);
//                 if(j === "2")rows2.push(temp);
//             }
//         }
//         var lst = [];
//         lst.push(rows0);
//         lst.push(rows1);
//         lst.push(rows2);
//         rawData.push(lst);
//     }
//     //console.log(rawData);
// }
//
