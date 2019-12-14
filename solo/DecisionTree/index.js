const Generator = require('./Generator');
module.exports = function(trainTime,testTime,gameTime){
    let generator=new Generator();
    generator.createDataSet(trainTime,testTime,gameTime);
};