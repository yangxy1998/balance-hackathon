const DecisionTree = require('decision-tree');
const fs = require('fs');
const version = require('../Game/version');
module.exports = function () {
    const train_data=JSON.parse(fs.readFileSync(`${__dirname}/../data/base/train_data.json`));
    const test_data=JSON.parse(fs.readFileSync(`${__dirname}/../data/base/test_data.json`));
    const class_name = "score";
    const features = ["target","operation","player"];
    for(let i in version().players){
        features.push(version().players[i].name);
    }
    const dt = new DecisionTree(train_data, class_name, features);
    const accuracy = dt.evaluate(test_data);
    const treeModel = dt.toJSON();
    fs.writeFileSync(`${__dirname}/../modules/tree/tree.json`,JSON.stringify(treeModel));
    console.log(treeModel);
    console.log('该模型预测成功率：'+accuracy);
};
