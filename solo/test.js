//用于生成版本胜率数据
const generate = require('./DecisionTree');
const decision = require('./DecisionTree/Builder');
generate(200,10,1000);
//用于生成对局数据
// const generate = require('./BaseData');
// const decision = require('./DecisionTree/Builder');
// generate(1000,100);
// //用于生成一个决策树模型
// decision();